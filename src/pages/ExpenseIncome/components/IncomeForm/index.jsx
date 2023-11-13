import "../../style/incomeForm.css";
import IncomeInfo from "../fieldsetComponents/IncomeInfo";
import IncomePayment from "../fieldsetComponents/IncomePayment";

import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

function IncomeForm({ isOpen, setModalOpen }) {
  const url = "http://localhost:8000/revenues";
  const [description, setDescription] = useState("");
  const [product, setProductId] = useState(3);
  const [service, setServiceId] = useState(null);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");

  const createRevenue = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        product,
        service,
        price,
        quantity,
        discount,
        payment_status: true,
        legalcustomer: 3,
        physicalcustomer: null,
        installments: 0,
      }),
    }).then((res) => res.json());

    window.location.reload();
  };

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

          <form id="income-Container" onSubmit={createRevenue}>
            <fieldset className="income-formCustom">
              <IncomeInfo
                description={description}
                setDescription={setDescription}
                setProductId={setProductId}
                setServiceId={setServiceId}
              />
            </fieldset>

            <fieldset className="income-formCustom">
              <IncomePayment
                price={price}
                setPrice={setPrice}
                quantity={quantity}
                setQuantity={setQuantity}
                discount={discount}
                setDiscount={setDiscount}
                productId={product}
                serviceId={service}
              />
            </fieldset>

            <div className="income-buttonPosition">
              <button
                onClick={() => {
                  createRevenue();
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
