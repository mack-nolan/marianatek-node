import { KyInstance } from "ky";
import { AccountTransactionsApi } from "./endpoints/account_transactions.js";
import { AdminVersionsApi } from "./endpoints/admin_versions.js";
import { AggregationApi } from "./endpoints/aggregation.js";
import { AppVersionMetadatasApi } from "./endpoints/app_version_metadatas.js";
import { AsyncTableReportDataApi } from "./endpoints/async_table_report_data.js";
import { BankcardsApi } from "./endpoints/bankcards.js";
import { BillingAddressesApi } from "./endpoints/billing_addresses.js";
import { BookingLimitsApi } from "./endpoints/booking_limits.js";
import { BookingWindowsApi } from "./endpoints/booking_windows.js";
import { CartLinesApi } from "./endpoints/cart_lines.js";
import { ChildProduct_Api } from "./endpoints/child_product_.js";
import { ChildProductsApi } from "./endpoints/child_products.js";
import { ClassSessionAdminsApi } from "./endpoints/class_session_admins.js";
import { ClassSessionCategoriesApi } from "./endpoints/class_session_categories.js";
import { ClassSessionNotesApi } from "./endpoints/class_session_notes.js";
import { ClassSessionTagsApi } from "./endpoints/class_session_tags.js";
import { ClassSessionTypesApi } from "./endpoints/class_session_types.js";
import { paginateResults } from "./utils/paginate.js";

export function generateAdminApi(request: KyInstance) {
  return {
    paginateResults,
    accountTransactions: new AccountTransactionsApi(request),
    adminVersions: new AdminVersionsApi(request),
    aggregation: new AggregationApi(request),
    appVersionMetadatas: new AppVersionMetadatasApi(request),
    asyncTableReportData: new AsyncTableReportDataApi(request),
    bankcards: new BankcardsApi(request),
    billingAddresses: new BillingAddressesApi(request),
    bookingLimits: new BookingLimitsApi(request),
    bookingWindows: new BookingWindowsApi(request),
    cartLines: new CartLinesApi(request),
    childProduct_: new ChildProduct_Api(request),
    childProducts: new ChildProductsApi(request),
    classSessionAdmins: new ClassSessionAdminsApi(request),
    clasSessionCategories: new ClassSessionCategoriesApi(request),
    classSessionNotes: new ClassSessionNotesApi(request),
    classSessionTags: new ClassSessionTagsApi(request),
    classSessionTypes: new ClassSessionTypesApi(request),
  };
}

export type AdminApi = ReturnType<typeof generateAdminApi>;
