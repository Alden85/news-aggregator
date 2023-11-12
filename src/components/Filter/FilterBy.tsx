import Button from "../Button/Button";

interface FilterByProps {
  handleSortByDate: () => void;
  handleSortBySource: () => void;
  handleSortByCategory: () => void;
  sortOrder: string;
}

const FilterBy: React.FC<FilterByProps> = ({
  handleSortByDate,
  handleSortBySource,
  handleSortByCategory,
  sortOrder,
}) => {
  return (
    <div>
      <div className="text-center pb-2 fs-6">Filter Articles by:</div>
      <div className="text-center">
        <Button
          onClick={handleSortByDate}
          className={`btn btn-light me-2 btn-sm border border-black ${
            sortOrder === "date" ? "bg-dark text-light" : ""
          }`}
        >
          Date
        </Button>
        <Button
          onClick={handleSortByCategory}
          className={`btn btn-light me-2 btn-sm border border-black ${
            sortOrder === "category" ? "bg-dark text-light" : ""
          }`}
        >
          Category
        </Button>
        <Button
          onClick={handleSortBySource}
          className={`btn btn-light me-2 btn-sm border border-black ${
            sortOrder === "source" ? "bg-dark text-light" : ""
          }`}
        >
          Source
        </Button>
      </div>
    </div>
  );
};

export default FilterBy;
