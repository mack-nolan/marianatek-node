import { z } from "zod";

export const PaginationSchema = z.object({
  count: z.number(),
  pages: z.number(),
  page: z.number(),
  per_page: z.number(),
});

export const MetaSchema = z.object({
  pagination: PaginationSchema,
});

export const ListSchema = <T>(schema: z.ZodType<T>) =>
  z.object({
    data: z.array(schema),
    meta: MetaSchema,
  });

export type MetaData = z.infer<typeof MetaSchema>;
