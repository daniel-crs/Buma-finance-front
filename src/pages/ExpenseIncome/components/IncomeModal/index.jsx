import "../../style/incomeForm.css";

import IncomeInfoArea from "../fieldsetComponents/modal/IncomeInfoArea";
import IncomePaymentArea from "../fieldsetComponents/modal/IncomePaymentArea";

import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";

function IncomeModal({
  id,
  isOpen,
  setModalOpen,
  incDescription,
  incProductId,
  incServiceId,
  priceId,
  quantityId,
  discountId,
  payment_statusId,
  legalcustomerId,
  physicalcustomerId,
  installmentsId,
  due_dateId,
  recurrentId,
}) {
  const [description, setDescription] = useState(incDescription);
  const [product, setProduct] = useState(incProductId);
  const [service, setService] = useState(incServiceId);
  const [price, setPrice] = useState(priceId);
  const [quantity, setQuantity] = useState(quantityId);
  const [discount, setDiscount] = useState(discountId);
  const [payment_status, setPayment_status] = useState(payment_statusId);
  const [legalcustomer, setLegalcustomer] = useState(legalcustomerId);
  const [physicalcustomer, setPhysicalcustomer] = useState(physicalcustomerId);
  const [installments, setInstallments] = useState(installmentsId);
  const [due_date, setDue_date] = useState(due_dateId);
  const [recurrent, setRecurrent] = useState(recurrentId);
  const [incomeOption, setIncomeOption] = useState("");
  const [clientOption, setClientOption] = useState("");

  const updateRevenue = () => {
    fetch(`http://localhost:8000/revenues/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        product,
        service,
        price,
        quantity,
        discount,
        payment_status,
        legalcustomer,
        physicalcustomer,
        installments,
        due_date,
        recurrent,
      }),
    }).then((response) => response.json());

    window.location.reload();
  };

  useEffect(() => {
    if (product === null && service === null) {
      setIncomeOption("outro");
    } else if (product === null) {
      setIncomeOption("service");
    } else {
      setIncomeOption("product");
    }
  }, [product, service]);

  useEffect(() => {
    if (physicalcustomerId === null) {
      setClientOption("jurico");
    } else {
      setClientOption("fisico");
    }
  }, [physicalcustomerId]);

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
                legalcustomerId={legalcustomer}
                setLegalcustomerId={setLegalcustomer}
                physicalcustomerId={physicalcustomer}
                setPhysicalcustomerId={setPhysicalcustomer}
                incomeOption={incomeOption}
                setIncomeOption={setIncomeOption}
                clientOption={clientOption}
                setClientOption={setClientOption}
              />
            </fieldset>

            <fieldset className="income-formCustom">
              <IncomePaymentArea
                priceId={price}
                setPriceId={setPrice}
                quantityId={quantity}
                setQuantityId={setQuantity}
                discountId={discount}
                setDiscountId={setDiscount}
                payment_statusId={payment_status}
                setPayment_statusId={setPayment_status}
                installmentsId={installments}
                setInstallmentsId={setInstallments}
                due_dateId={due_date}
                setDue_dateId={setDue_date}
                recurrentId={recurrent}
                setRecurrentId={setRecurrent}
              />
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
