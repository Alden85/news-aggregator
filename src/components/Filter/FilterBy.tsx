import Button from "../Button/Button";
import styles from "../Button/Button.module.css";

interface FilterByProps {
  handleSortByDate: () => void;
  handleSortBySource: () => void;
  sortOrder: string;
}

const FilterBy: React.FC<FilterByProps> = ({
  handleSortByDate,
  handleSortBySource,
  sortOrder,
}) => {
  return (
    <div>
      <Button
        onClick={handleSortByDate}
        className={sortOrder === "date" ? styles.active : ""}
      >
        Sort by Date
      </Button>
      <Button
        onClick={handleSortBySource}
        className={sortOrder === "source" ? styles.active : ""}
      >
        Sort by Source
      </Button>
    </div>
  );
};

export default FilterBy;
