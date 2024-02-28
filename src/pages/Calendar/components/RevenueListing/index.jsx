import IncomeModal from "../../../ExpenseIncome/components/IncomeModal";

import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../../../../context/TimeContext";

function RevenueListing({teste}) {
    const {year, month} = useContext(TimeContext);
    const [revenues, setRevenues] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/revenues")
          .then((res) => res.json())
          .then((revenues) => setRevenues(revenues));
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
        {revenues.filter((revenues) => areDateEqual(year, month + 1, teste, revenues.due_date)).map((reve) => 
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