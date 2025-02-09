import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class MembershipTransactionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: MembershipTransactionListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async cancelPenalty(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/cancel_penalty`)
      .json();
    return response;
  }

  async noShowPenalty(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/no_show_penalty`)
      .json();
    return response;
  }
}

const basePath = "/membership_transactions";

interface MembershipTransactionListOptions extends BaseListOptions {
  active: boolean;
  broker: number;
  id: number;
  max_updated_datetime: string;
  membership_instance: string;
  min_updated_datetime: string;
  ordering: string;
  page: number;
  page_size: number;
  parent_membership_transaction: number;
  payment_interval_end_date: string;
  payment_interval_start_date: string;
  transaction_amount: number;
  transaction_datetime: string;
  user: number;
}
