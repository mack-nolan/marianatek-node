import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ShiftTypesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: { ordering: string }) {
    const response = await this.request
      .get(basePath, {
        searchParams: createSearchParams(options),
      })
      .json();
    return response;
  }

  async create(data: ShiftTypeCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: ShiftTypeCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/shift_types";

interface ShiftTypeCreateOrUpdateParams {
  name: string;
}
