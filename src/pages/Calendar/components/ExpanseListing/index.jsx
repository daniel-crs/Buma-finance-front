import ExpenseModal from "../../../ExpenseIncome/components/ExpenseModal";

import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../../context/TimeContext";

function ExpanseListing({teste}) {
    const {year, month} = useContext(TimeContext);
    const [expanses, setExpanses] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/expanse")
          .then((res) => res.json())
          .then((expanses) => setExpanses(expanses));
    }, []);

    const areDateEqual = (year, month, day, date2) => {        
        date2 = date2.split("T"); 
        date2 = date2[0].split("-"); 

        if(date2[0] == year && date2[1] == month && date2[2] == day) {
            return true;
        } else {
            return false;
        }
    }

    return <>
        {expanses.filter((expanses) => areDateEqual(year, month + 1, teste, expanses.due_date)).map((expan) => 
            <div className="day-element-expanse" onClick={() => setOpenModal(true)}>
                <p className="day-element-text">{expan.name}</p>
            
            <ExpenseModal
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