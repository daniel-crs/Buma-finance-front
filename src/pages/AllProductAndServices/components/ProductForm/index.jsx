import "./style.css";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ProductForm(showModal) {

  const CreateProduct = () => {
    const url = "http://localhost:8000/product";
    const [name, setName] = useState('');
    const [sell_price, setSell_price] = useState('');
    const [code, setCode] = useState('');
    const [productID, setProductID] = useState('');
  
    const HandleSubmit = (e)=> {
      e.preventDefault();
      const Product = { name , sell_price, code, productID };
  
      fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Product)
      })
      .then(()=> {
        console.log("New product added");
      })
    }
  }

  return (
    <>
      <Modal {...showModal} size="lg" centered>
        <Modal.Body>
          <div>
            <h3 className="formTitle">Adicionar Produto</h3>
          </div>

          <form onSubmit={CreateProduct.HandleSubmit}>
            <fieldset className="formContainer">
              <div>
                <label htmlFor="title">Nome</label>
                <br></br>
                <input
                  className="fieldNameLine"
                  value={CreateProduct.name}
                  id="title"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Placa de video Geforce RTX 3060"
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
                    <input className="elementsArea" id="valor" type="text" />
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

export default ProductForm;
