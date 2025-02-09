import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const ReservationAttributes = z.object({
  cancel_date: z.coerce.date().nullable(),
  check_in_date: z.coerce.date().nullable(),
  creation_date: z.coerce.date(),
  guest_email: z.string().nullable(),
  guest_name: z.string().nullable(),
  live_stream_url: z.string().nullable(),
  live_stream_window: z.number().nullable(),
  reservation_type: z.string(),
  reserved_for_guest: z.boolean(),
  status: z.string(),
  used_geo_checkin: z.boolean().nullable(),
  waitlist_weight: z.number().nullable(),
  admin_waitlist_position: z.number().nullable(),
});

export const ReservationSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("reservations"),
  attributes: ReservationAttributes,
  relationships: RelationshipSchema,
});

export const ListReservationsSchema = z.object({
  data: z.array(ReservationSchema).nullish(),
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

export type Reservation = z.infer<typeof ReservationSchema>;
export type ReservationAttributes = z.infer<typeof ReservationAttributes>;
