import IncomeModal from "../../../ExpenseIncome/components/IncomeModal";

import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../../context/TimeContext";

function RevenueListing() {
    const {year, month} = useContext(TimeContext);
    const [result, setResult] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    
    useEffect(() => {
        fetch("http://localhost:8000/listing", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"date": `${year}-${(month + 1).toString().padStart(2, '0')}`}),
          })
          .then((res) => res.json())
          .then((list) => setResult(list));
    }, []);

    return <>
        {result?.revenues?.map((reve) => 
            <div className="day-element-income" onClick={() => setOpenModal(true)}>
                <p className="day-element-text">{reve.description}</p>
            
                <IncomeModal 
                    id={reve.id}
                    isOpen={openModal}
                    setModalOpen={() => setOpenModal(!openModal)}
                    incDescription={reve.description}
                    incProductId={reve.product}
                    incServiceId={reve.service}
                    priceId={reve.price}
                    quantityId={reve.quantity}
                    discountId={reve.discount}
                    payment_statusId={reve.payment_status}
                    legalcustomerId={reve.legalcustomer}
                    physicalcustomerId={reve.physicalcustomer}
                    installmentsId={reve.installments}
                    due_dateId={reve.due_date}
                    recurrentId={reve.recurrent}
                />
            </div>
        )}
    </>
}

export default RevenueListing;