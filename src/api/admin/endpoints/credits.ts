import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class CreditsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: CreditListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: CreditCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: CreditCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/credits";

interface CreditCreateOrUpdateParams {
  name: string;
  guest_usage?: "users-and-guests" | "users-only" | "guests-only";
  booking_window?: string;
  late_cancel_window?: string;
  permission_specification?: string | null;
  is_active?: boolean;
  location_availability_override?: boolean;
  is_live_stream?: boolean;
  turf_rules: number[];
  class_tag_rules?: number[];
  ding_exempt?: boolean;
}

interface CreditListOptions extends BaseListOptions {
  booking_window?: number;
  guest_usage?: "guests-only" | "users-and-guests" | "users-only";
  id?: number;
  is_active?: boolean;
  late_cancel_window?: number;
  locations?: string;
  name?: string;
  permission_specification?: string;
  query?: string;
  user_has_all_locations?: boolean;
  user_has_any_locations?: boolean;
}
