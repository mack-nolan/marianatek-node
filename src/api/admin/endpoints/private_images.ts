import { KyInstance } from "ky";

export class PrivateImagesApi {
  constructor(private readonly request: KyInstance) {}

  async create({ image }: { image: File }) {
    const formData = new FormData();
    formData.append("image", image);
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

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async destroy(id: number) {
    const response = await this.request.delete(`${basePath}/${id}`).json();
    return response;
  }
}

const basePath = "/private_images";
