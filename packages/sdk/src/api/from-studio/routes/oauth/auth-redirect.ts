export function generateOAuthRedirect({
  clientId,
  redirectUri,
  subdomain,
  state,
  preProd,
}: {
  clientId: string;
  redirectUri: string;
  subdomain: string;
  state: string;
  preProd: boolean;
}) {
  const searchParams = new URLSearchParams();
  searchParams.set("response_type", "code");
  searchParams.set("client_id", clientId);
  searchParams.set("redirect_uri", redirectUri);
  searchParams.set("state", state);
  searchParams.set("prompt", "true");

  const endpoint = `https://${subdomain}.${preProd ? "sandbox" : ""}.marianatek.com/o/authorize?${searchParams.toString()}`;

  return endpoint;
}
