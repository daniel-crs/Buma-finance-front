import "../../style.css";

import IncomeModal from "../IncomeModal";
import ExpenseModal from "../ExpenseModal";
import InstallmentsDropwn from "../InstallmentsDropdown";

import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useEffect, useState } from "react";

function TableData({
  revenueId,
  expenseId,
  description,
  productId,
  serviceId,
  price,
  quantity,
  discount,
  payment_status,
  legalcustomerId,
  physicalcustomerId,
  installments,
  recurrent,
  due_date,
  competence,
  payment_type,
  fees,
  identify,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState([]); 

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

      {identify === "revenue" ? (
        <td style={{ color: "green" }} className="inex-nameArea">
          {description}
        </td>
      ) : (
        <td style={{ color: "red" }} className="inex-nameArea">
          {description}
        </td>
      )}
      <td className="inex-expirationArea">bananas</td>
      {installments === 0 ? (
        <td className="inex-parcelArea">
          <div className="inex-installmentsPosition">
            <div className="inex-installmentsContainer">
              <p>Única</p>
            </div>
          </div>
        </td>
      ) : (
        <td className="inex-parcelArea">
          <div className="dropdown">
            <div className="inex-installmentsPosition">
              <div className="inex-installmentsContainer">
                <p>{installments}</p>
              </div>
            </div>

            <InstallmentsDropwn revenueId={revenueId} expenseId={expenseId} identify={identify} />
          </div>
        </td>
      )}
      {payment_status === "paid" ? (
        <td className="inex-statusArea">
          <div className="inex-statusPosition">
            <div
              style={{ backgroundColor: "#568724" }}
              className="inex-statusContainer"
            >
              <p>Pago</p>
            </div>
          </div>
        </td>
      ) : payment_status === "open" ? (
        <td className="inex-statusArea">
          <div className="inex-statusPosition">
            <div
              style={{ backgroundColor: "#D99718" }}
              className="inex-statusContainer"
            >
              <p>Aberto</p>
            </div>
          </div>
        </td>
      ) : (

        <td className="inex-statusArea">
          <div className="inex-statusPosition">
            <div
              style={{ backgroundColor: "#E61818" }}
              className="inex-statusContainer"
            >
              <p>Atrasada</p>
            </div>
          </div>
        </td>
      )}
      <td className="inex-valueArea">R$ {price}</td>
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
              incDescription={description}
              incProductId={productId}
              incServiceId={serviceId}
              priceId={price}
              quantityId={quantity}
              discountId={discount}
              payment_statusId={payment_status}
              legalcustomerId={legalcustomerId}
              physicalcustomerId={physicalcustomerId}
              installmentsId={installments}
              due_dateId={due_date}
              recurrentId={recurrent}
            />
          ) : (
            <ExpenseModal
              id={expenseId}
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
              descriptionId={description}
              competenceId={competence}
              priceId={price}
              discountId={discount}
              installmentsId={installments}
              payment_typeId={payment_type}
              payment_statusId={payment_status}
              recurrentId={recurrent}
              due_dateId={due_date}
              feesId={fees}
            />
          )}
        </div>
      </td>
    </tr>
  );
}

export default TableData;
