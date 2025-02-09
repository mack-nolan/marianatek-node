import { KyInstance } from "ky";

interface ClassSessionCategoryCreateOrUpdateParams {
  name: string;
  active?: boolean;
}

export class ClassSessionCategoriesApi {
  constructor(private readonly request: KyInstance) {}

  async list() {
    const response = await this.request.get(basePath).json();
    return response;
  }

  async create(data: ClassSessionCategoryCreateOrUpdateParams) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async update(id: number, data: ClassSessionCategoryCreateOrUpdateParams) {
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

const basePath = "/class_session_categories";
