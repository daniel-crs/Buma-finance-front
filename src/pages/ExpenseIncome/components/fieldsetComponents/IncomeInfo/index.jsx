import "../../../style/incomeForm.css";

import { FaMoneyCheck } from "react-icons/fa6";

function IncomeInfo({ description, setDescription }) {
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

            <select id="receita" name="receita" className="income-roleDropdwon">
              <option value="1">Produto</option>
            </select>
          </div>
        </div>

        <div className="income-inputSpace">
          <div className="employee-standardElementArea">
            <label htmlFor="cliente">Cliente</label>
            <br />

            <select id="cliente" name="cliente" className="income-roleDropdwon">
              <option value="1">A definir</option>
            </select>
          </div>

          <div className="employee-standardElementArea">
            <label htmlFor="produto">Produto</label>
            <br />

            <select id="produto" name="produto" className="income-roleDropdwon">
              <option value="1">A definir</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeInfo;
