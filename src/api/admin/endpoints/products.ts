import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ProductListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ProductCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ProductCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async delete(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/products";

interface ProductCreateOrUpdateParams {
  title?: string | null;
  description?: string;
  product_class?: string | null;
  anonymously_purchasable?: boolean | null;
  is_first_timer_only?: boolean;
  is_discountable?: boolean;
  vendor?: string | null;
  sub_category?: string | null;
}

interface ProductListOptions extends BaseListOptions {
  active_at_partner?: boolean;
  credit_membership_locations?: boolean;
  date_created?: string;
  date_updated?: string;
  full_text_query?: string;
  has_stockrecords?: boolean;
  id?: number;
  inventory_location?: string;
  is_discountable?: boolean;
  is_inventoriable?: boolean;
  is_public?: boolean;
  max_date_created?: string;
  max_date_updated?: string;
  max_updated_datetime?: string;
  min_date_created?: string;
  min_date_updated?: string;
  min_updated_datetime?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  partner?: number;
  product_class?: string;
  query?: string;
  simple_product_query?: string;
  structure?: "child" | "parent" | "standalone";
  upc?: string;
  user_has_any_locations?: boolean;
}
