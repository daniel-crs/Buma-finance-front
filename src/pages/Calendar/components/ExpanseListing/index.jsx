import ExpenseModal from "../../../ExpenseIncome/components/ExpenseModal";

import { useState } from "react";

function ExpanseListing({expanses}) {
    const [openModal, setOpenModal] = useState(false);

    return <>
        {expanses?.map((expan, i) => 
            <div className="day-element-expanse" onClick={() => setOpenModal(true)}>
                <p className="day-element-text">{expan.name}</p>
            
                <ExpenseModal
                    key={i}
                    id={expan.id}
                    isOpen={openModal}
                    setModalOpen={() => setOpenModal(!openModal)}
                    descriptionId={expan.name}
                    competenceId={expan.competence}
                    priceId={expan.gross_value}
                    discountId={expan.discount}
                    installmentsId={expan.installments}
                    payment_typeId={expan.payment_type}
                    payment_statusId={expan.payment_status}
                    recurrentId={expan.recurrent}
                    due_dateId={expan.due_date}
                    feesId={expan.fees}
                />
            </div>
        )}
    </>
}

export default ExpanseListing;