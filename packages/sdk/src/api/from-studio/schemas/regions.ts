import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const RegionAttributes = z.object({
  name: z.string(),
  listed: z.boolean(),
  user_has_turf_access: z.boolean(),
});

export const RegionSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("regions"),
  attributes: RegionAttributes,
  relationships: RelationshipSchema,
});

export const RegionListSchema = z.object({
  data: z.array(RegionSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Region = z.infer<typeof RegionSchema>;
export type RegionAttributes = z.infer<typeof RegionAttributes>;
