import create from "../http-service";

const baseUrl = import.meta.env.VITE_BASE_URL_TG;
const endpoint = import.meta.env.VITE_ENDPOINT_TG;

export default create(endpoint, baseUrl);
