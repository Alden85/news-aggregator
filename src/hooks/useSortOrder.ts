import { useState, useCallback } from "react";

const useSortOrder = () => {
  const [sortOrder, setSortOrder] = useState("");

  const handleSortByDate = useCallback(() => {
    setSortOrder("date");
  }, []);

  const handleSortBySource = useCallback(() => {
    setSortOrder("source");
  }, []);

  const handleSortByCategory = useCallback(() => {
    setSortOrder("category");
  }, []);

  return {
    sortOrder,
    handleSortByDate,
    handleSortBySource,
    handleSortByCategory,
  };
};

export default useSortOrder;
