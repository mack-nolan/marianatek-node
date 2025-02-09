import { z } from "zod";
import { RelationshipSchema } from "./shared/index.js";

export const EmployeeAttributes = z.object({
  payroll_id: z.unknown(),
  is_active: z.boolean(),
  can_chat: z.boolean(),
  is_beta_user: z.boolean(),
});
export const EmployeeProfileAttributes = z.object({
  hex_color: z.string().nullish(),
  bio: z.string().nullish(),
  enabled: z.boolean().nullish(),
  sort_order: z.number().nullish(),
  schedule_display_name: z.string().nullish(),
  small_photo: z.string().nullish(),
  small_photo_width: z.number().nullish(),
  small_photo_height: z.number().nullish(),
  medium_photo: z.string().nullish(),
  medium_photo_width: z.unknown().nullish(),
  medium_photo_height: z.unknown().nullish(),
  large_photo: z.string().nullish(),
  large_photo_width: z.unknown().nullish(),
  large_photo_height: z.unknown().nullish(),
  instagram_handle: z.string().nullish(),
  instagram_url: z.string().nullish(),
  spotify_url: z.string().nullish(),
});

export const EmployeeSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("employees"),
  attributes: EmployeeAttributes,
  relationships: RelationshipSchema,
});
export const EmployeeProfileSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("employee_public_profiles"),
  attributes: EmployeeProfileAttributes,
  relationships: RelationshipSchema,
});

export const EmployeeListSchema = z.object({
  data: z.array(EmployeeSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});
export const EmployeeProfileListSchema = z.object({
  data: z.array(EmployeeProfileSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Employee = z.infer<typeof EmployeeSchema>;
export type EmployeeAttributes = z.infer<typeof EmployeeAttributes> &
  z.infer<typeof EmployeeProfileAttributes>;
export type EmployeeProfile = z.infer<typeof EmployeeProfileSchema>;
export type EmployeeProfileAttributes = z.infer<
  typeof EmployeeProfileAttributes
>;
