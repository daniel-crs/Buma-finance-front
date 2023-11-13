import { useState } from "react";
import "../../../../style/expenseForm.css";

import { FaMoneyCheck } from "react-icons/fa6";

function ExpenseInfo({ name, setName }) {
  const [incomeOption, setIncomeOption] = useState("funcionario");

  return (
    <div>
      <div className="expense-fornsContainer">
        <div className="expense-formIcon">
          <FaMoneyCheck />
        </div>

        <div className="expense-inputscontainer">
          <div className="expense-inputSpace">
            <div className="expense-standardElementArea">
              <label htmlFor="name">Nome</label>
              <br />
              <input
                type="text"
                id="name"
                className="expense-clientFieldArea"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="employee-standardElementArea">
              <label htmlFor="despesa">Tipo da despesa</label>
              <br />

              <select
                id="despesa"
                name="despesa"
                className="expense-roleDropdwon"
                onChange={(e) => setIncomeOption(e.target.value)}
              >
                <option value="funcionario">Funcionarios</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          {incomeOption === "funcionario" ? (
            <div className="expense-inputSpace">
              <div className="employee-standardElementArea">
                <label htmlFor="cliente">Cargo</label>
                <br />

                <select
                  id="cliente"
                  name="cliente"
                  className="expense-roleDropdwon"
                >
                  <option value="1">A definir</option>
                </select>
              </div>
            </div>
          ) : (
            <div>{undefined}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseInfo;
