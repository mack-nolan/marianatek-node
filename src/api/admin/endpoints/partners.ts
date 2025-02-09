import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class PartnersApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: PartnerListOptions) {
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

const basePath = "/partners";

export interface PartnerListOptions extends BaseListOptions {
  code?: string;
  id?: number;
  location?: number;
  name?: string;
  partner_type?: "location" | "migration" | "online";
}
