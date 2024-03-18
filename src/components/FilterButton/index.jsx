import "./style.css";

import { BiFilter } from "react-icons/bi";
import { FilterValueContext } from "../../context/FilterValueContext";
import { useContext } from "react";

function FilterButton() {
  const {setFilterStatus} = useContext(FilterValueContext);

  return (
    <div className="dropdown">
      <button type="button" id="filterButton">
        <span className="filterButton-icon">
          <BiFilter />
        </span>
        <span className="filterButton-text">Filtro</span>
      </button>

      <div className="dropdown-content">
        <button
          className="dropdown-item"
          onClick={() => setFilterStatus("all")}
        >
          Todos
        </button>

        <button
          className="dropdown-item"
          onClick={() => setFilterStatus("revenue")}
        >
          Receitas
        </button>

        <button
          className="dropdown-item"
          onClick={() => setFilterStatus("expanse")}
        >
          Despesas
        </button>
      </div>
    </div>
  );
}

export default FilterButton;
