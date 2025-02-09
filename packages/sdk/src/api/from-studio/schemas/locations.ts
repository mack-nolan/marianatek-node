import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const LocationAttributes = z.object({
  name: z.string(),
  legal_entity: z.unknown(),
  timezone: z.string(),
  address_line1: z.string(),
  address_line2: z.string().nullable(),
  address_line3: z.string().nullable(),
  address_sorting_code: z.unknown(),
  city: z.string(),
  state_province: z.string(),
  postal_code: z.string(),
  description: z.string().nullable(),
  email_address: z.string().nullable(),
  user_has_turf_access: z.boolean(),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
  primary_language: z.string(),
  default_language: z.string(),
  listed: z.boolean(),
  currency_code: z.string(),
  daily_pending_reservation_limit: z.coerce.number(),
  enable_geo_check_in: z.boolean(),
  class_pass_status: z.string(),
  is_newsletter_subscription_pre_checked: z.boolean(),
  enable_send_recurring_charge_emails: z.string(),
  is_waitlist_position_public: z.boolean(),
  is_waitlist_count_public: z.boolean(),
  enable_change_spots: z.boolean(),
  enable_third_party_change_spots: z.boolean(),
  enable_royalty_fee_platform: z.boolean(),
  geo_check_in_distance: z.unknown(),
  gate_geo_check_in_by_distance: z.string(),
  business_number: z.unknown(),
  formatted_address: z.array(z.string()),
  use_tax_inclusive_pricing: z.string(),
});

export const LocationSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("locations"),
  attributes: LocationAttributes,
  relationships: RelationshipSchema,
});

export const ListLocationsSchema = z.object({
  data: z.array(LocationSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Location = z.infer<typeof LocationSchema>;
export type LocationAttributes = z.infer<typeof LocationAttributes>;
