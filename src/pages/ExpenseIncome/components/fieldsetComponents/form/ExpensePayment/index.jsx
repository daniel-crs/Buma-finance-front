import "../../../../style/expenseForm.css";

import { FaMoneyBills } from "react-icons/fa6";

function ExpensePayment({
  competence,
  setCompetence,
  gross_value,
  setGross_value,
  discount,
  setDiscount,
  setInstallments,
  setPayment_type,
  setStatus,
  fees,
  setFees,
  setRecurrent,
}) {
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
                <input
                  id="valor"
                  type="text"
                  className="expense-valueArea"
                  value={gross_value}
                  onChange={(e) => setGross_value(e.target.value)}
                />
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
                value={fees}
                onChange={(e) => setFees(e.target.value)}
              />
            </div>
          </div>

          <div className="expense-inputSpace">
            <div className="expense-fourElementArea">
              <label htmlFor="banco">Banco</label>
              <br />

              <select id="banco" name="banco" className="expense-roleDropdwon">
                <option value="1">0001/00000-1</option>
              </select>
            </div>

            <div className="expense-fourElementArea">
              <label htmlFor="pagamento">Pagamento</label>
              <br />

              <select
                id="pagamento"
                name="pagamento"
                className="expense-roleDropdwon"
                onChange={(e) => setPayment_type(e.target.value)}
              >
                <option value="Debito">Debito</option>
                <option value="Credito">Credito</option>
                <option value="Pix">Pix</option>
              </select>
            </div>

            <div className="expense-fourElementArea">
              <label htmlFor="quantidade">Desconto</label>
              <br />
              <input
                type="text"
                id="quantidade"
                className="expense-clientFieldArea"
                placeholder="Ex: 5%"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>

            <div className="expense-fourElementArea">
              <label htmlFor="parcela">Parcela</label>
              <br />

              <select
                id="parcela"
                name="parcela"
                className="expense-roleDropdwon"
                onChange={(e) => setInstallments(e.target.value)}
              >
                <option value={0}>Unica</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
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
                value={competence}
                onChange={(e) => setCompetence(e.target.value)}
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
                onChange={(e) => setRecurrent(e.target.value)}
              >
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </select>
            </div>

            <div className="expense-treeElementArea">
              <label className="expense-spaceOnTop2" htmlFor="status">
                Status
              </label>
              <br />

              <select
                id="status"
                name="status"
                className="expense-roleDropdwon"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={"paid"}>Pago</option>
                <option value={"open"}>Aberto</option>
                <option value={"overdue"}>Atrasado</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensePayment;
