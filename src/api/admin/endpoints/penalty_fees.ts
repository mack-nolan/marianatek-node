import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class PenaltyFeesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: PenaltyFeeListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  /**
   *
   * @param id A unique integer value identifying this ding
   * @returns
   */
  async charge(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/attempt_charge`)
      .json();
    return response;
  }

  /**
   *
   * @param id A unique integer value identifying this ding
   * @returns
   */
  async waive(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/waive_charge`)
      .json();
    return response;
  }
}
const basePath = "/penalty_fees";

interface PenaltyFeeListOptions extends BaseListOptions {
  is_charge_date_null?: boolean;
  is_outstanding?: boolean;
  is_waived?: boolean;
  max_updated_datetime?: string;
  min_updated_datetime?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  user?: number;
  user_has_all_locations?: boolean;
  user_has_any_locations?: boolean;
}
