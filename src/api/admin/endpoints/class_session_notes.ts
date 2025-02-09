import { KyInstance } from "ky";

interface ClassSessionNoteCreateOrUpdateParams {
  class_session: number;
  text: string;
  author?: string;
}

export class ClassSessionNotesApi {
  constructor(private readonly request: KyInstance) {}

  async list() {
    const response = await this.request.get(basePath).json();
    return response;
  }

  async create(data: ClassSessionNoteCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: ClassSessionNoteCreateOrUpdateParams) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/class_session_notes";
