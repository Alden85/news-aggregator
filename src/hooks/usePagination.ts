import { useState, useCallback } from "react";

const usePagination = (initialPage: number) => {
  const [page, setPage] = useState(initialPage);

  const handleMore = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
  }, [page]);

  const handlePrevious = useCallback(() => {
    const previousPage = Math.max(page - 1, 1);
    setPage(previousPage);
  }, [page]);

  return {
    page,
    handleMore,
    handlePrevious,
  };
};

export default usePagination;
