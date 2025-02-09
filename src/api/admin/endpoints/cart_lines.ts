import { KyInstance } from "ky";
import { BaseListOptions } from "../../models.js";
import { createSearchParams } from "../../searchParams.js";

export class CartLinesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options?: BaseListOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request.get(basePath, { searchParams }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/cart_lines";
