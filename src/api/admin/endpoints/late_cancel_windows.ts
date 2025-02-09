import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class LateCancelWindowsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: LateCancelWindowListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: LateCancelWindowCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: LateCancelWindowCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/late_cancel_windows";

interface LateCancelWindowCreateOrUpdateParams {
  name: string;
  window_type: "RL" | "IN";
  window_start_time?: string | null;
  window_start_repeat_interval?: "DY" | "MO" | "WK" | null;
  window_start_repeat_index?: number | null;
  reach?: number;
  reach_interval_type?: "DY" | "HR" | "MN" | "MO" | "WK";
  active?: boolean;
}

interface LateCancelWindowListOptions extends BaseListOptions {
  active?: boolean;
  id?: number;
  name?: string;
  reach?: number;
  reach_interval_type?: "DY" | "HR" | "MN" | "MO" | "WK";
  window_start_repeat_interval?: "DY" | "MO" | "WK" | null;
  window_type?: "IN" | "RL";
}
