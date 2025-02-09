import { Resource } from "sst";
import {
  ListReservationLogMessagesSchema,
  ReservationLogMessageSchema,
} from "../../schemas/reservation-log-messages";
import { ListQueryParams } from "../../shared/models";

function listReservationLogMessages({
  params,
}: {
  params: ListQueryParams & { reservation: number };
}) {
  return async ({
    accessToken,
    subdomain,
  }: {
    accessToken: string;
    subdomain: string;
  }) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        searchParams.set(key, value.toString());
      }
    });
    const response = await fetch(
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/reservation_log_messages?${searchParams.toString()}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return ListReservationLogMessagesSchema.parse(data);
  };
}

function getReservationLogMessage({ id }: { id: number }) {
  return async ({
    accessToken,
    subdomain,
  }: {
    accessToken: string;
    subdomain: string;
  }) => {
    const response = await fetch(
      `https://${subdomain}.${Resource.App.stage === "main" ? "." : "sandbox."}marianatek.com/api/reservation_log_messages/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return ReservationLogMessageSchema.parse(data);
  };
}

export default {
  list: listReservationLogMessages,
  get: getReservationLogMessage,
};
