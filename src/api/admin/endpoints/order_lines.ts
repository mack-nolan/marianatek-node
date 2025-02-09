import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class OrderLinesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: OrderLineListOptions) {
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

const basePath = "/order_lines";

interface OrderLineListOptions extends BaseListOptions {
  id?: number;
  location?: string;
  max_updated_datetime?: string;
  min_updated_datetime?: string;
  order?: number;
  user?: number;
}
