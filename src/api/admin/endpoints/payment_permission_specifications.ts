import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class PaymentPermissionSpecificationsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: PaymentPermissionSpecificationListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: PaymentPermissionSpecificationCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(
    id: number,
    data: PaymentPermissionSpecificationCreateOrUpdateParams
  ) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/payment_permission_specifications";

interface PaymentPermissionSpecificationListOptions extends BaseListOptions {
  enabled?: boolean;
  id?: number;
  name?: string;
  proceed?: boolean;
  weight?: number;
}

interface PaymentPermissionSpecificationCreateOrUpdateParams {
  enabled: boolean;
  name: string;
  proceed: boolean;
  weight: number;
}
