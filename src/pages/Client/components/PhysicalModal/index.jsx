import "./style.css";

import { MdOutlineClose } from "react-icons/md";

function PhysicalModal({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="physicalClient-backgroundStyle">
        <div className="physicalClient-modalStyle">
          <div id="physicalClient-headerContainer">
            <div className="physicalClient-clientTypeTitle">
              <h3>Editar Pessoa Física</h3>
            </div>

            <div className="physicalClient-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="physicalClient-Container">
            <fieldset className="physicalClient-formCustom">
              <div className="physicalClient-multipleFields">
                <div className="physicalClient-standardElementArea">
                  <label htmlFor="nome">Nome</label>
                  <br />
                  <input
                    type="text"
                    id="nome"
                    className="clientFieldArea"
                    placeholder="Ex: Lucas Silva"
                  />
                </div>

                <div className="physicalClient-standardElementArea">
                  <label htmlFor="empresa">Empresa</label>
                  <br />
                  <input
                    type="text"
                    id="empresa"
                    className="physicalClient-clientFieldArea"
                    placeholder="Ex: Magazine Luiza"
                  />
                </div>
              </div>

              <div className="physicalClient-clientEmailArea">
                <label htmlFor="email">E-mail</label>
                <br />
                <input
                  type="text"
                  id="email"
                  className="physicalClient-clientFieldArea"
                />
              </div>

              <div className="physicalClient-multipleFields">
                <div className="physicalClient-standardElementArea">
                  <label htmlFor="Telefone">Telefone</label>
                  <br />
                  <input
                    type="text"
                    id="Telefone"
                    className="physicalClient-clientFieldArea"
                  />
                </div>

                <div className="physicalClient-standardElementArea">
                  <label htmlFor="cnpj">CPF</label>
                  <br />
                  <input
                    type="text"
                    id="cnpj"
                    className="physicalClient-clientFieldArea"
                  />
                </div>
              </div>

              <div className="physicalClient-clientEnderecoArea">
                <label htmlFor="endereco">Endereço</label>
                <br />
                <input
                  type="text"
                  id="endereco"
                  className="physicalClient-clientFieldArea"
                />
              </div>
            </fieldset>

            <div className="physicalClient-buttonPosition">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="physicalClient-saveButton"
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

export default PhysicalModal;
