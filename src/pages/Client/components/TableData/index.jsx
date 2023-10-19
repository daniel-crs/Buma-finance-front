import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

import Button from "react-bootstrap/Button";

function TableData({ legalId, nome, company, email, telefone }) {
  return (
    <tr className="listLines">
      <td className="checkboxArea">
        <div className="customCheckbox">
          <input id={1} type="checkbox" />
          <label htmlFor={1}></label>
        </div>
      </td>
      <td className="nameArea">{nome}</td>
      <td className="empresaArea">{company}</td>
      <td className="emailArea">{email}</td>
      <td className="telefoneArea">{telefone}</td>
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
