import ArticleList from "../ArticleList/ArticleList";
import useResponses from "../../hooks/useResponses";
import Search from "../Search/Search";
import useSearch from "../../hooks/useSearch";
import usePagination from "../../hooks/usePagination";
import useSortOrder from "../../hooks/useSortOrder";
import Pagination from "../Pagination/Pagination";
import FilterBy from "../Filter/FilterBy";
import Header from "../Header/Header";
import MobileFilterMenu from "../Mobile/MobileFilterMenu";

const App = () => {
  const { searchTerm, handleSearchChange } = useSearch();
  const { page, handleMore, handlePrevious } = usePagination(1);
  const { responses } = useResponses(page);
  const {
    sortOrder,
    handleSortByDate,
    handleSortBySource,
    handleSortByCategory,
  } = useSortOrder();

  return (
    <div className="container-fluid">
      <div className="row p-0">
        <Header />
        <MobileFilterMenu
          handleSortByDate={handleSortByDate}
          handleSortBySource={handleSortBySource}
          handleSortByCategory={handleSortByCategory}
          sortOrder={sortOrder}
        />
        <div className="col-12 col-md-4 col-lg-3 pt-2 bg-light d-none d-md-block">
          {/* This FilterBy will be hidden on screens smaller than medium (md) */}
          <FilterBy
            handleSortByDate={handleSortByDate}
            handleSortBySource={handleSortBySource}
            handleSortByCategory={handleSortByCategory}
            sortOrder={sortOrder}
          />
        </div>
        <div className="col-12 col-md-8 col-lg-9 pt-2 bg-light-subtle">
          <Search onSearchChange={handleSearchChange} />
          <ArticleList
            responses={responses || []}
            searchTerm={searchTerm}
            sortOrder={sortOrder}
          />
          <Pagination
            page={page}
            handleMore={handleMore}
            handlePrevious={handlePrevious}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
