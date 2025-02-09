import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

interface ClassSessionAdminPostParams {
  start_date: string;
  start_time: string;
  layout: string;
  public: boolean;
  class_session_type: string;
  public_note?: string;
  standby_capacity: number;
  recurring_status: "in_sync" | "stand_alone";
  tags?: string;
  waitlist_capacity?: number;
  is_auto_check_in?: boolean;
  reservation_cutoff_override?: number;
  is_free_class?: boolean;
  live_stream_url?: string;
}

export class ClassSessionAdminsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options?: BaseListOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request.get(basePath, { searchParams }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async archive(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/archive`, { json: data })
      .json();
    return response;
  }

  async cancel(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/cancel`, { json: data })
      .json();
    return response;
  }

  async checkInAllReservations(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/check_in_all_reservations`, { json: data })
      .json();
    return response;
  }

  async holdAllSpots(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/hold_all_spots`, { json: data })
      .json();
    return response;
  }

  async holdSpot(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/hold_spot`, { json: data })
      .json();
    return response;
  }

  async message(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/message`, { json: data })
      .json();
    return response;
  }

  async releaseAllHolds(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/release_all_holds`, { json: data })
      .json();
    return response;
  }

  async releaseHold(id: number, data: ClassSessionAdminPostParams) {
    const response = await this.request
      .post(`${basePath}/${id}/release_hold`, { json: data })
      .json();
    return response;
  }

  async tag(
    id: number,
    data: ClassSessionAdminPostParams & {
      tags: string | null;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/tag`, { json: data })
      .json();
    return response;
  }

  async untag(
    id: number,
    data: ClassSessionAdminPostParams & {
      tags: string | null;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/untag`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/class_session_admins";
