import "../../../style/expenseForm.css";

import { FaMoneyCheck } from "react-icons/fa6";

function ExpenseInfo() {
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
              />
            </div>

            <div className="employee-standardElementArea">
              <label htmlFor="receita">Tipo da receita</label>
              <br />

              <select
                id="receita"
                name="receita"
                className="expense-roleDropdwon"
              >
                <option value="product">Produto</option>
                <option value="service">Serviço</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="expense-inputSpace">
            <div className="employee-standardElementArea">
              <label htmlFor="cliente">Cliente</label>
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
        </div>
      </div>
    </div>
  );
}

export default ExpenseInfo;
