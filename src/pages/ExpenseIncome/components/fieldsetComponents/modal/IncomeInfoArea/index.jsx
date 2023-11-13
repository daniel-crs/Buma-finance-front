import "../../../../style/incomeForm.css";

import { FaMoneyCheck } from "react-icons/fa6";

function IncomeInfoArea() {
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
            <input type="text" id="name" className="income-clientFieldArea" />
          </div>

          <div className="income-standardElementArea">
            <label htmlFor="receita">Tipo da receita</label>
            <br />

            <select id="receita" name="receita" className="income-roleDropdwon">
              <option value="product">Produto</option>
              <option value="service">Service</option>
            </select>
          </div>
        </div>

        <div className="income-inputSpace">
          <div className="income-treeElementArea">
            <label htmlFor="cliente">Tipo do cliente</label>
            <br />
            <select id="cliente" name="cliente" className="income-roleDropdwon">
              <option value="fisico">Físico</option>
              <option value="jurico">Jurídico</option>
            </select>
          </div>

          <div className="income-treeElementArea">
            <label htmlFor="cliente">Cliente</label>
            <br />
            <select
              id="cliente"
              name="cliente"
              className="income-roleDropdwon"
            ></select>
          </div>

          <div className="income-treeElementArea">
            <label htmlFor="produto">Product</label>
            <br />

            <select
              id="produto"
              name="produto"
              className="income-roleDropdwon"
            ></select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeInfoArea;
