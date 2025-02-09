import { request } from "./request.js";

interface MarianatekClientOptions {
  token: string;
  subdomain: `${string}.sandbox` | string;
}

export async function createMarianatekClient(options: MarianatekClientOptions) {
  const { token, subdomain } = options;

  const baseRequest = request(token, subdomain);

  return {
    baseRequest,
  };
}
