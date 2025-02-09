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
import { ClassSessionsApi } from "./endpoints/class_sessions.js";
import { ContractsApi } from "./endpoints/contracts.js";
import { CountriesApi } from "./endpoints/countries.js";
import { CreditTransactionsApi } from "./endpoints/credit_transactions.js";
import { CreditsApi } from "./endpoints/credits.js";
import { DefaultPartnerProductClassTaxRatesApi } from "./endpoints/default_partner_product_class_tax_rates.js";
import { DiscountsApi } from "./endpoints/discounts.js";
import { EmployeePayRatesApi } from "./endpoints/employee_pay_rates.js";
import { EmployeesApi } from "./endpoints/employees.js";
import { GiftCardInstancesApi } from "./endpoints/gift_card_instances.js";
import { GroupsApi } from "./endpoints/groups.js";
import { IdpApi } from "./endpoints/idp.js";
import { IntegrationsApi } from "./endpoints/integrations.js";
import { InventoryTransactionsApi } from "./endpoints/inventory_transactions.js";
import { LateCancelWindowsApi } from "./endpoints/late_cancel_windows.js";
import { LayoutsApi } from "./endpoints/layouts.js";
import { LocationsApi } from "./endpoints/locations.js";
import { MembershipInstancesApi } from "./endpoints/membership_instances.js";
import { MembershipTransactionsApi } from "./endpoints/membership_transactions.js";
import { MembershipsApi } from "./endpoints/memberships.js";
import { NotesApi } from "./endpoints/notes.js";
import { OrderLinesApi } from "./endpoints/order_lines.js";
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
    classSessions: new ClassSessionsApi(request),
    contracts: new ContractsApi(request),
    countries: new CountriesApi(request),
    creditTransactions: new CreditTransactionsApi(request),
    credits: new CreditsApi(request),
    defaultPartnerProductClassTaxRates:
      new DefaultPartnerProductClassTaxRatesApi(request),
    discounts: new DiscountsApi(request),
    employeePayRates: new EmployeePayRatesApi(request),
    employees: new EmployeesApi(request),
    giftCardInstances: new GiftCardInstancesApi(request),
    groups: new GroupsApi(request),
    idp: new IdpApi(request),
    integrations: new IntegrationsApi(request),
    inventoryTransactions: new InventoryTransactionsApi(request),
    lateCancelWindows: new LateCancelWindowsApi(request),
    layouts: new LayoutsApi(request),
    locations: new LocationsApi(request),
    membershipInstances: new MembershipInstancesApi(request),
    membershipTransactions: new MembershipTransactionsApi(request),
    memberships: new MembershipsApi(request),
    notes: new NotesApi(request),
    orderLines: new OrderLinesApi(request),
  };
}

export type AdminApi = ReturnType<typeof generateAdminApi>;
