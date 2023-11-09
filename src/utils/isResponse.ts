import { Response_NA } from "../interfaces/news/newsapi/response";
import { Response_TG } from "../interfaces/news/theguardian/response";

export function isResponseTG(
  response: Response_TG | Response_NA
): response is Response_TG {
  return "response" in response && "results" in response.response;
}

export // Define a type guard for Response_NA
function isResponseNA(
  response: Response_TG | Response_NA
): response is Response_NA {
  return (response as Response_NA).articles !== undefined;
}
