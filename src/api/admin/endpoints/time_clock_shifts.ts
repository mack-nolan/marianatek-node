import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class TimeClockShiftsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: TimeClockShiftListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: TimeClockShiftCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: TimeClockShiftCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }

  async clockIn(id: number, data: TimeClockShiftCreateOrUpdateParams) {
    const response = await this.request
      .post(`${basePath}/${id}/clock_in`, { json: data })
      .json();
    return response;
  }

  async clockOut(id: number, data: TimeClockShiftCreateOrUpdateParams) {
    const response = await this.request
      .post(`${basePath}/${id}/clock_out`, { json: data })
      .json();
    return response;
  }
}
const basePath = "/time_clock_shifts";

interface TimeClockShiftCreateOrUpdateParams {
  employee: string;
  location: string;
  start_datetime?: string;
  end_datetime?: string;
  shift_type?: string;
}

interface TimeClockShiftListOptions extends BaseListOptions {
  employee?: string;
  employee_group?: string;
  employee_is_active?: boolean;
  employee_recent_location?: number;
  employee_user?: number;
  employee_user_address_line1?: string;
  employee_user_address_line2?: string;
  employee_user_apply_account_balance_to_fees?: boolean;
  employee_user_birth_date?: string;
  employee_user_city?: string;
  employee_user_country?: string;
  employee_user_email?: string;
  employee_user_emergency_contact_email?: string;
  employee_user_emergency_contact_name?: string;
  employee_user_emergency_contact_phone?: string;
  employee_user_emergency_contact_relationship?: string;
  employee_user_exclude_ids?: string;
  employee_user_first_name?: string;
  employee_user_gender?: string | null;
  employee_user_home_location?: number;
  employee_user_id?: number;
  employee_user_is_minimal?: boolean;
  employee_user_last_name?: string;
  employee_user_last_region?: number;
  employee_user_max_updated_datetime?: string;
  employee_user_membership_instances?: number[];
  employee_user_min_updated_datetime?: string;
  employee_user_password?: string;
  employee_user_phone_number?: string;
  employee_user_phone_query?: string;
  employee_user_postal_code?: string;
  employee_user_signed_waiver?: boolean;
  employee_user_state_province?: string;
  employee_user_user_tags?: string;
  employee_users?: number[];
  id?: number;
  location?: string;
  location_id?: number;
  location_listed?: boolean;
  location_name?: string;
  location_phone_number?: string;
  location_region?: number;
  location_timezone?: string;
  location_user_has_turf_access?: boolean;
  max_end_datetime?: string;
  max_start_datetime?: string;
  min_end_datetime?: string;
  min_start_datetime?: string;
  open?: boolean;
  query?: string;
  shift_type?: string;
  shift_type_name?: string;
  user_address_line1?: string;
  user_address_line2?: string;
  user_apply_account_balance_to_fees?: boolean;
  user_birth_date?: string;
  user_city?: string;
  user_country?: string;
  user_email?: string;
  user_emergency_contact_email?: string;
  user_emergency_contact_name?: string;
  user_emergency_contact_phone?: string;
  user_emergency_contact_relationship?: string;
  user_exclude_ids?: string;
  user_first_name?: string;
  user_gender?: string | null;
  user_has_turf_access?: boolean;
  user_home_locaiton?: number;
  user_home_location?: number;
  user_id?: number;
  user_is_minimal?: boolean;
  user_last_name?: string;
  user_last_region?: number;
  user_max_updated_datetime?: string;
  user_membership_instances?: number[];
  user_min_updated_datetime?: string;
  user_password?: string;
  user_phone_number?: string;
  user_phone_query?: string;
  user_postal_code?: string;
  user_signed_waiver?: boolean;
  user_state_province?: string;
  user_user_tags?: string;
}
