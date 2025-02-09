import classSessionTypes from "./routes/class-session-types";
import classSessions from "./routes/class-sessions";
import classrooms from "./routes/classrooms";
import customers from "./routes/customers";
import employees from "./routes/employees";
import groups from "./routes/groups";
import locations from "./routes/locations";
import memberships from "./routes/memberships";
import oauth from "./routes/oauth";
import orders from "./routes/orders";
import publicImages from "./routes/public-images";
import regions from "./routes/regions";
import reservationLogMessages from "./routes/reservation-log-messages";
import reservations from "./routes/reservations";
import sites from "./routes/sites";

export * from "./schemas";
export { paginateResults } from "./shared/pagination";

export default {
  classSessions,
  classSessionTypes,
  classrooms,
  customers,
  employees,
  groups,
  locations,
  memberships,
  oauth,
  publicImages,
  regions,
  reservations,
  reservationLogMessages,
  sites,
  orders,
};
