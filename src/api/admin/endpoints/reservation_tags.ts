import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ReservationTagsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ReservationTagListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ReservationTagCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ReservationTagCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async delete(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/reservation_tags";

interface ReservationTagListOptions extends BaseListOptions {
  description?: string;
  icon?: string;
  icon_png?: string;
  id?: number;
  name?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  slug?: string;
  tag_type?: "manual" | "system";
  weight?: number;
}

interface ReservationTagCreateOrUpdateParams {
  name: string;
  slug: string;
  description?: string;
  tag_type?: "system" | "manual";
  weight?: number;
}
