import { useState } from "react";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    // You might also want to debounced fetchArticles here if applicable.
  };

  return {
    searchTerm,
    handleSearchChange,
  };
};

export default useSearch;
