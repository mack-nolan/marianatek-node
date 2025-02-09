import { KyInstance } from "ky";
import { BaseListOptions, CountryEnum } from "../../models.js";
import { createSearchParams } from "../../searchParams.js";

interface CreateOrUpdateBillingAddressData {
  title?: "Mr" | "Miss" | "Mrs" | "Ms" | "Dr";
  first_name?: string;
  last_name?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city?: string;
  country?: CountryEnum;
  postal_code: string;
  address_sorting_code?: string;
  state_province?: string;
}

export class BillingAddressesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options?: BaseListOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request.get(basePath, { searchParams }).json();
    return response;
  }

  async create(data: CreateOrUpdateBillingAddressData) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: string, data: CreateOrUpdateBillingAddressData) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: string) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/billing_addresses";
