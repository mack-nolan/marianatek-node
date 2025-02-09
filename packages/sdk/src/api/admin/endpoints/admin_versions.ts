import { KyInstance } from "ky";
import { BaseListOptions } from "../../models.js";
import { createSearchParams } from "../../searchParams.js";

const basePath = "/admin_versions";

interface CreateOrActivateAdminVersionData {
  content: string;
  active?: boolean;
  activation_datetime?: string;
  commit_hash?: string;
  branch?: string;
}

export class AdminVersionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options?: BaseListOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request.get(basePath, { searchParams }).json();
    return response;
  }

  async create(data: CreateOrActivateAdminVersionData) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async activate(id: number, data: CreateOrActivateAdminVersionData) {
    const response = await this.request
      .post(`${basePath}/${id}/activate`, { json: data })
      .json();
    return response;
  }
}
