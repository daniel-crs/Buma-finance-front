import "./style.css";

import { useEffect, useState } from "react";

function ProductModal({ product, isOpen, setModalOpen }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/product/${product}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [product]);

  console.log(data);

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
                  value={data.name}
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
                      value={data.sell_price}
                    />
                  </div>
                </div>

                <div className="twoElementsArea">
                  <label className="spaceOnTop" htmlFor="categoria">
                    Categoria
                  </label>
                  <br></br>
                  <select id="categoria" className="dropdowCustom">
                    <option>{data.productID}</option>
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
                  value={data.code}
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
                onClick={setModalOpen}
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
