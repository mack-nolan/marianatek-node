import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ContractsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: BaseListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ContractCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ContractCreateOrUpdateParams) {
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

const basePath = "/contracts";

interface ContractCreateOrUpdateParams {
  billing_type?: string;
  commitment_length?: number | null;
  currency?: string | null;
  customer_usage_limit?: number | null;
  description?: string;
  end_date?: string | null;
  end_type?: string | null;
  grace_period?: number;
  guest_usage_limit?: number | null;
  is_first_timer_only?: boolean;
  is_intro_offer?: boolean;
  membership_category?: number | null;
  membership_type: number;
  name: string;
  payment_interval?: string | null;
  payment_interval_length?: number | null;
  purchase_agreements?: Array<{
    agreement_id: string;
  }> | null;
  renewal_limit?: number | null;
  start_date?: string | null;
  start_type: string;
  archived_at?: string | null;
  user_segment?:
    | "first_timers"
    | "not_previously_purchased"
    | "everyone"
    | null;
}
