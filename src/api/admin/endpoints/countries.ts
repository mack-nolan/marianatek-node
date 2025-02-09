import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

interface CountryListOptions extends BaseListOptions {
  is_shipping_country?: boolean;
  iso_3166_1_a2?: string;
  iso_3166_1_a3?: string;
  iso_3166_1_numeric?: string;
}

export class CountriesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: CountryListOptions) {
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

const basePath = "/countries";
