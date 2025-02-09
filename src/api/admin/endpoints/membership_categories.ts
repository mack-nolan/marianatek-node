import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class MembershipCategoriesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: MembershipCategoryListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: MembershipCategoryCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: MembershipCategoryCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/membership_categories";

interface MembershipCategoryCreateOrUpdateParams {
  name: string;
  description?: string | null;
}

interface MembershipCategoryListOptions extends BaseListOptions {
  id?: number;
  name?: string;
}
