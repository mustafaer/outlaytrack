import { api } from "../../shared/services/server-connection/api-urls";

export class ProjectModel {
  id: string | null;
  name: string;

  constructor() {
    this.id = null;
    this.name = "";
  }
}

export const customizationConfig = {
  api: api.projects.projects,
  urlPath: "projects",
  headers: [
    {
      displayNameKey: "name",
      valueKey: "name",
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
