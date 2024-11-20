import axios from "axios";
import { AuthService } from "@/services/auth";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { STORAGE_KEY } from "@/constants/storage";
import { API_BASE_URL } from "@/constants/config";

const skipEmptyParam = (obj: Record<string, unknown>) => {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
  return obj
}

const callApi = axios.create({
  headers: { Accept: "application/json" },
  baseURL: `${API_BASE_URL}/tds-user-feature-hub`,
});

callApi.interceptors.request.use(
  async (config) => {

    if (config.params) {
      config.params = skipEmptyParam(config.params);
    }

    if (config.headers?.Authorization) {
      return config;
    }

    const accessToken = getCookie(STORAGE_KEY.ACCESS_TOKEN);
    const tokenType = getCookie(STORAGE_KEY.TOKEN_TYPE);

    Object.assign(config.headers, {
      Authorization: `${tokenType} ${accessToken}`,
    });

    return config;
  },
  async (error) => {
    console.error(error)
    return Promise.reject(error)
  },
);

callApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;
    const errorMessage = error.response?.data?.error;

    const unAuthorize = error.response?.data?.statusCode === 401 || [
      "Token is expired",
      "Access token expired!",
    ].includes(errorMessage);

    if (unAuthorize && !config?.hasReqestRefreshToken) {
      config.hasReqestRefreshToken = true;

      try {
        const { access_token, token_type } = await revalidateToken();
        Object.assign(config.headers, {
          Authorization: `${token_type} ${access_token}`,
        });

        return callApi(config);

      } catch {
        deleteCookie(STORAGE_KEY.ACCESS_TOKEN);
        deleteCookie(STORAGE_KEY.REFRESH_TOKEN);
        deleteCookie(STORAGE_KEY.TOKEN_TYPE);
        window.location.replace(`/login?redirect=${window.location.pathname}`);
      }

    }
    return Promise.reject(error);
  }
);



export const revalidateToken = async () => {
  try {
    const currentRefreshToken = await getCookie(STORAGE_KEY.REFRESH_TOKEN);
    if (!currentRefreshToken) throw new Error('NO REFRESH TOKEN');
    const { access_token = '', refresh_token = '', token_type = '' } = (await AuthService.postRefreshToken.call(currentRefreshToken))?.data?.data ?? {};
    setCookie(STORAGE_KEY.ACCESS_TOKEN, access_token);
    setCookie(STORAGE_KEY.REFRESH_TOKEN, refresh_token);
    setCookie(STORAGE_KEY.TOKEN_TYPE, token_type);
    return { access_token, refresh_token, token_type };
  } catch (error) {
    throw error;
  }
}

export default callApi;
