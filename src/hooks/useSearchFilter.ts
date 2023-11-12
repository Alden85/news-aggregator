import { useState, useEffect } from "react";
import { UnifiedArticle } from "../interfaces/news/unified-article";

export const useSearchFilter = (
  responses: UnifiedArticle[],
  searchTerm: string,
  sortOrder: string
) => {
  const [filteredAndSortedResponses, setFilteredAndSortedResponses] = useState<
    UnifiedArticle[]
  >([]);

  useEffect(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filter the unified articles based on the search term
    const filtered = responses.filter((article) =>
      article.title.toLowerCase().includes(lowerCaseSearchTerm)
    );

    // Sort the filtered unified articles
    const sorted = filtered.slice().sort((a, b) => {
      if (sortOrder === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortOrder === "source") {
        return a.source.localeCompare(b.source);
      }
      return 0; // Default case if no sortOrder matches
    });

    // Update state with the new filtered and sorted structure
    setFilteredAndSortedResponses(sorted);
  }, [responses, searchTerm, sortOrder]);

  return filteredAndSortedResponses;
};

export default useSearchFilter;
