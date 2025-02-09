import { z } from "zod";
import { RelationshipSchema } from "./shared/index.js";

export const OrderAttributes = z.object({
  name: z.string(),
  duration: z.number(),
  description: z.string().nullable(),
  enabled: z.boolean().nullish(),
  is_live_stream: z.boolean().nullish(),
  created_at: z.string(),
  updated_at: z.string().nullish(),
  upcoming_class_count: z.number().nullish(),
  historical_class_count: z.number().nullish(),
});

export const OrderSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("orders"),
  attributes: OrderAttributes,
  relationships: RelationshipSchema,
});

export const OrderListSchema = z.object({
  data: z.array(OrderSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Order = z.infer<typeof OrderSchema>;
export type OrderAttributes = z.infer<typeof OrderAttributes>;
