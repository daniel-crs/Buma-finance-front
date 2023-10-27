import "../../employee.css";
import { Button } from "react-bootstrap";

import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function TableData() {
  return (
    <tr className="employee-listLines">
      <td className="employee-checkboxArea">
        <div className="employee-customCheckbox">
          <input id={1} type="checkbox" />
          <label htmlFor={1}></label>
        </div>
      </td>
      <td className="employee-nameArea">nome</td>
      <td className="employee-emailArea">email</td>
      <td className="employee-telefoneArea">telefone</td>
      <td className="employee-opcaoArea">
        <div className="employee-iconsPosition">
          <Button className="employee-iconBtnBackground">
            <span className="employee-iconCustom">
              <FaTrash />
            </span>
          </Button>

          <Button className="employee-iconBtnBackground">
            <span className="employee-iconCustom">
              <MdModeEdit />
            </span>
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default TableData;
