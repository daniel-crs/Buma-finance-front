import IncomeModal from "../../../ExpenseIncome/components/IncomeModal";

import { useState } from "react";

function RevenueListing({revenues}) {
    const [openModal, setOpenModal] = useState(false);

    return <>
        {revenues?.map((reve, i) => 
            <div className="day-element-income" onClick={() => setOpenModal(true)}>
                <p className="day-element-text">{reve.description}</p>
            
                <IncomeModal
                    key={i}
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