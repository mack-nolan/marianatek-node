import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ClassSessionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: BaseListOptions) {
    const response = await this.request
      .get(basePath, {
        searchParams: createSearchParams(options),
      })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: ClassSessionCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: ClassSessionCreateOrUpdateParams) {
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

const basePath = "/class_sessions";

interface ClassSessionCreateOrUpdateParams {
  layout: string;
  start_date: string;
  start_time: string;
  instructors: string;
  class_session_type: string;
  booking_limit: string | null;
  public_note: string | null;
  live_stream_url: string | null;
  standby_capacity: number;
  recurring_status: "in_sync" | "stand_alone";
  tags: string | null;
  waitlist_capacity: number | null;
  is_auto_check_in: boolean;
  should_reuse_live_stream_url: boolean;
  booking_window_override: string | null;
  late_cancel_window_override: string | null;
  waitlist_cutoff_window_override: string | null;
  reservation_cutoff_override: number | null;
  is_free_class: boolean;
}
