import "../../style/incomeForm.css";

import { FaMoneyCheck } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

function IncomeModal({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="income-backgroundStyle">
        <div className="income-modalStyle">
          <div id="income-headerContainer">
            <div className="income-clientTypeTitle">
              <h3>Adicionar Receita</h3>
            </div>

            <div className="income-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="income-Container">
            <fieldset className="income-formCustom">
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
                      />
                    </div>

                    <div className="employee-standardElementArea">
                      <label htmlFor="receita">Tipo da receita</label>
                      <br />

                      <select
                        id="receita"
                        name="receita"
                        className="income-roleDropdwon"
                      >
                        <option value="1">Produto</option>
                      </select>
                    </div>
                  </div>

                  <div className="income-inputSpace">
                    <div className="employee-standardElementArea">
                      <label htmlFor="cliente">Cliente</label>
                      <br />

                      <select
                        id="cliente"
                        name="cliente"
                        className="income-roleDropdwon"
                      >
                        <option value="1">A definir</option>
                      </select>
                    </div>

                    <div className="employee-standardElementArea">
                      <label htmlFor="produto">Produto</label>
                      <br />

                      <select
                        id="produto"
                        name="produto"
                        className="income-roleDropdwon"
                      >
                        <option value="1">A definir</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="income-formCustom">
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
                        placeholder="Ex: 20"
                      />
                    </div>
                  </div>

                  <div className="income-inputSpace">
                    <div className="income-treeElementArea">
                      <label htmlFor="banco">Banco</label>
                      <br />

                      <select
                        id="banco"
                        name="banco"
                        className="income-roleDropdwon"
                      >
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
                      >
                        <option value="1">Unica</option>
                      </select>
                    </div>
                  </div>

                  <div className="income-inputSpace">
                    <div className="income-treeElementArea">
                      <label
                        className="income-spaceOnTop2"
                        htmlFor="vencimento"
                      >
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
                      <label
                        className="income-spaceOnTop2"
                        htmlFor="recorrente"
                      >
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

                      <select
                        id="parcela"
                        name="parcela"
                        className="income-roleDropdwon"
                      >
                        <option value="1">Pago</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* <fieldset className="income-formCustom">
              <div className="income-fornsContainer">
                <div className="income-formIcon">
                  <FaMoneyCheck />
                </div>

                <div className="income-inputscontainer">
                  <label htmlFor="mensagem">Descrição</label>
                  <br></br>
                  <textarea
                    id="mensagem"
                    className="income-fieldDescricaoLine"
                    placeholder="Descreva o produto..."
                  ></textarea>
                </div>
              </div>
            </fieldset> */}

            <div className="income-buttonPosition">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="income-saveButton"
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

export default IncomeModal;
