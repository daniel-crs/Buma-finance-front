import "../../style/incomeForm.css";

import IncomeInfoArea from "../fieldsetComponents/modal/IncomeInfoArea";
import IncomePaymentArea from "../fieldsetComponents/modal/IncomePaymentArea";

import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function IncomeModal({
  id,
  isOpen,
  setModalOpen,
  incDescription,
  incProductId,
  incServiceId,
}) {
  const [description, setDescription] = useState(incDescription);
  const [product, setProduct] = useState(incProductId);
  const [service, setService] = useState(incServiceId);

  const updateRevenue = () => {
    fetch(`http://localhost:8000/revenues/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        product,
        service,
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

    console.log("product", product);

    console.log(
      JSON.stringify({
        description,
        product,
        service,
        price: 3000,
        quantity: 10,
        discount: 0,
        payment_status: true,
        legalcustomer: 3,
        physicalcustomer: null,
        installments: 0,
        due_date: null,
        recurrent: true,
      })
    );
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
                incProductId={product}
                incSetProduct={setProduct}
                incServiceId={service}
                incSetService={setService}
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
