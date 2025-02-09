import { z } from "zod";
import { RelationshipSchema } from "./shared/index.js";

// {"meta":null,"links":null,"data":{"type":"public_images","id":"0ef86d30-a07f-4181-97e5-93a76393dbf8","attributes
//     │ ":{"image":"https://mtdemo-files.s3.amazonaws.com/media/public_images/instructor-4-thumbnail_vnuk552.jpg","width":600,"height":600},
//     │ "relationships":{}},"included":[]}

export const PublicImageAttributes = z.object({
  image: z.string(),
  width: z.number(),
  height: z.number(),
});

export const PublicImageSchema = z.object({
  type: z.literal("public_images"),
  id: z.string(),
  attributes: PublicImageAttributes,
  relationships: RelationshipSchema,
});

export const RetrievePublicImageSchema = z.object({
  data: PublicImageSchema,
  meta: z.unknown().nullable(),
});

export type PublicImage = z.infer<typeof PublicImageSchema>;
export type PublicImageAttributes = z.infer<typeof PublicImageAttributes>;
