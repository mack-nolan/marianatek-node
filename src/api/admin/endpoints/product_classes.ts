import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductClassesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ProductClassListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ProductClassCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ProductClassCreateOrUpdateParams) {
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

const basePath = "/product_classes";

interface ProductClassListOptions extends BaseListOptions {
  id?: number;
  name?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
}

interface ProductClassCreateOrUpdateParams {
  name: string;
  default_inventoriable?: boolean;
  default_anonymously_purchasable?: boolean;
}
