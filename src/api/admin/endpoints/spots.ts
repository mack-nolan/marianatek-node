import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class SpotsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: SpotsListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: SpotsCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: SpotsCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/spots";

interface SpotsListOptions extends BaseListOptions {
  classroom?: number;
  enabled?: boolean;
  id?: number;
  layout?: number;
  listed?: boolean;
  location?: number;
  name?: string;
  region?: number;
  row_position?: number;
  site?: number;
  spot_type?: number;
  weight?: number;
  x_position?: number;
  y_position?: number;
}

interface SpotsCreateOrUpdateParams {
  layout: number;
  name: string;
  x_position?: number;
  y_position?: number;
  row_position?: number;
  enabled?: boolean;
  spot_type: number;
  listed?: boolean;
  weight?: number;
}
