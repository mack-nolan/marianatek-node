import { Resource } from "sst";
import {
  EmployeeListSchema,
  EmployeeProfileListSchema,
} from "../../schemas/employees";

export interface EmployeeQueryParams {
  can_instruct_classes?: boolean | string;
  can_work_shifts?: boolean;
  page: number;
  group?: string;
  page_size?: number;
  query?: string;
  is_active?: boolean;
  is_staff?: boolean;
  ordering?: string;
}

function listEmployees({ params }: { params: EmployeeQueryParams }) {
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
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/employees?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return EmployeeListSchema.parse(data);
  };
}

export interface EmployeeProfileQueryParams {
  can_instruct_classes?: boolean;
  page: number;
  page_size?: number;
  query?: string;
  ordering?: string;
}

function listEmployeeProfiles({
  params,
}: {
  params: EmployeeProfileQueryParams;
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
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/employee_public_profiles?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return EmployeeProfileListSchema.parse(data);
  };
}

export default {
  list: listEmployees,
  profiles: {
    list: listEmployeeProfiles,
  },
};
