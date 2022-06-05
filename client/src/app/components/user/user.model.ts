import { api } from "../../shared/services/server-connection/api-urls";

export class UserModel {
  id: string | null;
  fullName: string;
  username: string;
  email: string;
  password: string;
  projects: string[];

  constructor() {
    this.id = null;
    this.fullName = "";
    this.username = "";
    this.email = "";
    this.password = "";
    this.projects = [];
  }
}

export const customizationConfig = {
  api: api.users.users,
  urlPath: "users",
  headers: [
    {
      displayNameKey: "fullName",
      valueKey: "fullName",
      type: "text",
    },
    {
      displayNameKey: "username",
      valueKey: "username",
      type: "text",
    },
    {
      displayNameKey: "email",
      valueKey: "email",
      type: "text",
    },
    {
      displayNameKey: "createdAt",
      valueKey: "createdAt",
      type: "date",
    },
    {
      displayNameKey: "updatedAt",
      valueKey: "updatedAt",
      type: "date",
    },
  ],
};
