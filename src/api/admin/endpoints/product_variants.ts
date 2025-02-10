import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ProductVariantsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ProductVariantListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ProductVariantCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ProductVariantCreateOrUpdateParams) {
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

const basePath = "/product_variants";

interface ProductVariantListOptions extends BaseListOptions {
  active_at_partner?: boolean;
  credit?: boolean;
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
  membership?: string;
  min_date_created?: string;
  min_date_updated?: string;
  min_updated_datetime?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  parent?: number;
  partner?: number;
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
  user_has_any_locations?: boolean;
  upc?: string;
}

interface ProductVariantCreateOrUpdateParams {
  sku?: string;
  barcode?: string;
  is_discountable?: boolean;
  parent: string;
  region_overrides?: Array<{
    id: string;
    name?: string;
    location_overrides: Array<{ id: string; name?: string }>;
  }>;
  price: string;
  is_available: boolean;
  is_inventoriable: boolean;
  variant_attributes?: Array<{
    name?: string;
    code?: string;
    attribute_type?: string;
    value: string | null;
  }>;
  cost_price?: string;
}
