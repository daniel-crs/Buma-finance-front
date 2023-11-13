import "../../../../style/expenseForm.css";

import { FaMoneyBills } from "react-icons/fa6";

function ExpensePayment() {
  return (
    <div>
      <div className="expense-fornsContainer">
        <div className="expense-formIcon">
          <FaMoneyBills />
        </div>

        <div className="expense-inputscontainer">
          <div className="expense-inputSpace">
            <div className="expense-treeElementArea">
              <label className="expense-spaceOnTop" htmlFor="valor">
                Valor
              </label>
              <br></br>
              <div className="expense-valueContainer">
                <p className="expense-reiasValue">R$</p>
                <input id="valor" type="text" className="expense-valueArea" />
              </div>
            </div>

            <div className="expense-treeElementArea">
              <label htmlFor="vencimento">Primeiro Vencimento</label>
              <br />
              <input
                type="text"
                id="vencimento"
                className="expense-clientFieldArea"
                placeholder="dd/mm/aaaa"
              />
            </div>

            <div className="expense-treeElementArea">
              <label htmlFor="quantidade">Juro</label>
              <br />
              <input
                type="text"
                id="quantidade"
                className="expense-clientFieldArea"
                placeholder="Ex: 5%"
              />
            </div>
          </div>

          <div className="expense-inputSpace">
            <div className="expense-treeElementArea">
              <label htmlFor="banco">Banco</label>
              <br />

              <select id="banco" name="banco" className="expense-roleDropdwon">
                <option value="1">0001/00000-1</option>
              </select>
            </div>

            <div className="expense-treeElementArea">
              <label htmlFor="pagamento">Pagamento</label>
              <br />

              <select
                id="pagamento"
                name="pagamento"
                className="expense-roleDropdwon"
              >
                <option value="1">Debito</option>
              </select>
            </div>

            <div className="expense-treeElementArea">
              <label htmlFor="parcela">Parcela</label>
              <br />

              <select
                id="parcela"
                name="parcela"
                className="expense-roleDropdwon"
              >
                <option value="1">Unica</option>
              </select>
            </div>
          </div>

          <div className="expense-inputSpace">
            <div className="expense-treeElementArea">
              <label className="expense-spaceOnTop2" htmlFor="competencia">
                Competência
              </label>
              <br />
              <input
                type="text"
                id="competencia"
                className="expense-clientFieldArea"
              />
            </div>

            <div className="expense-treeElementArea">
              <label className="expense-spaceOnTop2" htmlFor="recorrente">
                Recorrente
              </label>
              <br />

              <select
                id="recorrente"
                name="recorrente"
                className="expense-roleDropdwon"
              >
                <option value="1">Sim</option>
                <option value="2">nao</option>
              </select>
            </div>

            <div className="expense-treeElementArea">
              <label className="expense-spaceOnTop2" htmlFor="parcela">
                Status
              </label>
              <br />

              <select
                id="parcela"
                name="parcela"
                className="expense-roleDropdwon"
              >
                <option value="1">Pago</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensePayment;
