import { KyInstance } from "ky";
import { BaseListOptions } from "../../models.js";
import { createSearchParams } from "../../searchParams.js";
const basePath = "/bankcards";

interface BaseCreateBankcardData {
  ccv: string;
  billing_address?: string;
  card_type?: string;
  label?: string;
  name?: string;
  partner_reference?: string;
  user: number;
}

type CreateBankcardData =
  | (BaseCreateBankcardData & {
      number: string;
      expiration_month: string;
      expiration_year: string;
    })
  | (BaseCreateBankcardData & {
      track1: string;
    });

export class BankcardsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options?: BaseListOptions) {
    const searchParams = createSearchParams(options);
    const response = await this.request.get(basePath, { searchParams }).json();
    return response;
  }

  async create(data: CreateBankcardData) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async patch(id: number, data: CreateBankcardData) {
    const response = await this.request
      .patch(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async update(id: number, data: CreateBankcardData) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}
