import "../../style/role.css";

// import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function RoleForm({ isOpen, setModalOpen }) {
  // const url = "http://localhost:8000/roles";
  // const [name, setName] = useState("");
  // const [salary, setSalary] = useState("");

  // const createRole = () => {
  //   fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ name, salary }),
  //   }).then((res) => res.json());

  //   window.location.reload();
  // };

  if (isOpen) {
    return (
      <div className="role-backgroundStyle">
        <div className="role-modalStyle">
          <div id="role-headerContainer">
            <div className="role-clientTypeTitle">
              <h3>Adicionar Funcionario</h3>
            </div>

            <div className="role-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="role-Container">
            <fieldset className="role-formCustom">
              <div className="role-multipleFields">
                <div className="role-standardElementArea">
                  <label htmlFor="pagamento">Nome</label>
                  <br />
                  <input
                    type="text"
                    id="pagamento"
                    className="role-clientFieldArea"
                  />
                </div>
                <div className="role-standardElementArea">
                  <label htmlFor="valor">Valor</label>
                  <br></br>
                  <div className="valueContainer">
                    <p className="role-reiasValue">R$</p>
                    <input
                      id="valor"
                      type="text"
                      className="role-clientValueArea"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem">Descrição</label>
                <br></br>
                <textarea
                  id="mensagem"
                  className="role-fieldDescricaoLine"
                  placeholder="Descreva o produto..."
                ></textarea>
              </div>
            </fieldset>

            <div className="role-buttonPosition">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="role-saveButton"
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

export default RoleForm;
