import { useState, useCallback } from "react";

const usePagination = (
  initialPage: number,
  fetchArticles: (page: number) => void
) => {
  const [page, setPage] = useState(initialPage);

  const handleMore = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage);
  }, [page, fetchArticles]);

  const handlePrevious = useCallback(() => {
    const previousPage = Math.max(page - 1, 1);
    setPage(previousPage);
    fetchArticles(previousPage);
  }, [page, fetchArticles]);

  return {
    page,
    handleMore,
    handlePrevious,
  };
};

export default usePagination;
