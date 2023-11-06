import "../../style/incomeForm.css";
import IncomeInfo from "../fieldsetComponents/IncomeInfo";
import IncomePayment from "../fieldsetComponents/IncomePayment";

import { MdOutlineClose } from "react-icons/md";

function IncomeForm({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="income-backgroundStyle">
        <div className="income-modalStyle">
          <div id="income-headerContainer">
            <div className="income-clientTypeTitle">
              <h3>Adicionar Receita</h3>
            </div>

            <div className="income-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="income-Container">
            <fieldset className="income-formCustom">
              <IncomeInfo />
            </fieldset>

            <fieldset className="income-formCustom">
              <IncomePayment />
            </fieldset>

            <div className="income-buttonPosition">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="income-saveButton"
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

export default IncomeForm;
