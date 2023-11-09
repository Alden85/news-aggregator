import create from "../http-service";

// const baseUrl = import.meta.env.VITE_BASE_URL_TG;
// const endpoint = import.meta.env.VITE_ENDPOINT_TG;

const baseUrl = import.meta.env.VITE_BASE_URL_NA;
const endpoint = import.meta.env.VITE_ENDPOINT_NA;

export default create(endpoint, baseUrl);
