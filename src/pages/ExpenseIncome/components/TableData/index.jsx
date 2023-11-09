import "../../style.css";

import IncomeModal from "../IncomeModal";
import ExpenseModal from "../ExpenseModal";

import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";

function TableData({
  revenueId,
  expenseId,
  description,
  installments,
  payment_status,
  price,
  identify,
}) {
  const [openModal, setOpenModal] = useState(false);

  const deleteRevenue = () => {
    fetch(`http://localhost:8000/revenues/${revenueId}`, {
      method: "DELETE",
    });

    window.location.reload();
  };

  const deleteExpense = () => {
    fetch(`http://localhost:8000/expanse/${expenseId}`, {
      method: "DELETE",
    });

    window.location.reload();
  };

  return (
    <tr className="inex-listLines">
      <td className="inex-checkboxArea">
        <div className="inex-customCheckbox">
          <input id={1} type="checkbox" />
          <label htmlFor={1}></label>
        </div>
      </td>
      <td className="inex-nameArea">{description}</td>
      <td className="inex-expirationArea">Vencimento</td>
      <td className="inex-parcelArea">{installments}</td>
      <td className="inex-statusArea">{payment_status}</td>
      <td className="inex-valueArea">{price}</td>
      <td className="inex-opcaoArea">
        <div className="inex-iconsPosition">
          {identify === "revenue" ? (
            <Button
              className="inex-iconBtnBackground"
              onClick={() => deleteRevenue()}
            >
              <span className="inex-iconCustom">
                <FaTrash />
              </span>
            </Button>
          ) : (
            <Button
              className="inex-iconBtnBackground"
              onClick={() => deleteExpense()}
            >
              <span className="inex-iconCustom">
                <FaTrash />
              </span>
            </Button>
          )}

          <Button
            className="inex-iconBtnBackground"
            onClick={() => setOpenModal(true)}
          >
            <span className="inex-iconCustom">
              <MdModeEdit />
            </span>
          </Button>

          {identify === "revenue" ? (
            <IncomeModal
              id={revenueId}
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
              incomeDescription={description}
            />
          ) : (
            <ExpenseModal
              id={expenseId}
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
            />
          )}
        </div>
      </td>
    </tr>
  );
}

export default TableData;
