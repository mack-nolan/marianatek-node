import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class PosProductsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: PosProductListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }
}

const basePath = "/pos_products";

interface PosProductListOptions extends BaseListOptions {
  full_text_query?: string;
  max_updated_datetime?: string;
  min_updated_datetime?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
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
  user_has_any_locations?: boolean;
  user_has_all_locations?: boolean;
}
