import { KyInstance } from "ky";
import { BaseListOptions } from "../../models.js";
import { createSearchParams } from "../../searchParams.js";

interface ChildProduct_ListOptions extends BaseListOptions {
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
  membership?: boolean;
  min_date_created?: string;
  min_date_updated?: string;
  min_updated_datetime?: string;
  ordering?: string;
  parent?: number;
  partner?: number;
  product_class?: string;
  product_class_default_anonymously_purchasable?: boolean;
  product_class_exclude_ids?: string;
  product_class_exclude_slugs?: string;
  product_class_id?: number;
  product_class_interface?: string;
  product_class_slug?: string;
  query?: string;
  simple_product_query?: string;
  structure?: string;
  upc?: string;
  user_has_any_locations?: boolean;
}

interface ChildProductCreate {
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

export class ChildProduct_Api {
  constructor(private readonly request: KyInstance) {}

  async list(product_class: string, options?: ChildProduct_ListOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request
      .get(basePath(product_class), { searchParams })
      .json();
    return response;
  }

  async create(product_class: string, data: ChildProductCreate) {
    const response = await this.request
      .post(basePath(product_class), { json: data })
      .json();
    return response;
  }
}

const basePath = (product_class: string) => `/child_product_${product_class}`;
