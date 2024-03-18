import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";

import { useState, useEffect } from "react";
import { FilterValueProvider } from "../../context/FilterValueContext";

function ExpenseIncome() {
  const [revenues, setRevenues] = useState([]);
  const [expanses, setExpanses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/revenues")
      .then((res) => res.json())
      .then((revenues) => setRevenues(revenues));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/expanse")
      .then((res) => res.json())
      .then((expanses) => setExpanses(expanses));
  }, []);

  return (
    <div>
      <Header />
      <SideBar />

      <div id="inex-bodyContainer">
      <FilterValueProvider>
        <UpperBodyInformation
          pageTitle={"Receitas e despesas"}
          showMonth={false}
          simpleButton={false}
        />
      </FilterValueProvider>

        <div className="inex-listBackground">
          <div className="inex-tableContainer">
            <table className="inex-listContainer">
              <TableHeader />

              {revenues.map((revenue, i) => (
                <TableData
                  key={i}
                  revenueId={revenue.id}
                  description={revenue.description}
                  productId={revenue.product}
                  serviceId={revenue.service}
                  price={revenue.price}
                  quantity={revenue.quantity}
                  discount={revenue.discount}
                  payment_status={revenue.payment_status}
                  legalcustomerId={revenue.legalcustomer}
                  physicalcustomerId={revenue.physicalcustomer}
                  installments={revenue.installments}
                  due_date={revenue.due_date}
                  recurrent={revenue.recurrent}
                  identify={"revenue"}
                />
              ))}
              {expanses.map((expanse, i) => (
                <TableData
                  key={i}
                  expenseId={expanse.id}
                  description={expanse.name}
                  competence={expanse.competence}
                  price={expanse.gross_value}
                  discount={expanse.discount}
                  installments={expanse.installments}
                  payment_type={expanse.payment_type}
                  payment_status={expanse.payment_status}
                  due_date={expanse.due_date}
                  fees={expanse.fees}
                  recurrent={expanse.recurrent}
                  identify={"expanse"}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseIncome;
