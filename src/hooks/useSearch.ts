import { useState } from "react";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return {
    searchTerm,
    handleSearchChange,
  };
};

export default useSearch;
