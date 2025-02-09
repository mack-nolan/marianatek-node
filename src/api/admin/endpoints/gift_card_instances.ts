import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class GiftCardInstancesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: GiftCardInstanceListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: GiftCardInstanceCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: GiftCardInstanceCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async redeem(id: number, data: { redemption_code: string; user?: string }) {
    const response = await this.request
      .post(`${basePath}/${id}/redeem`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/gift_card_instances";

interface GiftCardInstanceCreateOrUpdateParams {
  purchase_datetime: string;
  purchased_by_user?: string | null;
  recipient_name?: string;
  recipient_email?: string;
  custom_message?: string;
  scheduled_datetime?: string | null;
  send_type?: "email" | "sms";
}

interface GiftCardInstanceListOptions extends BaseListOptions {
  id?: number;
  purchase_datetime?: string;
  purchased_by_user?: number;
  redemption_code?: string;
}
