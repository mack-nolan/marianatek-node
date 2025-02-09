import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class EmployeePublicProfiles {
  constructor(private readonly request: KyInstance) {}

  async list(options: EmployeePublicProfileListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: EmployeePublicProfileCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: EmployeePublicProfileCreateOrUpdateParams) {
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

const basePath = "/employee_public_profiles";

interface EmployeePublicProfileCreateOrUpdateParams {
  employee: string;
  hex_color?: string | null;
  bio?: string | null;
  sort_order?: number;
  schedule_display_name?: string | null;
  small_public_photo?: string | null;
  medium_public_photo?: string | null;
  large_public_photo?: string | null;
  thumbnail_photo?: string | null;
  instagram_handle?: string | null;
  spotify_url?: string | null;
}

interface EmployeePublicProfileListOptions extends BaseListOptions {
  bio: string;
  can_instruct_classes: boolean;
  employee: number;
  enabled: boolean;
  hex_color: string;
  id: number;
  ordering: string;
  schedule_display_name: string;
  sort_order: number;
  suggested_for_location: string;
  suggested_for_region: string;
}
