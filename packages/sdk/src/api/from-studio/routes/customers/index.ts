import { Resource } from "sst";
import { CustomerListSchema } from "../../schemas";
import { CustomerSchema } from "../../schemas/customers";
import { ListQueryParams } from "../../shared/models";

function getCustomer({ id }: { id: number }) {
  return async ({
    accessToken,
    subdomain,
  }: {
    accessToken: string;
    subdomain: string;
  }) => {
    const response = await fetch(
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/users/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return CustomerSchema.parse(data);
  };
}

function listCustomers({ params }: { params: ListQueryParams }) {
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
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/users?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return CustomerListSchema.parse(data);
  };
}

export default {
  list: listCustomers,
  get: getCustomer,
};
