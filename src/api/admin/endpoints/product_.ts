import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class Product_Api {
  constructor(private readonly request: KyInstance) {}

  async list(slug: string, options: Product_ListOptions) {
    const response = await this.request
      .get(basePath(slug), {
        searchParams: createSearchParams(options),
      })
      .json();
    return response;
  }

  async create(slug: string, data: Product_CreateOrUpdateParams) {
    const response = await this.request
      .post(basePath(slug), {
        json: data,
      })
      .json();
    return response;
  }

  async get(slug: string, id: number) {
    const response = await this.request.get(`${basePath(slug)}/${id}`).json();
    return response;
  }

  async destroy(slug: string, id: number) {
    const response = await this.request
      .delete(`${basePath(slug)}/${id}`)
      .json();
    return response;
  }
}

const basePath = (classSlug: string) => `/product_${classSlug}`;

interface Product_ListOptions extends BaseListOptions {
  active_at_partner?: string;
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
  max_updated_datetime?: string;
  min_date_created?: string;
  min_date_updated?: string;
  ordering?: string;
  page_size?: number;
  user_has_any_locations?: boolean;
}

interface Product_CreateOrUpdateParams {
  description: string;
  is_discountable: boolean;
  slug: string | null;
  is_public: boolean;
  default_inventoriable: boolean | null;
  is_first_timer_only: boolean;
  parent: number;
  upc: string | null;
  sku: string | null;
}
