import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

const basePath = "/child_products";

interface ChildProductCreateOrUpdateParams {
  description: string;
  is_discountable: boolean;
  slug?: string;
  is_public?: boolean;
  default_inventoriable?: boolean;
  is_first_timer_only?: boolean;
  parent: number;
  upc?: string;
  sku?: string;
}

export class ChildProductsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options?: BaseListOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request.get(basePath, { searchParams }).json();
    return response;
  }

  async create(data: ChildProductCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: ChildProductCreateOrUpdateParams) {
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
