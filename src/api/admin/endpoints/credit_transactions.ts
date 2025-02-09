import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class CreditTransactionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: CreditTransactionListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: CreditTransactionCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: CreditTransactionCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async penaltyRetrieve(id: number) {
    const response = await this.request
      .get(`${basePath}/${id}/cancel_penalty`)
      .json();
    return response;
  }

  async noShowPenaltyRetrieve(id: number) {
    const response = await this.request
      .get(`${basePath}/${id}/no_show_penalty`)
      .json();
    return response;
  }
}

const basePath = "/credit_transactions";

interface CreditTransactionCreateOrUpdateParams {
  transaction_amount?: number;
  transaction_penalty_fee_type?: string;
  transaction_currency?: string;
  credit: number;
  user: number;
  parent_credit_transaction?: number;
  expiration_datetime?: string;
  note?: string;
  is_intro_offer?: boolean;
}

interface CreditTransactionListOptions extends BaseListOptions {
  active?: boolean;
  broker?: number;
  credit?: number;
  expiration_datetime?: string;
  id?: number;
  is_expired?: boolean;
  max_updated_datetime?: string;
  min_updated_datetime?: string;
  parent_credit_transaction?: number;
  remaining_credits_cache?: number;
  transaction_amount?: number;
  transaction_currency?: string;
  transaction_datetime?: string;
  user?: number;
}
