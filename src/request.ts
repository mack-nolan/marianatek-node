import ky from "ky";

export const request = (
  token: string,
  subdomain: `${string}.sandbox` | string
) =>
  ky.create({
    prefixUrl: `https://${subdomain}.marianatek.com/`,
    headers: {
      Authorization: `Bearer ${token}`,
      "User-Agent": "@macknolandev/marianatek-node",
    },
  });
