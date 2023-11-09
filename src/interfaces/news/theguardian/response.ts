import { Result } from "./result";

export interface Response_TG {
  response: {
    status: string;
    userTier: string;
    startIndex: number;
    pageSize: number;
    pages: number;
    currentPage: number;
    orderBy: string;
    total: number;
    results: Result[];
  };
}
