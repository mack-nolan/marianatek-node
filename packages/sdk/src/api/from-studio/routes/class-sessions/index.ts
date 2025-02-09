import { Resource } from "sst";
import { ClassSessionListSchema, ClassSessionSchema } from "../../schemas";
import { ListQueryParams } from "../../shared/models";

function listClassSessions({ params }: { params: ListQueryParams }) {
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
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/class_sessions?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();

    return ClassSessionListSchema.parse(data);
  };
}

function getClassSession({ id }: { id: string }) {
  return async ({
    accessToken,
    subdomain,
  }: {
    accessToken: string;
    subdomain: string;
  }) => {
    const response = await fetch(
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/class_sessions/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    return ClassSessionSchema.parse(data);
  };
}

export default {
  list: listClassSessions,
  retrieve: getClassSession,
};
