import { useState } from "react";
import "../../style/expenseForm.css";
import ExpenseInfo from "../fieldsetComponents/form/ExpenseInfo";
import ExpensePayment from "../fieldsetComponents/form/ExpensePayment";

import { MdOutlineClose } from "react-icons/md";

function ExpenseForm({ isOpen, setModalOpen }) {
  const url = "http://localhost:8000/expanse";
  const [roleId, setRoleID] = useState(1);
  const [name, setName] = useState();
  const [competence, setCompetence] = useState();
  const [gross_value, setGross_value] = useState();
  const [discount, setDiscount] = useState();
  const [installments, setInstallments] = useState(0);
  const [payment_type, setPayment_type] = useState(true);
  const [payment_status, setPayment_status] = useState(true);
  const [fees, setFees] = useState();
  const [recurrent, setRecurrent] = useState(true);

  const createExpense = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        competence,
        gross_value,
        discount,
        installments,
        payment_type,
        payment_status,
        fees,
        bank_account: null,
        recurrent,
      }),
    }).then((res) => res.json());

    window.location.reload();
  };

  if (isOpen) {
    return (
      <div className="expense-backgroundStyle">
        <div className="expense-modalStyle">
          <div id="expense-headerContainer">
            <div className="expense-clientTypeTitle">
              <h3>Adicionar Despesa</h3>
            </div>

            <div className="expense-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="expense-Container">
            <fieldset className="expense-formCustom">
              <ExpenseInfo
                name={name}
                setName={setName}
                setRoleID={setRoleID}
              />
            </fieldset>

            <fieldset className="expense-formCustom">
              <ExpensePayment
                competence={competence}
                setCompetence={setCompetence}
                gross_value={gross_value}
                setGross_value={setGross_value}
                discount={discount}
                setDiscount={setDiscount}
                roleId={roleId}
                setInstallments={setInstallments}
                setPayment_type={setPayment_type}
                setStatus={setPayment_status}
                fees={fees}
                setFees={setFees}
                setRecurrent={setRecurrent}
              />
            </fieldset>

            <div className="expense-buttonPosition">
              <button
                onClick={() => {
                  createExpense();
                  setModalOpen(false);
                }}
                className="expense-saveButton"
                type="button"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
}

export default ExpenseForm;
