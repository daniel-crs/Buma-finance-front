import "../../style/expenseForm.css";

import { FaMoneyCheck } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

function ExpenseForm({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="expense-backgroundStyle">
        <div className="expense-modalStyle">
          <div id="expense-headerContainer">
            <div className="expense-clientTypeTitle">
              <h3>Adicionar Despesa</h3>
            </div>

            <div className="expense-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="expense-Container">
            <fieldset className="expense-formCustom">
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
                        <option value="1">Produto</option>
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
            </fieldset>

            <fieldset className="expense-formCustom">
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
                        placeholder="Ex: 20"
                      />
                    </div>

                    <div className="expense-treeElementArea">
                      <label htmlFor="quantidade">Quantidade</label>
                      <br />
                      <input
                        type="text"
                        id="quantidade"
                        className="expense-clientFieldArea"
                        placeholder="dd/mm/aaaa"
                      />
                    </div>
                  </div>

                  <div className="expense-inputSpace">
                    <div className="expense-treeElementArea">
                      <label htmlFor="banco">Banco</label>
                      <br />

                      <select
                        id="banco"
                        name="banco"
                        className="expense-roleDropdwon"
                      >
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
                      <label
                        className="expense-spaceOnTop2"
                        htmlFor="competencia"
                      >
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
                      <label
                        className="expense-spaceOnTop2"
                        htmlFor="recorrente"
                      >
                        Recorrente
                      </label>
                      <br />

                      <select
                        id="recorrente"
                        name="recorrente"
                        className="expense-roleDropdwon"
                      >
                        <option value="1">Sim</option>
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
            </fieldset>

            {/* <fieldset className="expense-formCustom">
              <div className="expense-fornsContainer">
                <div className="expense-formIcon">
                  <FaMoneyCheck />
                </div>

                <div className="expense-inputscontainer">
                  <label htmlFor="mensagem">Descrição</label>
                  <br></br>
                  <textarea
                    id="mensagem"
                    className="expense-fieldDescricaoLine"
                    placeholder="Descreva o produto..."
                  ></textarea>
                </div>
              </div>
            </fieldset> */}

            <div className="expense-buttonPosition">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="expense-saveButton"
                type="button"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
}

export default ExpenseForm;
