import "./style.css";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ProductForm(showModal) {
  const url = "http://localhost:3000/product";
  const [name, setName] = useState("");
  const [sell_price, setSell_price] = useState("");
  const [code, setCode] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify({ name, sell_price, code, productID: 7 }));

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, sell_price, code, productID: 7 }),
    }).then((res) => res.json());
  };

  return (
    <>
      <Modal {...showModal} size="lg" centered>
        <Modal.Body>
          <div>
            <h3 className="formTitle">Adicionar Produto</h3>
          </div>

          <form onSubmit={HandleSubmit}>
            <fieldset className="formContainer">
              <div>
                <label htmlFor="title">Nome</label>
                <br></br>
                <input
                  className="fieldNameLine"
                  id="title"
                  type="text"
                  placeholder="Ex: Placa de video Geforce RTX 3060"
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
                    <input
                      className="elementsArea"
                      id="valor"
                      type="text"
                      value={sell_price}
                      onChange={(e) => setSell_price(e.target.value)}
                    />
                  </div>
                </div>

                <div className="twoElementsArea">
                  <label className="spaceOnTop" htmlFor="categoria">
                    Categoria
                  </label>
                  <br></br>
                  <select id="categoria" className="dropdowCustom">
                    <option value="site">Celular</option>
                    <option value="aplicativos">Component de PC</option>
                    <option value="software">Decoração</option>
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
                className="saveButton"
                type="button"
                onClick={HandleSubmit}
              >
                Salvar
              </button>
              <button
                className="saveButton"
                type="button"
                onClick={showModal.onHide}
              >
                sair
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductForm;
