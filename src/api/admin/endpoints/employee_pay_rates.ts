import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class EmployeePayRatesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: BaseListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: EmployeePayRateCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: EmployeePayRateCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async archive(id: number, data: EmployeePayRateCreateOrUpdateParams) {
    const response = await this.request
      .post(`${basePath}/${id}/archive`, {
        json: data,
      })
      .json();
    return response;
  }
}

const basePath = "/employee_pay_rates";

interface EmployeePayRateCreateOrUpdateParams {
  employee: string;
  rate_type: "flat_fee" | "commission";
  rate_value: string;
  rate_unit?: "fixed_currency" | "percentage";
  currency: string;
  product_classes?: string;
}
