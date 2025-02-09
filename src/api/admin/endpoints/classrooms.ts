import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ClassroomsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: BaseListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ClassroomCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ClassroomCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/classrooms";

interface ClassroomCreateOrUpdateParams {
  location: string;
  name: string;
  listed?: boolean;
}
