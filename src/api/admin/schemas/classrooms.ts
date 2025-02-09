import { z } from "zod";
import { RelationshipSchema } from "./shared/index.js";

export const ClassroomAttributes = z.object({
  name: z.string(),
  listed: z.boolean(),
  created_at: z.string(),
  upcoming_class_count: z.number(),
  historical_class_count: z.number(),
});

export const ClassroomSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("classrooms"),
  attributes: ClassroomAttributes,
  relationships: RelationshipSchema,
});

export const ClassroomListSchema = z.object({
  data: z.array(ClassroomSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Classroom = z.infer<typeof ClassroomSchema>;
export type ClassroomAttributes = z.infer<typeof ClassroomAttributes>;
