import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductCollectionToProductComparisonAssignmentsApi {
  constructor(private readonly request: KyInstance) {}

  async list(
    options: ProductCollectionToProductComparisonAssignmentListOptions
  ) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(
    data: ProductCollectionToProductComparisonAssignmentCreateOrUpdateParams
  ) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(
    id: number,
    data: ProductCollectionToProductComparisonAssignmentCreateOrUpdateParams
  ) {
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

const basePath = "/product_collection_to_product_comparison_assignments";

interface ProductCollectionToProductComparisonAssignmentListOptions
  extends BaseListOptions {
  product_collection?: number;
  product_comparison?: number;
}

interface ProductCollectionToProductComparisonAssignmentCreateOrUpdateParams {
  product_collection: number;
  product_comparison: number;
  weight?: number;
}
