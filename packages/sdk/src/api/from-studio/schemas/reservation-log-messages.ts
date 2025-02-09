import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const ReservationLogMessageAttributes = z.object({
  reservation: z.string(),
  action_name: z.enum([
    "create_reservation",
    "cancel_reservation",
    "mark_as_no_show",
    "swap_spots",
    "move_to_standby",
    "convert_guest",
    "unconvert_guest",
    "check_in",
    "check_out",
    "migrate_spot_to_new_layout",
    "update_waitlist_weight",
    "update_reservation",
    "save_reservation_unchanged",
    "assign_to_spot",
    "cancel_class",
  ]),
  action_broker: z.string().nullish(),
  action_datetime: z.string(),
});

export const ReservationLogMessageSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("reservation_log_messages"),
  attributes: ReservationLogMessageAttributes,
  relationships: RelationshipSchema,
});

export const ListReservationLogMessagesSchema = z.object({
  data: z.array(ReservationLogMessageSchema).nullish(),
  meta: z
    .object({
      pagination: z.object({
        count: z.number(),
        pages: z.number(),
        page: z.number(),
        per_page: z.number(),
      }),
    })
    .nullish(),
});

export type ReservationLogMessage = z.infer<typeof ReservationLogMessageSchema>;
export type ReservationLogMessageAttributes = z.infer<
  typeof ReservationLogMessageAttributes
>;
