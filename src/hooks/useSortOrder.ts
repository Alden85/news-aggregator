import { useState, useCallback } from "react";

const useSortOrder = () => {
  const [sortOrder, setSortOrder] = useState("");

  const handleSortByDate = useCallback(() => {
    setSortOrder("date");
  }, []);

  const handleSortBySource = useCallback(() => {
    setSortOrder("source");
  }, []);

  return {
    sortOrder,
    handleSortByDate,
    handleSortBySource,
  };
};

export default useSortOrder;
