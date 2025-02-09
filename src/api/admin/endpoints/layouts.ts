import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class LayoutsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: LayoutListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: LayoutCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: LayoutCreateOrUpdateParams) {
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

const basePath = "/layouts";

interface LayoutListOptions extends BaseListOptions {
  capacity?: number;
  classroom?: number;
  id?: number;
  listed?: boolean;
  name?: string;
}

interface LayoutCreateOrUpdateParams {
  name: string;
  classroom: string;
  format: "first-come-first-serve" | "pick-a-spot";
  capacity: number;
  listed?: boolean;
}
