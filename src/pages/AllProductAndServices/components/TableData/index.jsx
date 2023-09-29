import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

import { Link } from "react-router-dom";

function TableData({ productId, nome, categoria, valor, link }) {
  return (
    <tr className="listLines">
      <td className="checkboxArea">
        <div className="customCheckbox">
          <input id={productId} type="checkbox" />
          <label htmlFor={productId}></label>
        </div>
      </td>
      <td className="nameArea">{nome}</td>
      <td className="categoriaArea">{categoria}</td>
      <td className="valorArea">{valor}</td>
      <td className="opcaoArea">
        <div className="iconsPosition">
          <Link className="iconCustom">
            <FaTrash />
          </Link>
          <Link to={{ link }} className="iconCustom">
            <MdModeEdit />
          </Link>
        </div>
      </td>
    </tr>
  );
}

export default TableData;
