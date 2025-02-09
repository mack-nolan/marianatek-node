import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ParentInventoryTransactionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ParentInventoryTransactionListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: ParentInventoryTransactionCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async setCompleted(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/set_completed`)
      .json();
    return response;
  }

  async setInTransit(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/set_in_transit`)
      .json();
    return response;
  }

  async setPending(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/set_pending`)
      .json();
    return response;
  }
}

const basePath = "/parent_inventory_transactions";

interface ParentInventoryTransactionCreateOrUpdateParams {
  responsible_object?: number | null;
  stock_record: string;
  status: "pending" | "in_transit" | "complete";
  quantity: number;
  transaction_type:
    | "purchase_order"
    | "customer_purchase"
    | "customer_return"
    | "manual_adjustment"
    | "stock_record_transfer";
  note?: string | null;
  previous_inventory_transaction?: number | null;
}

interface ParentInventoryTransactionListOptions extends BaseListOptions {
  current_status?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  partner_code?: string;
  partner_id?: number;
  partner_location?: number;
  partner_name?: string;
  partner_partner_type?: string;
  product_credit?: string;
  product_date_created?: string;
  product_date_updated?: string;
  product_id?: number;
  product_inventory_location?: string;
  product_is_discountable?: boolean;
  product_is_public?: boolean;
  product_max_date_created?: string;
  product_max_date_updated?: string;
  product_max_updated_datetime?: string;
  product_membership?: string;
  product_min_date_created?: string;
  product_min_date_updated?: string;
  product_min_updated_datetime?: string;
  product_parent?: number;
  product_product_class?: string;
  product_product_class_default_anonymously_purchasable?: boolean;
  product_product_class_exclude_ids?: string;
  product_product_class_exclude_slugs?: string;
  product_product_class_id?: number;
  product_product_class_interface?: string;
  product_product_class_slug?: string;
  product_structure?: string;
  product_upc?: string;
  stock_record?: number;
  transaction_type?: string;
}
