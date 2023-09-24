import "./style.css";

import { BiFilter } from "react-icons/bi";

function FilterButton() {
  return (
    <button type="button" id="filterButton">
      <span className="filterButton-icon">
        <BiFilter />
      </span>
      <span className="filterButton-text">Filtro</span>
    </button>
  );
}

export default FilterButton;
