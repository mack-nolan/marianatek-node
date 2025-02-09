import { KyInstance } from "ky";
import { BaseListOptions } from "../../models.js";
import { createSearchParams } from "../../searchParams.js";

const basePath = "/account_transactions";

interface ListAccountTransactionsOptions extends BaseListOptions {
  broker?: number;
  id?: number;
  parent_account_transaction?: number;
  revenue_type?: "cash" | "comp" | "migration";
  transaction_amount?: number;
  transaction_currency?: string;
  transaction_datetime?: string;
  user?: number;
}

interface CreateAccountTransactionData {
  broker?: number;
  transaction_amount: string;
  transaction_currency: string;
  parent_account_transaction?: number;
  user: number;
  revenue_type?: "cash" | "comp" | "migration";
}

export class AccountTransactionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options?: ListAccountTransactionsOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request.get(basePath, { searchParams }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: CreateAccountTransactionData) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }
}
