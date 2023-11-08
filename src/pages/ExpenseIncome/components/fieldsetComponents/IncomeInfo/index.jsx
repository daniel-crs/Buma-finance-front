import { useEffect, useState } from "react";
import "../../../style/incomeForm.css";

import { FaMoneyCheck } from "react-icons/fa6";

function IncomeInfo({ description, setDescription }) {
  const [incomeOption, setIncomeOption] = useState("product");
  const [legal, setLegal] = useState([]);
  const [physical, setPhysical] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/legalcustomer")
      .then((res) => res.json())
      .then((legal) => setLegal(legal));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/physicalcustomer")
      .then((res) => res.json())
      .then((physical) => setPhysical(physical));
  }, []);

  return (
    <div className="income-fornsContainer">
      <div className="income-formIcon">
        <FaMoneyCheck />
      </div>

      <div className="income-inputscontainer">
        <div className="income-inputSpace">
          <div className="income-standardElementArea">
            <label htmlFor="name">Nome</label>
            <br />
            <input
              type="text"
              id="name"
              className="income-clientFieldArea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="employee-standardElementArea">
            <label htmlFor="receita">Tipo da receita</label>
            <br />

            <select
              id="receita"
              name="receita"
              className="income-roleDropdwon"
              onChange={(e) => setIncomeOption(e.target.value)}
            >
              <option value="product">Produto</option>
              <option value="service">Service</option>
            </select>
          </div>
        </div>

        <div className="income-inputSpace">
          <div className="employee-standardElementArea">
            <label htmlFor="cliente">Cliente</label>
            <br />

            <select id="cliente" name="cliente" className="income-roleDropdwon">
              {legal.map((LegalCustomers) => (
                <option value="1">{LegalCustomers.name}</option>
              ))}
              {physical.map((PhysicalCustomers) => (
                <option value="1">{PhysicalCustomers.name}</option>
              ))}
            </select>
          </div>

          {incomeOption === "product" ? (
            <div className="employee-standardElementArea">
              <label htmlFor="produto">Product</label>
              <br />

              <select
                id="produto"
                name="produto"
                className="income-roleDropdwon"
              >
                <option value="1">A definir</option>
              </select>
            </div>
          ) : (
            <div className="employee-standardElementArea">
              <label htmlFor="produto">Service</label>
              <br />

              <select
                id="produto"
                name="produto"
                className="income-roleDropdwon"
              >
                <option value="1">A definir</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IncomeInfo;
