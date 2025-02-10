import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class ReservationLogMessagesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: ReservationLogMessageListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/reservation_log_messages";

interface ReservationLogMessageListOptions extends BaseListOptions {
  class_session?: number;
  class_session_booked_on_behalf_of_user?: number;
  class_session_broker?: number;
  class_session_cancel_date?: string;
  class_session_check_in_date?: string;
  class_session_class_session?: number;
  class_session_class_session_class_session_type?: string;
  class_session_class_session_class_tags?: string;
  class_session_class_session_classroom?: string;
  class_session_class_session_has_instructors?: boolean;
  class_session_class_session_hour?: string;
  class_session_class_session_is_cancelled?: boolean;
  class_session_class_session_layout?: string;
  class_session_class_session_location?: string;
  class_session_class_session_max_date?: string;
  class_session_class_session_max_datetime?: string;
  class_session_class_session_max_end_datetime?: string;
  class_session_class_session_max_updated_datetime?: string;
  class_session_class_session_min_date?: string;
  class_session_class_session_min_end_datetime?: string;
  class_session_class_session_min_updated_datetime?: string;
  class_session_class_session_public?: boolean;
  class_session_class_session_recurring_id?: string;
  class_session_class_session_region?: string;
  class_session_class_session_week_day?: string;
  class_session_creation_date?: string;
  class_session_credit_transactions?: number;
  class_session_credit_transactions_broker?: number;
  class_session_credit_transactions_credit?: number;
  class_session_credit_transactions_expiration_datetime?: string;
  class_session_credit_transactions_id?: number;
  class_session_credit_transactions_is_expired?: boolean;
  class_session_credit_transactions_max_updated_datetime?: string;
  class_session_credit_transactions_min_updated_datetime?: string;
  class_session_credit_transactions_parent_credit_transaction?: string;
  class_session_credit_transactions_transaction_amount?: number;
  class_session_credit_transactions_transaction_currency?: string;
  class_session_credit_transactions_transaction_datetime?: string;
  class_session_credit_transactions_user?: number;
  class_session_id?: number;
  class_session_location?: number;
  class_session_max_updated_datetime?: string;
  class_session_membership_transactions?: number;
  class_session_membership_transactions_broker?: number;
  class_session_membership_transactions_id?: number;
  class_session_membership_transactions_max_updated_datetime?: string;
  class_session_membership_transactions_membership_instance?: string;
  class_session_membership_transactions_min_updated_datetime?: string;
  class_session_membership_transactions_parent_membership_transaction?: string;
  class_session_membership_transactions_payment_interval_end_date?: string;
  class_session_membership_transactions_payment_interval_start_date?: string;
  class_session_membership_transactions_transaction_amount?: number;
  class_session_membership_transactions_transaction_datetime?: string;
  class_session_membership_transactions_user?: number;
  class_session_min_updated_datetime?: string;
  class_session_reservation_type?: "standard" | "standby" | "waitlist";
  class_session_reserved_for_guest?: boolean;
  class_session_spot?: number;
  class_session_status?: string;
  class_session_user?: number;
  class_session_user_or_booked_on_behalf_of_user?: string;
  ordering?: string;
  page?: number;
  page_size?: number;
  reservation?: number;
}
