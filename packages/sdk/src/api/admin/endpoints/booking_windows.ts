import { KyInstance } from "ky";

interface CreateOrUpdateBookingWindowData {
  name: string;
  window_type: "RL" | "IN";
  window_start_time?: string;
  window_start_repeat_interval?: "DY" | "WK" | "MO";
  window_start_repeat_index?: number;
  reach?: number;
  reach_interval_type?: "MN" | "HR" | "DY" | "WK" | "MO";
  active?: boolean;
}

export class BookingWindowsApi {
  constructor(private readonly request: KyInstance) {}

  async list() {
    const response = await this.request.get(basePath).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: CreateOrUpdateBookingWindowData) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: CreateOrUpdateBookingWindowData) {
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

const basePath = "/booking_windows";
