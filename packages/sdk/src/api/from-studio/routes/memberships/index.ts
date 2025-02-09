import { Resource } from "sst";
import {
  MembershipListSchema,
  MembershipSchema,
} from "../../schemas/memberships";
import { ListQueryParams } from "../../shared/models";

function listMemberships({ params }: { params: ListQueryParams }) {
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
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/membership_instances?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return MembershipListSchema.parse(data);
  };
}

function getMembership({ id }: { id: number }) {
  return async ({
    accessToken,
    subdomain,
  }: {
    accessToken: string;
    subdomain: string;
  }) => {
    const response = await fetch(
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/membership_instances/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return MembershipSchema.parse(data);
  };
}

export default {
  list: listMemberships,
  get: getMembership,
};
