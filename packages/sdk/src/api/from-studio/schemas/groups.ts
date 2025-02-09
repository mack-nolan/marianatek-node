import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const GroupAttributes = z.object({
  id: z.number(),
  name: z.string().max(150),
  description: z.string().nullish(),
  permissions: z.array(z.any()).nullish(),
  public: z.boolean(),
  user_can_assign_group: z.boolean(),
});

export const GroupSchema = z.object({
  id: z.coerce.number(),
  type: z.string(),
  attributes: GroupAttributes,
  relationships: RelationshipSchema,
});

export const GroupListSchema = z.object({
  data: z.array(GroupSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Group = z.infer<typeof GroupSchema>;
export type GroupAttributes = z.infer<typeof GroupAttributes>;
