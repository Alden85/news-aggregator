import { NaParamOptions } from "./news/newsapi/param-options";
import { TgParamOptions } from "./news/theguardian/param-options";

export type FetchOptions = {
  tgOptions?: TgParamOptions;
  naOptions?: NaParamOptions;
};
