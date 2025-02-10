import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class UserTagsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: UserTagListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: UserTagCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: UserTagCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/user_tags";

interface UserTagCreateOrUpdateParams {
  name: string;
  slug: string;
  user_tag_type?: "normal" | "vip";
  description?: string;
  tag_type?: "system" | "manual";
  weight?: number;
}

interface UserTagListOptions extends BaseListOptions {
  description?: string;
  icon?: string;
  icon_png?: string;
  id?: number;
  name?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  query?: string;
  slug?: string;
  tag_type?: string;
  user_tag_type?: string;
  weight?: number;
}
