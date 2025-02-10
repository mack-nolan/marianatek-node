import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class SpotHoldsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: SpotHoldListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: SpotHoldCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async release(id: number, data: SpotHoldCreateOrUpdateParams) {
    const response = await this.request
      .post(`${basePath}/${id}/release`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/spot_holds";

interface SpotHoldCreateOrUpdateParams {
  class_session?: string | null;
  spot?: string | null;
  release_date?: string | null;
  hold_type?: "admin" | "soft" | "unavailable";
  comment?: string | null;
}

interface SpotHoldListOptions extends BaseListOptions {
  broker?: number;
  class_session?: number;
  comment?: string;
  creation_date?: string;
  hold_type?: "admin" | "soft" | "unavailable";
  id?: number;
  release_date?: string;
  spot?: number;
}
