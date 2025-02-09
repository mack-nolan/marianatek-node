import { z } from "zod";
import { RelationshipSchema } from "./shared/index.js";

export const ClassSessionTypeAttributes = z.object({
  name: z.string(),
  duration: z.number(),
  description: z.string().nullable(),
  enabled: z.boolean(),
  is_live_stream: z.boolean(),
  created_at: z.string(),
  updated_at: z.string().nullish(),
  upcoming_class_count: z.number(),
  historical_class_count: z.number(),
});

export const ClassSessionTypeSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("class_session_types"),
  attributes: ClassSessionTypeAttributes,
  relationships: RelationshipSchema,
});

export const ClassSessionTypeListSchema = z.object({
  data: z.array(ClassSessionTypeSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type ClassSessionType = z.infer<typeof ClassSessionTypeSchema>;
export type ClassSessionTypeAttributes = z.infer<
  typeof ClassSessionTypeAttributes
>;
