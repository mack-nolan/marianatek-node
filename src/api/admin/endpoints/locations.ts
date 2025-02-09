import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class LocationsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: LocationListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: LocationCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: LocationCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/locations";

interface LocationCreateOrUpdateParams {
  name: string;
  classroom: string;
  format: "first-come-first-serve" | "pick-a-spot";
  capacity: number;
  listed?: boolean;
}

interface LocationListOptions extends BaseListOptions {
  id?: number;
  is_stripe_enabled?: boolean;
  listed?: boolean;
  name?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  query?: string;
  region?: number;
  timezone?: string;
  user_has_turf_access?: boolean;
}
