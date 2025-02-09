import { KyInstance } from "ky";
import { BaseListOptions } from "../../models.js";
import { createSearchParams } from "../../searchParams.js";

const basePath = "/async_table_report_data";

export class AsyncTableReportDataApi {
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

  jobStatus = {
    get: async () => {
      const response = await this.request.get(`${basePath}/job_status`).json();
      return response;
    },
  };
}
