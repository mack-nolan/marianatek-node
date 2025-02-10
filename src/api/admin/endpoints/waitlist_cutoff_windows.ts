import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class WaitlistCutoffWindowsApi {
  constructor(private readonly request: KyInstance) {}

  async create(data: WaitlistCutoffWindowCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async list(options: WaitlistCutoffWindowListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
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

  async update(id: number, data: WaitlistCutoffWindowCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}
const basePath = "/waitlist_cutoff_windows";

interface WaitlistCutoffWindowListOptions extends BaseListOptions {
  active?: boolean;
  id?: number;
  name?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  reach?: number;
  reach_interval_type?: "DY" | "HR" | "MN" | "MO" | "WK";
  window_start_repeat_index?: number;
  window_start_repeat_interval?: "DY" | "MO" | "WK";
  window_start_time?: string;
  window_type?: "IN" | "RL";
}

interface WaitlistCutoffWindowCreateOrUpdateParams {
  name: string;
  window_type: "RL" | "IN";
  window_start_time?: string;
  window_start_repeat_interval?: string;
  window_start_repeat_index?: number;
  reach?: number;
  reach_interval_type?: "DAILY" | "WEEKLY" | "MONTHLY";
  active: boolean;
}
