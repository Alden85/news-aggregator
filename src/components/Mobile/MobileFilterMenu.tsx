// MobileFilterMenu.tsx
import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import FilterBy from "../Filter/FilterBy";
import MenuIcon from "./MenuIcon";
import CloseIcon from "./CloseIcon";

interface MobileFilterMenuProps {
  handleSortByDate: () => void;
  handleSortBySource: () => void;
  handleSortByCategory: () => void;
  sortOrder: string;
}

const MobileFilterMenu: React.FC<MobileFilterMenuProps> = ({
  handleSortByDate,
  handleSortBySource,
  handleSortByCategory,
  sortOrder,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-md-none pt-2">
      <Button
        className="btn btn-dark"
        onClick={() => setOpen(!open)}
        aria-controls="filter-collapse"
        aria-expanded={open}
      >
        {!open ? <MenuIcon /> : <CloseIcon />}
      </Button>
      <Collapse in={open}>
        <div id="filter-collapse">
          <FilterBy
            handleSortByDate={handleSortByDate}
            handleSortBySource={handleSortBySource}
            handleSortByCategory={handleSortByCategory}
            sortOrder={sortOrder}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default MobileFilterMenu;
