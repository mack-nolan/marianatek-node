import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class MembershipInstancesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: MembershipInstanceListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async update(id: number, data: MembershipInstanceCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async cancel(id: number) {
    const response = await this.request.post(`${basePath}/${id}/cancel`).json();
    return response;
  }

  async previewCancel(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/preview_cancel`)
      .json();
    return response;
  }

  async terminate(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/terminate`)
      .json();
    return response;
  }

  async updatePrice(
    id: number,
    data: {
      membership_price: string;
      exclude_discounts: boolean;
      updated_note: string;
      update_type: string;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/update_price`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/membership_instances";

interface MembershipInstanceCreateOrUpdateParams {
  adjustment_interval_count?: number;
  adjustment_is_excluded_from_discounts?: boolean;
  adjustment_renewal_rate?: string;
  cancellation_datetime?: string;
  cancellation_reason?: string;
  commitment_length?: number;
  guest_usage_interval_limit?: number;
  is_intro_offer?: boolean;
  membership: string;
  membership_product: number;
  payment_interval: "DY" | "WK" | "MO" | "YR";
  payment_interval_length: number;
  renewal_currency: string;
  renewal_limit?: number;
  renewal_rate?: string;
  scheduled_start_datetime?: string;
  user: string;
}

interface MembershipInstanceListOptions extends BaseListOptions {
  cancellation_datetime?: string;
  commitment_length?: number;
  id?: number;
  max_updated_datetime?: string;
  membership?: number;
  membership_product?: number;
  min_updated_datetime?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  payment_interval?: "DY" | "MO" | "WK" | "YR";
  purchase_date?: string;
  renewal_currency?: string;
  renewal_limit?: number;
  renewal_rate?: number;
  status?:
    | "active"
    | "cancelled"
    | "terminated"
    | "payment_failure"
    | "done"
    | "pending_customer_activation"
    | "pending_start_date";
  statuses?: string;
  user?: number;
}
