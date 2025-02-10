import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class UsersApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: UserListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: UserCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: UserCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }

  async archive(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/archive`, { json: {} })
      .json();
    return response;
  }

  async changePassword(
    id: number,
    data: {
      current_password: string;
      new_password: string;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/change_password`, { json: data })
      .json();
    return response;
  }

  async mergePreview(
    id: number,
    data: {
      duplicate_user_id: number;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/merge_preview`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/users";

interface UserCreateOrUpdateParams {
  email?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  birth_date?: string;
  phone_number?: string;
  address_line1?: string;
  address_line2?: string;
  address_line3?: string;
  city?: string;
  state_province?: string;
  postal_code?: string;
  address_sorting_code?: string;
  country?: string;
  full_name?: string;
  gender?:
    | "agender"
    | "female"
    | "genderqueer"
    | "male"
    | "non_binary"
    | "other"
    | "prefer_not_to_say"
    | "transgender_female"
    | "transgender_male"
    | null;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  emergency_contact_email?: string;
  last_region?: string;
  signed_waiver?: boolean;
  marketing_opt_in?: boolean;
  is_opted_in_to_sms?: boolean;
  has_vip_tag_cache?: boolean;
  apply_account_balance_to_fees?: boolean;
  home_location?: number;
  is_minimal?: boolean;
  tags?: string;
  current_password?: string;
  password_reset_token?: string;
  company_name?: string;
  archived_at?: string;
  email_opt_in_copy?: string;
  sms_opt_in_copy?: string;
  legal_documents_to_sign?: string[];
  pronouns?: string;
  profile_image?: string;
}

interface UserListOptions extends BaseListOptions {
  address_line1?: string;
  address_line2?: string;
  apply_account_balance_to_fees?: boolean;
  birth_date?: string;
  city?: string;
  country?: string;
  email?: string;
  email_query?: string;
  emergency_contact_email?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  emergency_contact_relationship?: string;
  exclude_ids?: string;
  first_name?: string;
  gender?:
    | "agender"
    | "female"
    | "genderqueer"
    | "male"
    | "non_binary"
    | "other"
    | "prefer_not_to_say"
    | "transgender_female"
    | "transgender_male"
    | null;
  home_location?: number;
  id?: number;
  is_employee?: boolean;
  is_minimal?: boolean;
  last_name?: string;
  prefer_not_to_say?: boolean;
  query?: string;
  signed_waiver?: boolean;
  state_province?: string;
  user_tags?: string;
}
