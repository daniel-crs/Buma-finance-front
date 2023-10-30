import "../../style/role.css";

import { MdOutlineClose } from "react-icons/md";

function RoleModal({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="role-backgroundStyle">
        <div className="role-modalStyle">
          <div id="role-headerContainer">
            <div className="role-clientTypeTitle">
              <h3>Editar Cargo</h3>
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

export default RoleModal;
