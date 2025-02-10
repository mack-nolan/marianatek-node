import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductCollectionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ProductCollectionListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ProductCollectionCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ProductCollectionCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/product_collections";

interface ProductCollectionListOptions extends BaseListOptions {
  query?: string;
}

interface ProductCollectionCreateOrUpdateParams {
  name: string;
  slug: string;
  collection_type: "default" | "quick_sale" | "add_ons";
}
