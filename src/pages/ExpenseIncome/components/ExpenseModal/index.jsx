import "../../style/expenseForm.css";
import ExpenseInfoArea from "../fieldsetComponents/modal/ExpenseInfoArea";
import ExpensePaymentArea from "../fieldsetComponents/modal/ExpensePaymentArea";

import { MdOutlineClose } from "react-icons/md";

function ExpenseModal({ id, isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="expense-backgroundStyle">
        <div className="expense-modalStyle">
          <div id="expense-headerContainer">
            <div className="expense-clientTypeTitle">
              <h3>Editar Despesa</h3>
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
              <ExpenseInfoArea />
            </fieldset>

            <fieldset className="expense-formCustom">
              <ExpensePaymentArea />
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

export default ExpenseModal;
