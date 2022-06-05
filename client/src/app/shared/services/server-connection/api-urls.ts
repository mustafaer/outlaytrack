import { environment } from "../../../../environments/environment";

const requestProtocol = window.location.protocol + "//";

export const serverAddress = requestProtocol + environment.baseUrl;

export const api = {
  login: {
    login: serverAddress + "auth/signin/",
    passwordRequest: serverAddress + "auth/login/",
    passwordReset: serverAddress + "auth/login/",
    logout: serverAddress + "auth/logout/",
  },
  token: {
    validate: serverAddress + "auth/validate/",
    refresh: serverAddress + "token/refresh/",
  },
  users: {
    users: serverAddress + "users/",
  },
  projects: {
    projects: serverAddress + "projects/",
  },
};
