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
import { OrdersApi } from "./endpoints/orders.js";
import { PackagesApi } from "./endpoints/packages.js";
import { ParentInventoryTransactionsApi } from "./endpoints/parent_inventory_transactions.js";
import { PartnersApi } from "./endpoints/partners.js";
import { PaymentGatewaysApi } from "./endpoints/payment_gateways.js";
import { PaymentOptionsApi } from "./endpoints/payment_options.js";
import { PaymentPermissionSpecificationsApi } from "./endpoints/payment_permission_specifications.js";
import { PenaltyFeesApi } from "./endpoints/penalty_fees.js";
import { PosProductsApi } from "./endpoints/pos_products.js";
import { PrivateImagesApi } from "./endpoints/private_images.js";
import { Product_Api } from "./endpoints/product_.js";
import { ProductClassesApi } from "./endpoints/product_classes.js";
import { ProductCollectionToProductComparisonAssignmentsApi } from "./endpoints/product_collection_to_product_comparison_assignments.js";
import { ProductCollectionsApi } from "./endpoints/product_collections.js";
import { ProductComparisonToProductAssignmentsApi } from "./endpoints/product_comparison_to_product_assignments.js";
import { ProductPromotionToChildProductAssignmentsApi } from "./endpoints/product_promotion_to_child_product_assignments.js";
import { ProductPromotionsApi } from "./endpoints/product_promotions.js";
import { ProductVariantsApi } from "./endpoints/product_variants.js";
import { ProductsApi } from "./endpoints/products.js";
import { PublicImagesApi } from "./endpoints/public_images.js";
import { QuickSaleProductsApi } from "./endpoints/quick_sale_products.js";
import { RegionsApi } from "./endpoints/regions.js";
import { ReportCategoriesApi } from "./endpoints/report_categories.js";
import { ReservationLogMessagesApi } from "./endpoints/reservation_log_messages.js";
import { ReservationTagsApi } from "./endpoints/reservation_tags.js";
import { ReservationsApi } from "./endpoints/reservations.js";
import { RosterTagsApi } from "./endpoints/roster_tags.js";
import { ShiftTypesApi } from "./endpoints/shift_types.js";
import { SitesApi } from "./endpoints/sites.js";
import { SkinnyChildProductsApi } from "./endpoints/skinny_child_products.js";
import { SpotHoldsApi } from "./endpoints/spot_holds.js";
import { SpotTypesApi } from "./endpoints/spot_types.js";
import { SpotsApi } from "./endpoints/spots.js";
import { StockRecordsApi } from "./endpoints/stock_records.js";
import { TableReportDataApi } from "./endpoints/table_report_data.js";
import { TableReportsApi } from "./endpoints/table_reports.js";
import { TaxRatesApi } from "./endpoints/tax_rates.js";
import { TenantBrandsApi } from "./endpoints/tenant_brands.js";
import { TenantsApi } from "./endpoints/tenants.js";
import { TimeClockShiftSettingsApi } from "./endpoints/time_clock_shift_settings.js";
import { TimeClockShiftsApi } from "./endpoints/time_clock_shifts.js";
import { UserNotesApi } from "./endpoints/user_notes.js";
import { UserTagsApi } from "./endpoints/user_tags.js";
import { UsersApi } from "./endpoints/users.js";
import { WaitlistCutoffWindowsApi } from "./endpoints/waitlist_cutoff_windows.js";
import { WebComponentsVersionsApi } from "./endpoints/web_components_versions.js";
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
    orders: new OrdersApi(request),
    packages: new PackagesApi(request),
    parentInventoryTransactions: new ParentInventoryTransactionsApi(request),
    partners: new PartnersApi(request),
    paymentGateways: new PaymentGatewaysApi(request),
    paymentOptions: new PaymentOptionsApi(request),
    paymentPermissionSpecifications: new PaymentPermissionSpecificationsApi(
      request
    ),
    penaltyFees: new PenaltyFeesApi(request),
    posProducts: new PosProductsApi(request),
    privateImages: new PrivateImagesApi(request),
    product_: new Product_Api(request),
    productClasses: new ProductClassesApi(request),
    productCollectionToProductComparisonAssignments:
      new ProductCollectionToProductComparisonAssignmentsApi(request),
    productCollections: new ProductCollectionsApi(request),
    productComparisonToProductssignments:
      new ProductComparisonToProductAssignmentsApi(request),
    productPromotionToChildProductsAssignments:
      new ProductPromotionToChildProductAssignmentsApi(request),
    productPromotions: new ProductPromotionsApi(request),
    productVariants: new ProductVariantsApi(request),
    products: new ProductsApi(request),
    publicImages: new PublicImagesApi(request),
    quickSaleProducts: new QuickSaleProductsApi(request),
    regions: new RegionsApi(request),
    reportCategories: new ReportCategoriesApi(request),
    reservationLogMessages: new ReservationLogMessagesApi(request),
    reservationTags: new ReservationTagsApi(request),
    reservations: new ReservationsApi(request),
    rosterTags: new RosterTagsApi(request),
    shiftTypes: new ShiftTypesApi(request),
    sites: new SitesApi(request),
    skinnyChildProducts: new SkinnyChildProductsApi(request),
    spotHolds: new SpotHoldsApi(request),
    spotTypes: new SpotTypesApi(request),
    spots: new SpotsApi(request),
    stockRecords: new StockRecordsApi(request),
    tableReportData: new TableReportDataApi(request),
    tableReports: new TableReportsApi(request),
    taxRates: new TaxRatesApi(request),
    tenantBrands: new TenantBrandsApi(request),
    tenants: new TenantsApi(request),
    timeClockShiftSettings: new TimeClockShiftSettingsApi(request),
    timeClockShifts: new TimeClockShiftsApi(request),
    userNotes: new UserNotesApi(request),
    userTags: new UserTagsApi(request),
    users: new UsersApi(request),
    waitlistCutoffWindows: new WaitlistCutoffWindowsApi(request),
    webComponentsVersions: new WebComponentsVersionsApi(request),
  };
}

export type AdminApi = ReturnType<typeof generateAdminApi>;
