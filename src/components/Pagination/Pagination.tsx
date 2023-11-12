import React from "react";
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
      <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page <= 1 ? "disabled" : ""}`}>
            <Button
              onClick={() => {
                if (page > 1) handlePrevious();
              }}
              className={`page-link ${
                page > 1 ? "text-dark" : "text-secondary"
              }`}
              disabled={page <= 1}
            >
              Previous
            </Button>
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link text-light bg-dark border border-dark">
              {page}
            </span>{" "}
          </li>
          <li className="page-item">
            <Button onClick={handleMore} className="page-link text-dark">
              Next
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
