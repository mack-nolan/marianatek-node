import { z } from "zod";

const DataSchema = z.object({
  type: z.string(),
  id: z.coerce.number().or(z.string()),
});

const RelationshipInstance = z.object({
  data: DataSchema.nullish().or(
    z.array(
      z.object({ type: z.string(), id: z.coerce.number().or(z.string()) })
    )
  ),
});

export const RelationshipSchema = z.record(z.string(), RelationshipInstance);

export type Relationship = z.infer<typeof RelationshipSchema>;
