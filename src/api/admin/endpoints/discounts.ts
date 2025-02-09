import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class DiscountsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: DiscountListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: DiscountCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: DiscountCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/discounts";

interface DiscountCreateOrUpdateParams {
  name: string;
  start_datetime?: string;
  end_datetime?: string;
  codes: Array<any>;
  benefit_type?: string | null;
  benefit_proxy_class?: string;
  benefit_value?: string;
  benefit_currency?: string;
  max_global_applications?: number | null;
  max_user_applications?: number | null;
  benefit_includes_all_products?: boolean;
  offer_type?: "Site" | "Voucher" | "User" | "Session";
  benefit_excluded_products?: DiscountProduct[];
  benefit_included_product_classes?: DiscountProductClass[];
  benefit_included_products?: DiscountProduct[];
  condition_membership_contracts?: DiscountContractProduct[];
  user_segment_type: string;
  condition_user_tag?: object | null;
  turf?: TurfConfig;
}

interface DiscountListOptions extends BaseListOptions {
  is_active?: boolean;
  name?: string;
  query?: string;
  user_has_any_locations?: boolean;
}

interface TurfConfig {
  global_turf: {
    enabled: boolean;
  };
  regions: Array<{
    id: number;
    enabled: boolean;
    locations?: Array<{
      id: number;
      enabled: boolean;
    }>;
  }>;
}

interface DiscountProduct {
  id: number;
  name: string;
}

interface DiscountProductClass {
  id: number;
  name: string;
}

interface DiscountContractProduct {
  id: number;
}
