import { Resource } from "sst";
import { ClassSessionTypeListSchema } from "../../schemas/class-session-types";
import { ListQueryParams } from "../../shared/models";

function listClassSessionTypes({
  params,
}: {
  params: ListQueryParams & {
    enabled?: boolean;
  };
}) {
  return async ({
    accessToken,
    subdomain,
  }: {
    accessToken: string;
    subdomain: string;
  }) => {
    const searchParams = new URLSearchParams();
    // set search params for each params
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.set(key, value.toString());
      }
    });
    const response = await fetch(
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/class_session_types?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return ClassSessionTypeListSchema.parse(data);
  };
}

export default {
  list: listClassSessionTypes,
};
