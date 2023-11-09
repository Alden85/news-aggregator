import Button from "../Button/Button";

interface PaginationProps {
  page: number;
  handleMore: () => void;
  handlePrevious: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  handleMore,
  handlePrevious,
}) => {
  return (
    <div>
      <Button onClick={handlePrevious} disabled={page <= 1}>
        Previous
      </Button>
      <Button onClick={handleMore}>More</Button>
    </div>
  );
};

export default Pagination;
