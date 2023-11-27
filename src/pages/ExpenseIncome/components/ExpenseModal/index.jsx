import { useState } from "react";
import "../../style/expenseForm.css";
import ExpenseInfoArea from "../fieldsetComponents/modal/ExpenseInfoArea";
import ExpensePaymentArea from "../fieldsetComponents/modal/ExpensePaymentArea";

import { MdOutlineClose } from "react-icons/md";

function ExpenseModal({
  id,
  isOpen,
  setModalOpen,
  descriptionId,
  competenceId,
  priceId,
  discountId,
  installmentsId,
  payment_typeId,
  payment_statusId,
  recurrentId,
  feesId,
}) {
  const [name, setName] = useState(descriptionId);
  const [competence, setCompetence] = useState(competenceId);
  const [gross_value, setGross_value] = useState(priceId);
  const [discount, setDiscount] = useState(discountId);
  const [installments, setInstallments] = useState(installmentsId);
  const [payment_type, setPayment_type] = useState(payment_typeId);
  const [payment_status, setPayment_status] = useState(payment_statusId);
  const [fees, setFees] = useState(feesId);
  const [recurrent, setRecurrent] = useState(recurrentId);

  const updateExpense = () => {
    fetch(`http://localhost:8000/expanse/${id}`, {
      method: "PUT",
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
    }).then((response) => response.json());

    window.location.reload();
  };

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
              <ExpenseInfoArea
                descriptionId={name}
                setDescriptionId={setName}
              />
            </fieldset>

            <fieldset className="expense-formCustom">
              <ExpensePaymentArea
                competenceId={competence}
                setCompetenceId={setCompetence}
                priceId={gross_value}
                setPriceId={setGross_value}
                discountId={discount}
                setDiscountId={setDiscount}
                installmentsId={installments}
                setInstallmentsId={setInstallments}
                payment_typeId={payment_type}
                setPayment_typeId={setPayment_type}
                payment_statusId={payment_status}
                setPayment_statusId={setPayment_status}
                feesId={fees}
                setFeesId={setFees}
                recurrentId={recurrent}
                setRecurrentId={setRecurrent}
              />
            </fieldset>

            <div className="expense-buttonPosition">
              <button
                onClick={() => {
                  updateExpense();
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
