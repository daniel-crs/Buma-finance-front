import "./style.css";

import { MdOutlineClose } from "react-icons/md";

function ModalStandard({ legal, isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <div className="backgroundStyle">
        <div className="modalStyle">
          <div id="headerContainer">
            <div className="clientTypeTitle">
              <h3>Editar Juridico</h3>
            </div>

            <div className="clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="Container">
            <fieldset className="formCustom">
              <div className="multipleFields">
                <div className="standardElementArea">
                  <label htmlFor="nome">Nome</label>
                  <br />
                  <input
                    type="text"
                    id="nome"
                    className="clientFieldArea"
                    placeholder="Ex: Lucas Silva"
                  />
                </div>

                <div className="standardElementArea">
                  <label htmlFor="empresa">Empresa</label>
                  <br />
                  <input
                    type="text"
                    id="empresa"
                    className="clientFieldArea"
                    placeholder="Ex: Magazine Luiza"
                  />
                </div>
              </div>

              <div className="multipleFields">
                <div className="clientEmailArea">
                  <label htmlFor="email">E-mail</label>
                  <br />
                  <input type="text" id="email" className="clientFieldArea" />
                </div>

                <div className="clientTelefoneArea">
                  <label htmlFor="telefone">Telefone</label>
                  <br />
                  <input
                    type="text"
                    id="telefone"
                    className="clientFieldArea"
                  />
                </div>
              </div>

              <div className="multipleFields">
                <div className="standardElementArea">
                  <label htmlFor="razaoSocial">Razão Social</label>
                  <br />
                  <input
                    type="text"
                    id="razaoSocial"
                    className="clientFieldArea"
                  />
                </div>

                <div className="standardElementArea">
                  <label htmlFor="cnpj">CNPJ</label>
                  <br />
                  <input type="text" id="cnpj" className="clientFieldArea" />
                </div>
              </div>

              <div className="clientEnderecoArea">
                <label htmlFor="endereco">Endereço</label>
                <br />
                <input type="text" id="endereco" className="clientFieldArea" />
              </div>
            </fieldset>

            <div className="buttonPosition">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
                className="saveButton"
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

export default ModalStandard;
