import "../../style/incomeForm.css";

import IncomeInfoArea from "../fieldsetComponents/modal/IncomeInfoArea";
import IncomePaymentArea from "../fieldsetComponents/modal/IncomePaymentArea";

import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function IncomeModal({ id, isOpen, setModalOpen, incomeDescription }) {
  const [description, setDescription] = useState(incomeDescription);

  const updateRevenue = () => {
    fetch(`http://localhost:8000/Revenue/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        product: 3,
        service: null,
        price: 3000,
        quantity: 10,
        discount: 0,
        payment_status: true,
        legalcustomer: 3,
        physicalcustomer: null,
        installments: 0,
        due_date: null,
        recurrent: true,
      }),
    }).then((response) => response.json());

    window.location.reload();
  };

  if (isOpen) {
    return (
      <div className="income-backgroundStyle">
        <div className="income-modalStyle">
          <div id="income-headerContainer">
            <div className="income-clientTypeTitle">
              <h3>Editar Receita</h3>
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
              <IncomeInfoArea
                description={description}
                setDescription={setDescription}
              />
            </fieldset>

            <fieldset className="income-formCustom">
              <IncomePaymentArea />
            </fieldset>

            <div className="income-buttonPosition">
              <button
                onClick={() => {
                  updateRevenue();
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

export default IncomeModal;
