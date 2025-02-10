import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class RegionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: RegionListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: RegionCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: RegionCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async delete(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/regions";

interface RegionListOptions extends BaseListOptions {
  id?: number;
  listed?: boolean;
  name?: string;
  site?: number;
  user_has_turf_access?: boolean;
}

interface RegionCreateOrUpdateParams {
  name: string;
  site: string;
  listed?: boolean;
}
