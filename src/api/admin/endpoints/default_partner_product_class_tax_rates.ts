import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

interface DefaultPartnerProductClassTaxRateListOptions extends BaseListOptions {
  id?: number;
  partner?: string;
  product_class?: string;
}

interface DefaultPartnerProductClassTaxRateCreateOrUpdateParams {
  partner_product_class: number;
  tax_rate: number;
}

export class DefaultPartnerProductClassTaxRatesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: DefaultPartnerProductClassTaxRateListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: DefaultPartnerProductClassTaxRateCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(
    id: number,
    data: DefaultPartnerProductClassTaxRateCreateOrUpdateParams
  ) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/default_partner_product_class_tax_rates";
