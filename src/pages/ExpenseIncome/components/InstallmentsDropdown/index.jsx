import { useEffect, useState } from "react";
import "../../style.css";

function InstallmentsDropwn({revenueId, expenseId, identify}) {
    const [data, setData] = useState();

    useEffect(() => {
        let url;

        if(identify === "revenue") {
            url = `http://localhost:8000/revenues/${revenueId}`;
        } else {
            url = `http://localhost:8000/expanse/${expenseId}`;
        }

        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [identify, revenueId, expenseId]);

    return (
        <div className="dropdown-content">
            <p className="dropdown-title">Todas as parcelas</p>
            {data?.installments?.map((instal, i) => (
            <div className="dropdown-installment-container">
                <div style={{ borderLeft: "10px solid #E61818" }} className="dropdown-installment">
                <p className="dropdown-installment-item">{instal.status}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default InstallmentsDropwn;