import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductPromotionToChildProductAssignmentsApi {
  constructor(private readonly request: KyInstance) {}

  async list(
    options: BaseListOptions & {
      product_promotion?: number;
    }
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
}

const basePath = "/product_promotion_to_child_product_assignments";
