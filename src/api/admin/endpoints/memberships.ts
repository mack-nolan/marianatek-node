import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class MembershipsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: MembershipListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: MembershipCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: MembershipCreateOrUpdateParams) {
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

const basePath = "/memberships";

interface MembershipCreateOrUpdateParams {
  name: string;
  booking_window: string;
  late_cancel_window: string;
  permission_specification?: string | null;
  guest_usage?: "users-and-guests" | "users-only" | "guests-only";
  is_active?: boolean;
  location_availability_override?: boolean;
  is_live_stream?: boolean;
  ding_exempt?: boolean;
  turf_rules: number[];
  class_tag_rules?: number[];
}

interface MembershipListOptions extends BaseListOptions {
  booking_window?: number;
  guest_usage?: "guests-only" | "users-and-guests" | "users-only";
  id?: number;
  is_active?: boolean;
  late_cancel_window?: number;
  locations?: string;
  name?: string;
  permission_specification?: number;
  query?: string;
  user_has_all_locations?: boolean;
  user_has_any_locations?: boolean;
}
