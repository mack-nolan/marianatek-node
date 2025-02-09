import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class GroupsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: GroupListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/groups";

interface GroupListOptions extends BaseListOptions {
  id?: number;
  public?: boolean;
  user_can_assign_group?: boolean;
}
