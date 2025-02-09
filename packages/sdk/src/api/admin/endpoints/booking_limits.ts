import { KyInstance } from "ky";

const basePath = "/booking_limits";

interface CreateOrUpdateBookingLimitData {
  name: string;
  isActive?: boolean;
  reservation_limit: number;
  rules?: Array<{
    id: number;
    spot_limit: number;
    limit_objects?: Array<{
      id: number;
      name: string;
    }>;
  }>;
}

export class BookingLimitsApi {
  constructor(private readonly request: KyInstance) {}

  async list() {
    const response = await this.request.get(basePath).json();
    return response;
  }

  async get(id: number) {
    const response = await this.request.get(`${basePath}/${id}`).json();
    return response;
  }

  async create(data: CreateOrUpdateBookingLimitData) {
    const response = await this.request.post(basePath, { json: data }).json();
    return response;
  }

  async update(id: number, data: CreateOrUpdateBookingLimitData) {
    const response = await this.request
      .put(`${basePath}/${id}`, { json: data })
      .json();
    return response;
  }
}
