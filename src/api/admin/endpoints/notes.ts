import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class NotesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: NoteListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: NoteCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: NoteCreateOrUpdateParams) {
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

const basePath = "/notes";

interface NoteCreateOrUpdateParams {
  author?: string;
  text: string;
  note_object: number;
  is_pinned?: boolean;
}

interface NoteListOptions extends BaseListOptions {
  author?: number;
  author_address_line1?: string;
  author_address_line2?: string;
  author_apply_account_balance_to_fees?: boolean;
  author_birth_date?: string;
  author_city?: string;
  author_country?: string;
  author_email?: string;
  author_emergency_contact_email?: string;
  author_emergency_contact_name?: string;
  author_emergency_contact_phone?: string;
  author_emergency_contact_relationship?: string;
  author_exclude_ids?: string;
  author_first_name?: string;
  author_gender?:
    | "agender"
    | "female"
    | "genderqueer"
    | "male"
    | "non_binary"
    | "other"
    | "prefer_not_to_say"
    | "transgender_female"
    | "transgender_male";
  author_home_location?: number;
  author_id?: number;
  author_is_minimal?: boolean;
  author_last_name?: string;
  author_last_region?: number;
  author_max_updated_datetime?: string;
  author_membership_instances?: number[];
  author_min_updated_datetime?: string;
  author_password?: string;
  author_phone_number?: string;
  author_phone_query?: string;
  author_postal_code?: string;
  author_signed_waiver?: boolean;
  author_state_province?: string;
  author_user_tags?: string;
  class_session?: string;
  id?: number;
  is_pinned?: boolean;
  max_note_datetime?: string;
  min_note_datetime?: string;
  note_content_type?: string;
  note_object_id?: string;
  order?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  query?: string;
  time_clock_shift?: string;
  user?: string;
}
