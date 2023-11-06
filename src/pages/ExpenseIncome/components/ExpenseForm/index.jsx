import "../../style/expenseForm.css";
import ExpenseInfo from "../fieldsetComponents/ExpenseInfo";
import ExpensePayment from "../fieldsetComponents/ExpensePayment";

import { MdOutlineClose } from "react-icons/md";

function ExpenseForm({ isOpen, setModalOpen }) {
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
              <ExpenseInfo />
            </fieldset>

            <fieldset className="expense-formCustom">
              <ExpensePayment />
            </fieldset>

            <div className="expense-buttonPosition">
              <button
                onClick={() => {
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
