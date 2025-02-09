import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class EmployeesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: EmployeeListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: EmployeeCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: EmployeeCreateOrUpdateParams) {
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
const basePath = "/employees";

interface EmployeeCreateOrUpdateParams {
  user: string;
  recent_location?: string | null;
  groups?: string;
  turfs?: number[];
  payroll_id?: string | null;
  is_active?: boolean;
}

interface EmployeeListOptions extends BaseListOptions {
  can_instruct_classes?: boolean;
  can_work_shifts?: boolean;
  group?: string;
  ids?: string;
  is_active?: boolean;
  is_staff?: boolean;
  locations?: string;
  query?: string;
  recent_location?: number;
  user?: number;
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
  user_exclude_ids?: number[];
  user_first_name?: string;
  user_gender?: string | null;
  user_has_any_locations?: boolean;
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
  users?: string;
}
