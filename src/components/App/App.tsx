import ArticleList from "../ArticleList/ArticleList";
import useResponses from "../../hooks/useResponses"; // Assuming this is correctly imported based on your directory structure
import Search from "../Search/Search";
import useSearch from "../../hooks/useSearch";
import usePagination from "../../hooks/usePagination";
import useSortOrder from "../../hooks/useSortOrder";
import Pagination from "../Pagination/Pagination";
import FilterBy from "../Filter/FilterBy";

const App = () => {
  const { responses, fetchArticles } = useResponses();
  const { searchTerm, handleSearchChange } = useSearch();
  const { page, handleMore, handlePrevious } = usePagination(1, fetchArticles);
  const { sortOrder, handleSortByDate, handleSortBySource } = useSortOrder();

  return (
    <div className="container">
      <div>
        <Search onSearchChange={handleSearchChange} />
      </div>
      <div>
        <Pagination
          page={page}
          handleMore={handleMore}
          handlePrevious={handlePrevious}
        />
      </div>
      <div>
        <FilterBy
          handleSortByDate={handleSortByDate}
          handleSortBySource={handleSortBySource}
          sortOrder={sortOrder}
        />
      </div>
      <div>
        <ArticleList
          responses={responses || []}
          searchTerm={searchTerm}
          sortOrder={sortOrder}
        />
      </div>
    </div>
  );
};

export default App;
