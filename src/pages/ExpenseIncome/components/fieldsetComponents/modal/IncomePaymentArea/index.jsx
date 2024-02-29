import "../../../../style/incomeForm.css";

import { FaMoneyBills } from "react-icons/fa6";

function IncomePaymentArea({
  priceId,
  setPriceId,
  quantityId,
  setQuantityId,
  discountId,
  setDiscountId,
  payment_statusId,
  setPayment_statusId,
  installmentsId,
  setInstallmentsId,
  due_dateId,
  setDue_dateId,
  recurrentId,
  setRecurrentId,
}) {
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
              <input
                id="valor"
                type="text"
                className="income-valueArea"
                value={priceId}
                onChange={(e) => setPriceId(e.target.value)}
              />
            </div>
          </div>

          <div className="income-treeElementArea">
            <label className="income-spaceOnTop" htmlFor="desconto">
              Desconto
            </label>
            <br></br>
            <div className="income-valueContainer">
              <p className="income-reiasValue">R$</p>
              <input
                id="desconto"
                type="text"
                className="income-valueArea"
                value={discountId}
                onChange={(e) => setDiscountId(e.target.value)}
              />
            </div>
          </div>

          <div className="income-treeElementArea">
            <label htmlFor="quantidade">Quantidade</label>
            <br />
            <input
              type="text"
              id="quantidade"
              className="income-clientFieldArea"
              value={quantityId}
              onChange={(e) => setQuantityId(e.target.value)}
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

            <select
              id="parcela"
              name="parcela"
              className="income-roleDropdwon"
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
              placeholder="aaaa/mm/dd"
              value={due_dateId}
              onChange={(e) => setDue_dateId(e.target.value)}
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
              value={recurrentId}
              onChange={(e) => setRecurrentId(e.target.value)}
            >
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </div>

          <div className="income-treeElementArea">
            <label className="income-spaceOnTop2" htmlFor="parcela">
              Status
            </label>
            <br />

            <select
              id="parcela"
              name="parcela"
              className="income-roleDropdwon"
              value={payment_statusId}
              onChange={(e) => {
                setPayment_statusId(e.target.value);
              }}
            >
              <option value={"paid"}>Pago</option>
              <option value={"open"}>Aberto</option>
              <option value={"overdue"}>Atrasado</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomePaymentArea;
