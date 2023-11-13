import create from "../http-service";

const baseUrl = "https://newsapi.org/v2/";
const endpoint = "top-headlines";

export default create(endpoint, baseUrl);
