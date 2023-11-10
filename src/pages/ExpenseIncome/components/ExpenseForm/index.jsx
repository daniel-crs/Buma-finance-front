import { useState } from "react";
import "../../style/expenseForm.css";
import ExpenseInfo from "../fieldsetComponents/ExpenseInfo";
import ExpensePayment from "../fieldsetComponents/ExpensePayment";

import { MdOutlineClose } from "react-icons/md";

function ExpenseForm({ isOpen, setModalOpen }) {
  const url = "http://localhost:8000/expanse";
  const [name, setName] = useState([]);

  const createExpense = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        competence: null,
        gross_value: null,
        discount: null,
        installments: 3,
        payment_type: null,
        fees: null,
        bank_account: null,
        recurrent: true,
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
              <ExpenseInfo name={name} setName={setName} />
            </fieldset>

            <fieldset className="expense-formCustom">
              <ExpensePayment />
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
