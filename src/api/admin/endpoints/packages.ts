import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class PackagesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: PackageListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: PackageCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: PackageCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }

  async archive(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/archive`)
      .json();
    return response;
  }

  /**
   *
   * @param id - The ID of child product to archive
   * @returns
   */
  async archiveProduct(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/archive_product`)
      .json();
    return response;
  }

  async getBarcode(id: number) {
    const response = await this.request
      .get(`${basePath}/${id}/generate_barcode`)
      .json();
    return response;
  }

  async getSku(id: number) {
    const response = await this.request
      .get(`${basePath}/${id}/generate_sku`)
      .json();
    return response;
  }

  async getTopSellers() {
    const response = await this.request
      .get(`${basePath}/top_sold_products`)
      .json();
    return response;
  }
}

const basePath = "/packages";

interface PackageListOptions extends BaseListOptions {
  active_at_partner?: string;
  credit?: string;
  credit_membership_locations?: string;
  date_created?: string;
  date_updated?: string;
  full_text_query?: string;
  has_stockrecords?: boolean;
  id?: number;
  inventory_location?: string;
  is_discountable?: boolean;
  is_intro_offer?: boolean;
  is_inventoriable?: boolean;
  is_public?: boolean;
  locations?: string;
  max_date_created?: string;
  max_date_updated?: string;
  max_updated_datetime?: string;
  min_date_created?: string;
  min_date_updated?: string;
  min_updated_datetime?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  parent?: number;
  partner?: number;
  product_class?: string;
  query?: string;
  simple_product_query?: string;
  structure?: string;
  upc?: string;
  user_has_all_locations?: boolean;
  user_has_any_locations?: boolean;
}

interface PackageCreateOrUpdateParams {
  description?: string;
  is_discountable?: boolean;
  slug?: string;
  is_public?: boolean;
  default_inventoriable?: boolean;
  is_first_timer_only?: boolean;
  is_intro_offer?: boolean;
  upc?: string;
  sku?: string;
  purchase_agreements?: string[];
  archived_at?: string;
  user_segment?: string;
  penalty_fee_type?: string;
  sync_with_emailcreditgiftcard?: boolean;
  sync_with_physicalcreditgiftcard?: boolean;
  credit: string;
  fee_none?: boolean;
  fee_loss_of_credit_and_charge?: boolean;
  fee_charge?: boolean;
  fee_loss_of_credit?: boolean;
  expiration_type: "absolute" | "relative";
  absolute?: boolean;
  relative?: boolean;
  expiration_interval_length?: number;
  expiration_interval?: string;
  expiration_datetime?: string;
  credit_quantity?: number;
}
