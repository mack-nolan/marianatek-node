import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class MembershipFreezesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: MembershipFreezeListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: MembershipFreezeCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: MembershipFreezeCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/membership_freezes";

interface MembershipFreezeCreateOrUpdateParams {
  membership_instance: string;
  freeze_datetime: string;
  reactivation_datetime?: string;
}

interface MembershipFreezeListOptions extends BaseListOptions {
  broker?: number;
  freeze_datetime?: string;
  id?: number;
  membership_instance?: number;
  reactivation_datetime?: string;
}
