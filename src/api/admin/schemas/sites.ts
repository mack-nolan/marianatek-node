import { z } from "zod";
import { RelationshipSchema } from "./shared/index.js";

export const SiteAttributes = z.object({
  name: z.string(),
  waiver: z.string().nullable(),
  default_booking_window: z.string().nullish(),
  default_no_show_window: z.string(),
  default_waitlist_cutoff_window: z.string().nullish(),
  enable_mobile_checkin_reminders: z.boolean(),
  enable_year_in_motion: z.boolean(),
  year_in_motion_start_date: z.string().nullable(),
  year_in_motion_end_date: z.string().nullable(),
  gate_geo_check_in_by_distance: z.boolean(),
  geo_check_in_distance: z.number(),
  configuration_info: z.unknown(),
  listed: z.boolean(),
  user_has_turf_access: z.boolean(),
  currencies: z.array(z.unknown()),
});

export const SiteSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("sites"),
  attributes: SiteAttributes,
  relationships: RelationshipSchema,
});

export const SiteListSchema = z.object({
  data: z.array(SiteSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Site = z.infer<typeof SiteSchema>;
export type SiteAttributes = z.infer<typeof SiteAttributes>;
