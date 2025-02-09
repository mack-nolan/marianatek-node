import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class InventoryTransactionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: InventoryTransactionListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/inventory_transactions";

interface InventoryTransactionListOptions extends BaseListOptions {
  parent_inventory_transaction?: number;
  status?: "complete" | "in_transit" | "pending";
  transaction_type?:
    | "customer_purchase"
    | "customer_return"
    | "manual_adjustment"
    | "purchase_order"
    | "stock_record_transfer";
  stock_record_transfer?: "stock_record_transfer";
}
