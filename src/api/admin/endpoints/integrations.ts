import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class IntegrationsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: IntegrationListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: IntegrationCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: IntegrationCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/integrations";

interface IntegrationCreateOrUpdateParams {
  integration_class:
    | "integrations_core.models.dummy_integration.DummyIntegration"
    | "integrations_core.models.mailchimpintegration.MailChimpIntegration";
  enabled?: boolean;
  name: string;
}

interface IntegrationListOptions extends BaseListOptions {
  enabled?: boolean;
  id?: number;
  integration_class?:
    | "integrations_core.models.dummy_integration.DummyIntegration"
    | "integrations_core.models.mailchimpintegration.MailChimpIntegration";
  name?: string;
}
