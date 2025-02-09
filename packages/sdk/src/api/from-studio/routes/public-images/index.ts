import { Resource } from "sst";
import { RetrievePublicImageSchema } from "../../schemas/public-images";

function getPublicImage(id: string | number) {
  return async ({
    accessToken,
    subdomain,
  }: {
    accessToken: string;
    subdomain: string;
  }) => {
    const response = await fetch(
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/public_images/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.text();
    return RetrievePublicImageSchema.parse(data);
  };
}

export default {
  get: getPublicImage,
};
