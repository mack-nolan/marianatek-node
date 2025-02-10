import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class TaxRatesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: TaxRateListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: TaxRateCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: TaxRateCreateOrUpdateParams) {
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

const basePath = "/tax_rates";

interface TaxRateListOptions extends BaseListOptions {
  id: number;
  name: string;
  percentage: number;
}

interface TaxRateCreateOrUpdateParams {
  name: string;
  percentage: number;
  min_applicable?: number | null;
  max_applicable?: number | null;
}
