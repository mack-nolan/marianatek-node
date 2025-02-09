import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class OrdersApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: OrderListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async cancel(id: number) {
    const response = await this.request.post(`${basePath}/${id}/cancel`).json();
    return response;
  }

  async previewRefund(id: number) {
    const response = await this.request
      .post(`${basePath}/${id}/preview_refund`)
      .json();
    return response;
  }

  async refund(id: number) {
    const response = await this.request.post(`${basePath}/${id}/refund`).json();
    return response;
  }

  async sendReceipt(
    id: number,
    data: {
      recipient_email: string;
      recipient_name: string;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/send_receipt`, { json: data })
      .json();
    return response;
  }

  async taxInvoice(
    id: number,
    data: {
      order_event_id: number;
      recipient_email: string;
      recipient_name: string;
    }
  ) {
    const response = await this.request
      .post(`${basePath}/${id}/send_tax_invoice`, { json: data })
      .json();
    return response;
  }
}
const basePath = "/orders";

interface OrderListOptions extends BaseListOptions {
  for_reservation_booked_on_behalf_of_user: number;
  for_reservation_broker: number;
  for_reservation_cancel_date: string;
  for_reservation_check_in_date: string;
  for_reservation_class_session: string;
  for_reservation_class_session_class_session_type: string;
  for_reservation_class_session_class_tags: string;
  for_reservation_class_session_classroom: string;
  for_reservation_class_session_has_instructors: boolean;
  for_reservation_class_session_hour: string;
  for_reservation_class_session_is_cancelled: boolean;
  for_reservation_class_session_layout: string;
  for_reservation_class_session_location: string;
  for_reservation_class_session_max_date: string;
  for_reservation_class_session_max_datetime: string;
  for_reservation_class_session_max_end_datetime: string;
  for_reservation_class_session_max_updated_datetime: string;
  for_reservation_class_session_min_date: string;
  for_reservation_class_session_min_datetime: string;
  for_reservation_class_session_min_end_datetime: string;
  for_reservation_class_session_min_updated_datetime: string;
  for_reservation_class_session_public: boolean;
  for_reservation_class_session_recurring_id: string;
  for_reservation_class_session_region: string;
  for_reservation_class_session_week_day: string;
  for_reservation_creation_date: string;
  for_reservation_credit_transactions: number;
  for_reservation_credit_transactions_broker: number;
  for_reservation_credit_transactions_credit: number;
  for_reservation_credit_transactions_expiration_datetime: string;
  for_reservation_credit_transactions_id: number;
  for_reservation_credit_transactions_is_expired: boolean;
  for_reservation_credit_transactions_max_updated_datetime: string;
  for_reservation_credit_transactions_min_updated_datetime: string;
  for_reservation_credit_transactions_parent_credit_transaction: string;
  for_reservation_credit_transactions_remaining_credits_cache: number;
  for_reservation_credit_transactions_transaction_amount: number;
  for_reservation_credit_transactions_transaction_currency: string;
  for_reservation_credit_transactions_transaction_datetime: string;
  for_reservation_credit_transactions_user: number;
  for_reservation_guest_email: string;
  for_reservation_id: number;
  for_reservation_location: number;
  for_reservation_max_updated_datetime: string;
  for_reservation_membership_transactions: number;
  for_reservation_membership_transactions_broker: number;
  for_reservation_membership_transactions_id: number;
  for_reservation_membership_transactions_max_updated_datetime: string;
  for_reservation_membership_transactions_membership_instance: string;
  for_reservation_membership_transactions_min_updated_datetime: string;
  for_reservation_membership_transactions_parent_membership_transaction: number;
  for_reservation_membership_transactions_payment_interval_end_date: string;
  for_reservation_membership_transactions_payment_interval_start_date: string;
  for_reservation_membership_transactions_transaction_amount: number;
  for_reservation_membership_transactions_transaction_datetime: string;
  for_reservation_membership_transactions_user: number;
  for_reservation_min_updated_datetime: string;
  for_reservation_reservation_type: string;
  for_reservation_reserved_for_guest: boolean;
  for_reservation_spot: number;
  for_reservation_status: string;
  for_reservation_user: number;
  for_reservation_user_or_booked_on_behalf_of_user: string;
  id: number;
  location: string;
  max_updated_datetime: string;
  min_updated_datetime: string;
  ordering: string;
  page: number;
  page_size: number;
}
