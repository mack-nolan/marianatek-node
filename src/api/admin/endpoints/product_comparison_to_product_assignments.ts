import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductComparisonToProductAssignmentsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ProductComparisonToProductAssignmentListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: ProductComparisonToProductAssignmentCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(
    id: number,
    data: ProductComparisonToProductAssignmentCreateOrUpdateParams
  ) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async delete(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/product_comparison_to_product_assignments";

interface ProductComparisonToProductAssignmentListOptions
  extends BaseListOptions {
  partner?: number;
  product_comparison?: string;
}

interface ProductComparisonToProductAssignmentCreateOrUpdateParams {
  product_comparison: string;
  product: string;
  style?: "standard" | "promoted";
  weight?: number;
  banner?: string | null;
}
