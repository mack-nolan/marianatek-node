import { KyInstance } from "ky";

interface EmailUpdateOptions {
  email: string | null;
  password: string | null;
  first_name: string;
  last_name: string;
  birth_date: string | null;
  phone_number: string | null;
  address_line1: string | null;
  address_line2: string | null;
  address_line3: string | null;
  city: string | null;
  state_province: string | null;
  postal_code: string | null;
  address_sorting_code: string | null;
  country: string | null;
  full_name: string | null;
  gender: string | null;
  emergency_contact_name: string | null;
  emergency_contact_relationship: string | null;
  emergency_contact_phone: string | null;
  emergency_contact_email: string | null;
  last_region: string | null;
  signed_waiver: boolean;
  marketing_opt_in: boolean;
  is_opted_in_to_sms: boolean;
  has_vip_tag_cache: boolean;
  apply_account_balance_to_fees: boolean;
  home_location: string | null;
  is_minimal: boolean;
  tags: string | null;
  current_password: string | null;
  password_reset_token: string | null;
  company_name: string | null;
  archived_at: string | null;
  email_opt_in_copy: string;
  sms_opt_in_copy: string;
  legal_documents_to_sign: string[];
  pronouns: string | null;
  profile_image: string | null;
}

export class IdpApi {
  constructor(private readonly request: KyInstance) {}

  async bulkUpdate(data: EmailUpdateOptions) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: EmailUpdateOptions) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/idp/email-update";
