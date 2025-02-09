import { KyInstance } from "ky";
import { AccountTransactionsApi } from "./endpoints/account_transactions.js";
import { AdminVersionsApi } from "./endpoints/admin_versions.js";
import { AggregationApi } from "./endpoints/aggregation.js";
import { AppVersionMetadatasApi } from "./endpoints/app_version_metadatas.js";
import { AsyncTableReportDataApi } from "./endpoints/async_table_report_data.js";

export function generateAdminApi(request: KyInstance) {
  return {
    accountTransactions: new AccountTransactionsApi(request),
    adminVersions: new AdminVersionsApi(request),
    aggregation: new AggregationApi(request),
    appVersionMetadatas: new AppVersionMetadatasApi(request),
    asyncTableReportData: new AsyncTableReportDataApi(request),
  };
}

export type AdminApi = ReturnType<typeof generateAdminApi>;
