import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const ClassSessionAttributes = z.object({
  start_date: z.string(),
  start_time: z.string(),
  public: z.boolean().nullish(),
  direct_booking_currency_code: z.string().nullable(),
  direct_booking_price: z.number().nullable(),
  direct_booking_reservation_limit: z.number().nullable(),
  slot_price: z.array(z.object({ count: z.number(), slot_type: z.number() })),
  start_datetime: z.string(),
  end_datetime: z.string(),
  available_spots: z.array(z.number()),
  vip_user_count: z.number(),
  first_time_user_count: z.number(),
  checked_in_user_count: z.number(),
  standard_reservation_user_count: z.number(),
  waitlist_reservation_user_count: z.number(),
  cancellation_datetime: z.string().nullable(),
  public_note: z.string().nullable(),
  live_stream_url: z.string().nullable(),
  standby_capacity: z.number(),
  archived_at: z.string().nullable(),
  recurring_status: z.string(),
  recurring_id: z.string().or(z.number()).nullable(),
  instructor_names: z.array(z.string()),
  classroom_display: z.string().nullable(),
  class_type_display: z.string().nullable(),
  addon_order_count: z.number(),
  duration: z.number().nullish(),
  layout_format: z.string(),
  location_display: z.string().nullable(),
  geo_check_in_start_datetime: z.string().nullable(),
  geo_check_in_end_datetime: z.string().nullable(),
  kiosk_check_in_start_datetime: z.string().nullable(),
  kiosk_check_in_end_datetime: z.string().nullable(),
  public_waitlist_count: z.number().nullable(),
  is_change_spots_enabled: z.boolean(),
  waitlist_capacity: z.number().nullable(),
  has_waitlist: z.boolean(),
  in_live_stream_window: z.boolean(),
  is_remaining_spot_count_public: z.boolean(),
  is_auto_check_in: z.boolean(),
  should_reuse_live_stream_url: z.boolean(),
  reservation_cutoff_override: z.unknown().nullable(),
  is_free_class: z.boolean(),
});

export const ClassSessionSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("class_sessions"),
  attributes: ClassSessionAttributes,
  relationships: RelationshipSchema,
});

export const ClassSessionListSchema = z.object({
  data: z.array(ClassSessionSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type ClassSession = z.infer<typeof ClassSessionSchema>;
export type ClassSessionAttributes = z.infer<typeof ClassSessionAttributes>;
