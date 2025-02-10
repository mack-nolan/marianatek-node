import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ReservationsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ReservationListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: ReservationCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async assignFromWaitlist(id: number, data: ReservationCreateOrUpdateParams) {
    const response = await this.request
      .post(`${basePath}/${id}/assign_from_waitlist`, { json: data })
      .json();
    return response;
  }

  async assignToSpot(id: number, data: ReservationCreateOrUpdateParams) {
    const response = await this.request
      .post(`${basePath}/${id}/assign_to_spot`, { json: data })
      .json();
    return response;
  }

  async cancel(id: number) {
    const response = await this.request.post(`${basePath}/${id}/cancel`).json();
    return response;
  }

  async changeSpot(
    id: number,
    data: {
      spot: number;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/change_spot`, { json: data })
      .json();
    return response;
  }

  async checkIn(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/check_in`)
      .json();
    return response;
  }

  async checkOut(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/check_out`)
      .json();
    return response;
  }

  async convertGuest(id: number, data: { user: number }) {
    const response = await this.request
      .post(`${basePath}/${id}/convert_guest`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/reservations";

interface ReservationCreateOrUpdateParams {
  booked_on_behalf_of_user?: string | null;
  class_session: string;
  guest_email?: string | null;
  guest_name?: string | null;
  payment_options?: any[] | null;
  reservation_type?: string;
  reserved_for_guest?: boolean;
  spot?: string | null;
  user: string;
}

interface ReservationListOptions extends BaseListOptions {
  billing_cycle?: number;
  booked_on_behalf_of_user?: number;
  broker?: number;
  cancel_date?: string;
  check_in_date?: string;
  class_session?: number;
  class_session_class_session_type?: string;
  class_session_class_tags?: string;
  class_session_classroom?: string;
  class_session_has_instructors?: boolean;
  class_session_hour?: string;
  class_session_is_cancelled?: boolean;
  class_session_layout?: string;
  class_session_location?: string;
  class_session_max_date?: string;
  class_session_max_datetime?: string;
  class_session_max_end_datetime?: string;
  class_session_max_updated_datetime?: string;
  class_session_min_date?: string;
  class_session_min_datetime?: string;
  class_session_min_end_datetime?: string;
  class_session_min_updated_datetime?: string;
  class_session_public?: boolean;
  class_session_recurring_id?: string;
  class_session_region?: string;
  class_session_week_day?: string;
  creation_date?: string;
  credit_transactions?: number;
  credit_transactions_broker?: number;
  credit_transactions_credit?: number;
  credit_transactions_expiration_datetime?: string;
  credit_transactions_id?: number;
  credit_transactions_is_expired?: boolean;
  credit_transactions_max_updated_datetime?: string;
  credit_transactions_min_updated_datetime?: string;
  credit_transactions_parent_credit_transaction?: string;
  credit_transactions_remaining_credits_cache?: number;
  credit_transactions_transaction_amount?: number;
  credit_transactions_transaction_currency?: string;
  credit_transactions_transaction_datetime?: string;
  credit_transactions_user?: number;
  guest_email?: string;
  id?: number;
  location?: number;
  max_updated_datetime?: string;
  membership_instance?: number;
  membership_transactions?: number;
  membership_transactions_broker?: number;
  membership_transactions_id?: number;
  membership_transactions_max_updated_datetime?: string;
  membership_transactions_membership_instance?: string;
  membership_transactions_min_updated_datetime?: string;
  membership_transactions_parent_membership_transaction?: number;
  membership_transactions_payment_interval_end_date?: string;
  membership_transactions_payment_interval_start_date?: string;
  membership_transactions_transaction_amount?: number;
  membership_transactions_transaction_datetime?: string;
  membership_transactions_user?: number;
  min_updated_datetime?: string;
  order?: number;
  ordering?: string;
  page?: number;
  page_size?: number;
  reservation_type?: "standard" | "standby" | "waitlist";
  reserved_for_guest?: boolean;
  spot?: number;
  status?: string;
  user?: number;
  user_or_booked_on_behalf_of_user?: string;
}
