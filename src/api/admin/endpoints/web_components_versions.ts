import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class WebComponentsVersionsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: BaseListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: WebComponentsVersionCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }
}

const basePath = "/web_components_versions";

interface WebComponentsVersionCreateOrUpdateParams {
  redirect_url: string;
  css_redirect_url?: string;
  semver_major?: number;
  semver_minor?: number;
  semver_patch?: number;
  branch?: string;
}
