import "./style.css";

import { useEffect, useState } from "react";

function ProductModal({ product, isOpen, setModalOpen }) {
  const [name, setName] = useState("");
  const [sell_price, setSell_price] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/product/${product}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setSell_price(data.sell_price);
        setCode(data.code);
      });
  }, [product]);

  const updateUser = () => {
    console.log(JSON.stringify({ name, sell_price, code, productID: 7 }));
    fetch(`http://localhost:3000/product/${product}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, sell_price, code, productID: 7 }),
    }).then((response) => response.json());
  };

  if (isOpen) {
    return (
      <div className="backgroundStyle">
        <div className="modalStyle">
          <div>
            <h3 className="formTitle">Adicionar Produto</h3>
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
                    <option value="aplicativos">Component</option>
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
                onClick={() => {
                  updateUser();
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

export default ProductModal;
