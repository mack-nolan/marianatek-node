import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class SkinnyChildProductsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: SkinnyChildProductListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: SkinnyChildProductCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: SkinnyChildProductCreateOrUpdateParams) {
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

const basePath = "/skinny_child_products";

interface SkinnyChildProductCreateOrUpdateParams {
  parent: number;
}

interface SkinnyChildProductListOptions extends BaseListOptions {
  active_at_partner?: string;
  credit?: string;
  credit_membership_locations?: string;
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
  membership?: string;
  min_date_created?: string;
  min_date_updated?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  product_class?: string;
  product_class_default_anonymously_purchasable?: boolean;
  product_class_exclude_ids?: string;
  product_class_exclude_slugs?: string;
  product_class_id?: number;
  product_class_interface?:
    | "Credit"
    | "Default"
    | "Ding"
    | "EmailCreditGiftCard"
    | "EmailGiftCard"
    | "Membership"
    | "PhysicalCreditGiftCard"
    | "PhysicalGiftCard"
    | "Water";
  product_class_slug?: string;
  query?: string;
  simple_product_query?: string;
  structure?: "child" | "parent" | "standalone";
  upc?: string;
  user_has_any_locations?: boolean;
}
