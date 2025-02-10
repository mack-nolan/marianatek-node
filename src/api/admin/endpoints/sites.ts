import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class SitesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: SiteListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async create(data: SiteCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: SiteCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}

const basePath = "/sites";

interface SiteCreateOrUpdateParams {
  name: string;
  waiver?: string | null;
  default_booking_window: string;
  default_no_show_window?: string;
  default_waitlist_cutoff_window?: string | null;
  enable_mobile_checkin_reminders?: boolean;
  enable_year_in_motion?: boolean;
  year_in_motion_start_date?: string | null;
  year_in_motion_end_date?: string | null;
  configuration_info?: any;
  listed?: boolean;
}

interface SiteListOptions extends BaseListOptions {
  default_booking_window: number;
  name: string;
  ordering: string;
  page: number;
  page_size: number;
  user_has_turf_access: boolean;
  waiver: string;
}
