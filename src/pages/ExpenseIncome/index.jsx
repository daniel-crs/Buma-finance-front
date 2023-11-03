import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";

import { useState, useEffect } from "react";

function ExpenseIncome() {
  const [revenues, setRevenues] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/revenues")
      .then((res) => res.json())
      .then((revenues) => setRevenues(revenues));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/expanse")
      .then((res) => res.json())
      .then((expenses) => setExpenses(expenses));
  }, []);

  return (
    <div>
      <Header />
      <SideBar />

      <div id="inex-bodyContainer">
        <UpperBodyInformation
          pageTitle={"Receitas e despesas"}
          simpleButton={false}
        />

        <div className="inex-listBackground">
          <div className="inex-tableContainer">
            <table className="inex-listContainer">
              <TableHeader />

              {revenues.map((revenue, i) => (
                <TableData
                  key={i}
                  revenueId={revenue.id}
                  name={revenue.description}
                  installments={revenue.installments}
                  status={revenue.payment_status}
                  price={revenue.price}
                />
              ))}
              {expenses.map((expenses, i) => (
                <TableData
                  key={i}
                  expenseId={expenses.id}
                  name={expenses.name}
                  installments={expenses.installments}
                  price={expenses.gross_value}
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
