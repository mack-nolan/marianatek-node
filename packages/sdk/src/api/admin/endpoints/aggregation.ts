import { KyInstance } from "ky";

export class AggregationApi {
  constructor(private readonly request: KyInstance) {}

  async classCount(id: number) {
    const response = await this.request
      .get(`/aggregation/class_count/${id}`)
      .json();
    return response;
  }
}
