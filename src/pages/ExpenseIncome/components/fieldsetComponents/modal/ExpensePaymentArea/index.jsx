import "../../../../style/expenseForm.css";

import { FaMoneyBills } from "react-icons/fa6";

function ExpensePaymentArea({
  competenceId,
  setCompetenceId,
  priceId,
  setPriceId,
  discountId,
  setDiscountId,
  installmentsId,
  setInstallmentsId,
  payment_typeId,
  setPayment_typeId,
  payment_statusId,
  setPayment_statusId,
  due_dateId,
  setDue_dateId,
  feesId,
  setFeesId,
  recurrentId,
  setRecurrentId,
}) {
  return (
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
                value={priceId}
                onChange={(e) => setPriceId(e.target.value)}
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
              value={due_dateId}
              onChange={(e) => setDue_dateId(e.target.value)}
            />
          </div>

          <div className="expense-treeElementArea">
            <label htmlFor="quantidade">Juro</label>
            <br />
            <input
              type="text"
              id="quantidade"
              className="expense-clientFieldArea"
              value={feesId}
              onChange={(e) => setFeesId(e.target.value)}
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
              value={payment_typeId}
              onChange={(e) => setPayment_typeId(e.target.value)}
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
              value={discountId}
              onChange={(e) => setDiscountId(e.target.value)}
            />
          </div>

          <div className="expense-fourElementArea">
            <label htmlFor="parcela">Parcela</label>
            <br />

            <select
              id="parcela"
              name="parcela"
              className="expense-roleDropdwon"
              value={installmentsId}
              onChange={(e) => setInstallmentsId(e.target.value)}
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
              value={competenceId}
              onChange={(e) => setCompetenceId(e.target.value)}
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
              value={recurrentId}
              onChange={(e) => setRecurrentId(e.target.value)}
            >
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
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
              value={payment_statusId}
              onChange={(e) => setPayment_statusId(e.target.value)}
            >
              <option value={true}>Pago</option>
              <option value={false}>Aberto</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpensePaymentArea;
