import "./style.css";

import Modal from "react-bootstrap/Modal";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function ServiceForm(showModal) {
  return (
    <>
      <Modal {...showModal} size="lg" centered>
        <Modal.Body>
          <div>
            <h3 className="formTitle">Adicionar Serviços</h3>
          </div>

          <form>
            <fieldset className="formContainer">
              <div>
                <label htmlFor="title">Nome</label>
                <br></br>
                <input
                  className="fieldNameLine"
                  id="title"
                  type="text"
                  placeholder="Ex: Desenvolvimento de aplicativo mobile."
                />
              </div>

              <div className="spaceBetweenFields">
                <div>
                  <label className="spaceOnTop" htmlFor="valor">
                    Valor
                  </label>
                  <br></br>
                  <div className="valueContainer">
                    <p className="reiasValue">R$</p>
                    <OverlayTrigger
                      overlay={
                        <Tooltip>
                          Caso o serviço não tenha valor definido, deixar em
                          branco para constar como "A negociar".
                        </Tooltip>
                      }
                    >
                      <input className="elementsArea" id="valor" type="text" />
                    </OverlayTrigger>
                  </div>
                </div>

                <div>
                  <label className="spaceOnTop" htmlFor="categoria">
                    Categoria
                  </label>
                  <br></br>
                  <select id="categoria" className="dropdowCustom">
                    <option value="site">Design</option>
                    <option value="aplicativos">Software</option>
                    <option value="software">
                      Arquitetura de computadores
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="codigo">Código de identificação</label>
                <br></br>
                <input className="fieldCodigoLine" id="codigo" type="text" />
              </div>

              <div>
                <label className="spaceOnTop" htmlFor="mensagem">
                  Descrição
                </label>
                <br></br>
                <textarea
                  id="mensagem"
                  className="fieldDescricaoLine"
                  placeholder="Descreva o produto..."
                ></textarea>
              </div>
            </fieldset>

            <div className="buttonPosition">
              <button
                className="saveButton"
                type="button"
                onClick={showModal.onHide}
              >
                Salvar
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServiceForm;
