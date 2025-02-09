import { z } from "zod";

const TokenRefreshResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  token_type: z.string(),
  scope: z.string(),
  refresh_token: z.string(),
});

export async function tokenRefresh({
  subdomain,
  preProd,
  clientSecret,
  clientId,
  refreshToken,
}: {
  subdomain: string;
  preProd: boolean;
  clientSecret: string;
  clientId: string;
  refreshToken: string;
}) {
  const searchParams = new URLSearchParams();
  searchParams.set("grant_type", "refresh_token");
  searchParams.set("client_id", clientId);
  searchParams.set("client_secret", clientSecret);
  searchParams.set("refresh_token", refreshToken);
  const endpoint = `https://${subdomain}.${preProd ? "sandbox" : ""}.marianatek.com/o/token?${searchParams.toString()}`;
  const response = await fetch(endpoint, {
    method: "POST",
  });

  const rawJson = await response.json();
  return TokenRefreshResponseSchema.parse(rawJson);
}
