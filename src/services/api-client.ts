import axios from "axios";

const createApiClient = (baseURL: string) => {
  // Create an instance of Axios with the provided baseURL
  const apiClient = axios.create({
    baseURL: baseURL,
  });

  return apiClient;
};

export default createApiClient;
