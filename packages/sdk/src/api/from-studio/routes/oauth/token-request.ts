import { z } from "zod";

const TokenRequestResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.number(),
  token_type: z.string(),
  scope: z.string(),
  refresh_token: z.string(),
});

export async function tokenRequest({
  subdomain,
  preProd,
  clientSecret,
  clientId,
  authCode,
}: {
  subdomain: string;
  preProd: boolean;
  clientSecret: string;
  clientId: string;
  authCode: string;
}) {
  const searchParams = new URLSearchParams();
  searchParams.set("grant_type", "authorization_code");
  searchParams.set("client_id", clientId);
  searchParams.set("client_secret", clientSecret);
  searchParams.set("code", authCode);

  const endpoint = `https://${subdomain}.${preProd ? "sandbox" : ""}.marianatek.com/o/token?${searchParams.toString()}`;
  const response = await fetch(endpoint, {
    method: "POST",
  });

  const rawJson = await response.json();
  return TokenRequestResponseSchema.parse(rawJson);
}
