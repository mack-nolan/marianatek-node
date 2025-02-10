import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class StockRecordsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: StockRecordListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: StockRecordCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: StockRecordCreateOrUpdateParams) {
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

const basePath = "/stock_records";

interface StockRecordCreateOrUpdateParams {
  product: number;
  location: number;
  quantity: number;
}

interface StockRecordListOptions extends BaseListOptions {
  id: number;
  inventoriable: boolean;
  ordering: string;
  page: number;
  page_size: number;
  partner: number;
  partner_code: string;
  partner_id: number;
  partner_location: number;
  partner_name: string;
  partner_partner_type: string;
  product: number;
  product_class_default_anonymously_purchasable: boolean;
  product_class_exclude_ids: string;
  product_class_exclude_slugs: string;
  product_class_id: number;
  product_class_interface: string;
  product_class_slug: string;
  product_credit: string;
  product_date_created: string;
  product_date_updated: string;
  product_id: number;
  product_inventory_location: string;
  product_is_discountable: boolean;
  product_is_public: boolean;
  product_max_date_created: string;
  product_max_date_updated: string;
  product_max_updated_datetime: string;
  product_membership: string;
  product_min_date_created: string;
  product_min_date_updated: string;
  product_min_updated_datetime: string;
  product_parent: number;
  product_product_class: string;
  product_product_class_default_anonymously_purchasable: boolean;
  product_product_class_exclude_ids: string;
  product_product_class_exclude_slugs: string;
  product_product_class_id: number;
  product_product_class_interface: string;
  product_product_class_slug: string;
  product_structure: "standalone" | "parent" | "child";
  product_upc: string;
  query: string;
}
