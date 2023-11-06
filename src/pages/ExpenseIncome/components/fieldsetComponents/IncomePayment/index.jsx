import "../../../style/incomeForm.css";

import { FaMoneyBills } from "react-icons/fa6";

function IncomePayment() {
  return (
    <div className="income-fornsContainer">
      <div className="income-formIcon">
        <FaMoneyBills />
      </div>

      <div className="income-inputscontainer">
        <div className="income-inputSpace">
          <div className="income-treeElementArea">
            <label className="income-spaceOnTop" htmlFor="valor">
              Valor
            </label>
            <br></br>
            <div className="income-valueContainer">
              <p className="income-reiasValue">R$</p>
              <input id="valor" type="text" className="income-valueArea" />
            </div>
          </div>

          <div className="income-treeElementArea">
            <label className="income-spaceOnTop" htmlFor="desconto">
              Desconto
            </label>
            <br></br>
            <div className="income-valueContainer">
              <p className="income-reiasValue">R$</p>
              <input id="desconto" type="text" className="income-valueArea" />
            </div>
          </div>

          <div className="income-treeElementArea">
            <label htmlFor="quantidade">Quantidade</label>
            <br />
            <input
              type="text"
              id="quantidade"
              className="income-clientFieldArea"
              placeholder="Ex: 20"
            />
          </div>
        </div>

        <div className="income-inputSpace">
          <div className="income-treeElementArea">
            <label htmlFor="banco">Banco</label>
            <br />

            <select id="banco" name="banco" className="income-roleDropdwon">
              <option value="1">0001/00000-1</option>
            </select>
          </div>

          <div className="income-treeElementArea">
            <label htmlFor="pagamento">Pagamento</label>
            <br />

            <select
              id="pagamento"
              name="pagamento"
              className="income-roleDropdwon"
            >
              <option value="1">Debito</option>
            </select>
          </div>

          <div className="income-treeElementArea">
            <label htmlFor="parcela">Parcela</label>
            <br />

            <select id="parcela" name="parcela" className="income-roleDropdwon">
              <option value="1">Unica</option>
            </select>
          </div>
        </div>

        <div className="income-inputSpace">
          <div className="income-treeElementArea">
            <label className="income-spaceOnTop2" htmlFor="vencimento">
              Primeiro vencimento
            </label>
            <br />
            <input
              type="text"
              id="vencimento"
              className="income-clientFieldArea"
              placeholder="dd/mm/aaaa"
            />
          </div>

          <div className="income-treeElementArea">
            <label className="income-spaceOnTop2" htmlFor="recorrente">
              Recorrente
            </label>
            <br />

            <select
              id="recorrente"
              name="recorrente"
              className="income-roleDropdwon"
            >
              <option value="1">Sim</option>
            </select>
          </div>

          <div className="income-treeElementArea">
            <label className="income-spaceOnTop2" htmlFor="parcela">
              Status
            </label>
            <br />

            <select id="parcela" name="parcela" className="income-roleDropdwon">
              <option value="1">Pago</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomePayment;