export type LoginPayload = {
  email: string;
  password: string;
};

export interface LoginToken {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface DataLogin extends LoginToken { 
  name: string;
}
