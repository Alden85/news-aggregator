import create from "../http-service";

const baseUrl = "https://content.guardianapis.com";
const endpoint = "search";

export default create(endpoint, baseUrl);
