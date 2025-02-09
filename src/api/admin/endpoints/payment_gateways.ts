import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class PaymentGatewaysApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: PaymentGatewayListOptions) {
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

const basePath = "/payment_gateways";

interface PaymentGatewayListOptions extends BaseListOptions {
  enabled?: boolean;
  id?: number;
  is_shared?: boolean;
  name?: string;
}
