import { ResponseService } from "../type";
import { DataLogin, LoginPayload } from "./type";
import { SERVICE_MODULE } from "@/constants/service";
import axios from "axios";
import callApi from "@/helpers/network";

export const AuthService = {
  postLogin: {
    call: (payload: LoginPayload) => {
      return axios.post<ResponseService<DataLogin>>(
        `/${SERVICE_MODULE.AUTH}/v1/signin`,
        { email: payload.email, password: payload.password },
        {
          headers: {
            "user-agent": "user-hub",
          },
        }
      );
    },
    key: "post-login",
  },

  postLogout: {
    call: (sessionId: string) => {
      return axios.post<ResponseService<DataLogin>>(
        `/${SERVICE_MODULE.AUTH}/v1/signout/${sessionId}`
      );
    },
    key: "post-logout",
  },

  postRefreshToken: {
    call: (refreshToken: string) => {
      return axios.post<ResponseService<DataLogin>>(
        `/${SERVICE_MODULE.AUTH}/v1/refresh-token`,
        {
          refresh_token: refreshToken,
        }
      );
    },
    key: "post-refresh-token",
  },

  postSignup: {
    call: (payload: LoginPayload) => {
      return axios.post<ResponseService<DataLogin>>(
        `/${SERVICE_MODULE.AUTH}/v1/signup`,
        payload
      );
    },
    key: "post-login",
  },

  getSessions: {
    call: () => {
      return callApi.get<ResponseService<DataLogin>>(
        `/${SERVICE_MODULE.AUTH}/v1/sessions`
      );
    },
    key: "get-sessions",
  },
  deleteSession: {
    call: (sessionId: string) => {
      return callApi.delete<ResponseService<unknown>>(
        `/${SERVICE_MODULE.AUTH}/v1/sessions/${sessionId}`
      );
    },
    key: "delete-session",
  },
};
