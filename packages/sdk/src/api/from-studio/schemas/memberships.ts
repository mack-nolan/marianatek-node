import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const MembershipAttributes = z.object({
  adjustment_interval_count: z.number().nullable(),
  adjustment_is_excluded_from_discounts: z.boolean().nullable(),
  adjustment_renewal_rate: z.string().nullable(),
  adjustment_renewal_rate_incl_tax: z.string().nullable(),
  billing_cycles: z.unknown().nullish(),
  billing_type: z.string(),
  calculated_end_datetime: z.string().nullable(),
  calculated_start_datetime: z.string().nullable(),
  cancellation_datetime: z.string().nullable(),
  cancellation_reason: z.unknown().nullable(),
  commitment_length: z.number().nullable(),
  end_date: z.string().nullish(),
  freeze_datetime: z.string().nullish(),
  freeze_reactivation_datetime: z.string().nullish(),
  guest_usage_interval_limit: z.number().nullable(),
  is_intro_offer: z.boolean().nullable(),
  last_interval_remaining_guest_usage_count: z.number().nullable(),
  last_interval_remaining_usage_count: z.number().nullable(),
  membership_name: z.string(),
  next_charge_date: z.string().nullable(),
  next_charge_date_display: z.string().nullable(),
  interval_start_date_display: z.string().nullable(),
  payment_interval: z.enum(["DY", "MO", "WK", "YR"]),
  payment_interval_end_date: z.string().nullable(),
  payment_interval_length: z.number().nullable(),
  payment_interval_start_date: z.string().nullable(),
  purchase_date: z.string().nullable(),
  purchase_location: z.string().nullish(),
  remaining_renewal_count: z.number().nullable(),
  renewal_count: z.number().nullable(),
  renewal_currency: z.string(),
  renewal_limit: z.number().nullable(),
  renewal_rate: z.string(),
  renewal_rate_incl_tax: z.string(),
  scheduled_end_datetime: z.string().nullable(),
  scheduled_start_datetime: z.string().nullable(),
  should_display_price_include_tax: z.boolean(),
  start_date: z.string().nullable(),
  status: z.string(),
  usage_interval_limit: z.number().nullable(),
});

export const MembershipSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("membership_instances"),
  attributes: MembershipAttributes,
  relationships: RelationshipSchema,
});

export const MembershipListSchema = z.object({
  data: z.array(MembershipSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Membership = z.infer<typeof MembershipSchema>;
export type MembershipAttributes = z.infer<typeof MembershipAttributes>;
