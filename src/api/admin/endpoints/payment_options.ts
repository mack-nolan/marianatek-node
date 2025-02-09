import { KyInstance } from "ky";

export class PaymentOptionsApi {
  constructor(private readonly request: KyInstance) {}

  async list() {
    const response = await this.request.get(basePath).json();
    return response;
  }
}

const basePath = "/payment_options";
