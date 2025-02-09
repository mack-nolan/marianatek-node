import { KyInstance } from "ky";

export class ClassSessionTagsApi {
  constructor(private readonly request: KyInstance) {}

  async list() {
    const response = await this.request.get(basePath).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/class_session_tags";
