import { BaseListOptions } from "@/api/models.js";
import { createSearchParams } from "@/api/searchParams.js";
import { KyInstance } from "ky";

export class PublicImagesApi {
  constructor(private readonly request: KyInstance) {}

  async list(options: BaseListOptions) {
    const response = await this.request
      .get(basePath, { searchParams: createSearchParams(options) })
      .json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: { image: File }) {
    const formData = new FormData();
    formData.append("image", data.image);
    const response = await this.request
      .post(basePath, {
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .json();
    return response;
  }

  async update(id: number, data: { image: File }) {
    const formData = new FormData();
    formData.append("image", data.image);
    const response = await this.request
      .put(`${basePath}/${id}`, {
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .json();
    return response;
  }

  async delete(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/public_images";
