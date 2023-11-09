import { useState, useEffect } from "react";
import { Response_TG } from "../interfaces/news/theguardian/response";
import { Response_NA } from "../interfaces/news/newsapi/response";
import { isResponseTG, isResponseNA } from "../utils/isResponse";

export const useSearchFilter = (
  responses: (Response_TG | Response_NA)[],
  searchTerm: string,
  sortOrder: string // sortOrder as a parameter
) => {
  const [filteredAndSortedResponses, setFilteredAndSortedResponses] = useState<
    (Response_TG | Response_NA)[]
  >([]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // First, filter the responses based on the search term
    const filtered = responses.map((response) => {
      if (isResponseTG(response)) {
        const filteredResults = response.response.results.filter((result) =>
          result.webTitle.toLowerCase().includes(lowerCaseSearchTerm)
        );
        return {
          ...response,
          response: { ...response.response, results: filteredResults },
        };
      } else if (isResponseNA(response)) {
        const filteredArticles = response.articles.filter((article) =>
          article.title.toLowerCase().includes(lowerCaseSearchTerm)
        );
        return { ...response, articles: filteredArticles };
      } else {
        return response;
      }
    });

    // Next, sort the filtered responses if a sortOrder is specified
    const sorted = filtered.map((response) => {
      if (sortOrder) {
        if (isResponseTG(response)) {
          // Sort TG responses
          const sortedResults = [...response.response.results].sort((a, b) => {
            return sortOrder === "date"
              ? new Date(b.webPublicationDate).getTime() -
                  new Date(a.webPublicationDate).getTime()
              : a.webUrl.localeCompare(b.webUrl); // Assuming webUrl for source sorting
          });
          return {
            ...response,
            response: { ...response.response, results: sortedResults },
          };
        } else if (isResponseNA(response)) {
          // Sort NA responses
          const sortedArticles = [...response.articles].sort((a, b) => {
            return sortOrder === "date"
              ? new Date(b.publishedAt).getTime() -
                  new Date(a.publishedAt).getTime()
              : a.source.name.localeCompare(b.source.name); // Assuming source.name for source sorting
          });
          return { ...response, articles: sortedArticles };
        }
      }
      return response;
    });

    // Update state with the new filtered and sorted structure
    setFilteredAndSortedResponses(sorted);
  }, [responses, searchTerm, sortOrder]);

  return filteredAndSortedResponses;
};

export default useSearchFilter;
