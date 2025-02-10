import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class TableReportsApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: TableReportListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/table_reports";

interface TableReportListOptions extends BaseListOptions {
  category:
    | "custom"
    | "finance"
    | "intro-offers"
    | "inventory"
    | "marketing"
    | "operations"
    | "sales"
    | "utilization";
}
