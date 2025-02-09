import { z } from "zod";
import { RelationshipSchema } from "./shared";

export const CustomerAttributes = z.object({
  address_line_1: z.string().nullish(),
  address_line_2: z.string().nullish(),
  city: z.string().nullish(),
  country: z.string().nullish(),
  state_province: z.string().nullish(),
  postal_code: z.string().nullish(),
  apply_account_balance_to_fees: z.boolean().nullish(),
  birth_date: z.string().nullish(),
  email: z.string().nullish(),
  phone_number: z.string().nullish(),
  emergency_contact_name: z.string().nullish(),
  emergency_contact_phone: z.string().nullish(),
  emergency_contact_email: z.string().nullish(),
  emergency_contact_relationship: z.string().nullish(),
  first_name: z.string().nullish(),
  last_name: z.string().nullish(),
});

export const CustomerSchema = z.object({
  id: z.coerce.number(),
  type: z.literal("users"),
  attributes: CustomerAttributes,
  relationships: RelationshipSchema,
});

export const CustomerListSchema = z.object({
  data: z.array(CustomerSchema),
  meta: z.object({
    pagination: z.object({
      count: z.number(),
      pages: z.number(),
      page: z.number(),
      per_page: z.number(),
    }),
  }),
});

export type Customer = z.infer<typeof CustomerSchema>;
export type CustomerAttributes = z.infer<typeof CustomerAttributes>;
