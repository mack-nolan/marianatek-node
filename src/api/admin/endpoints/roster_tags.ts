import { KyInstance } from "ky";

export class RosterTagsApi {
  constructor(private readonly request: KyInstance) {}

  async list() {
    const response = await this.request.get(basePath).json();
    return response;
  }
}

const basePath = "/roster_tags";
