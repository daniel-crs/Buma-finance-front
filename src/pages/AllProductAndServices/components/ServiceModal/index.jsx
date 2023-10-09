import "./style.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { useEffect, useState } from "react";

function ServiceModal({ service, isOpen, setModalOpen }) {
  const [name, setName] = useState("");
  const [sell_price, setSell_price] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/service/${service}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setSell_price(data.sell_price);
        setCode(data.code);
      });
  }, [service]);

  const updateService = () => {
    fetch(`http://localhost:3000/service/${service}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, sell_price, code, serviceID: 1 }),
    }).then((res) => res.json());
  };

  if (isOpen) {
    return (
      <div className="backgroundStyle">
        <div className="modalStyle">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="spaceBetweenFields">
                <div className="twoElementsArea">
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
                      <input
                        className="elementsArea"
                        id="valor"
                        type="text"
                        value={sell_price}
                        onChange={(e) => setSell_price(e.target.value)}
                      />
                    </OverlayTrigger>
                  </div>
                </div>

                <div className="twoElementsArea">
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
                <input
                  className="fieldCodigoLine"
                  id="codigo"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
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
                onClick={() => {
                  updateService();
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

export default ServiceModal;
