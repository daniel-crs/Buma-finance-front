import "../../style.css";

import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function TableData({
  revenueId,
  expenseId,
  name,
  installments,
  status,
  price,
}) {
  return (
    <tr className="inex-listLines">
      <td className="inex-checkboxArea">
        <div className="inex-customCheckbox">
          <input id={1} type="checkbox" />
          <label htmlFor={1}></label>
        </div>
      </td>
      <td className="inex-nameArea">{name}</td>
      <td className="inex-expirationArea">Vencimento</td>
      <td className="inex-parcelArea">{installments}</td>
      <td className="inex-statusArea">{status}</td>
      <td className="inex-valueArea">{price}</td>
      <td className="inex-opcaoArea">
        <div className="inex-iconsPosition">
          <Button className="inex-iconBtnBackground">
            <span className="inex-iconCustom">
              <FaTrash />
            </span>
          </Button>

          <Button className="inex-iconBtnBackground">
            <span className="inex-iconCustom">
              <MdModeEdit />
            </span>
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default TableData;
