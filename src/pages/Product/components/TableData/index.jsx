import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function TableData({ productId, nome, categoria, valor }) {
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
      <td className="valorArea">R$ {valor}</td>
      <td className="opcaoArea">
        <div className="iconsCustom">
          <FaTrash />
          <MdModeEdit />
        </div>
      </td>
    </tr>
  );
}

export default TableData;
