import apiClient from "./api-client";

class HttpService {
  endpoint: string;
  private client;

  constructor(endpoint: string, baseUrl: string) {
    this.endpoint = endpoint;
    this.client = apiClient(baseUrl);
  }

  getAll<T>(params?: Record<string, unknown>) {
    const controller = new AbortController();
    const request = this.client.get<T[]>(this.endpoint, {
      params,
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string, baseUrl: string) =>
  new HttpService(endpoint, baseUrl);

export default create;
