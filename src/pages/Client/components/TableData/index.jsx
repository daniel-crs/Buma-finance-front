import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

import Button from "react-bootstrap/Button";

function TableData() {
  return (
    <tr className="listLines">
      <td className="checkboxArea">
        <div className="customCheckbox">
          <input id={1} type="checkbox" />
          <label htmlFor={1}></label>
        </div>
      </td>
      <td className="nameArea">Lucas</td>
      <td className="empresaArea">Magalu</td>
      <td className="emailArea">magalu123@gmail.com</td>
      <td className="telefoneArea">61995532712</td>
      <td className="opcaoArea">
        <div className="iconsPosition">
          <Button className="iconBtnBackground">
            <span className="iconCustom">
              <FaTrash />
            </span>
          </Button>

          <Button className="iconBtnBackground">
            <span className="iconCustom">
              <MdModeEdit />
            </span>
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default TableData;
