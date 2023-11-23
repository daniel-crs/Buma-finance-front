import "../../../../style/incomeForm.css";

import { useState, useEffect } from "react";
import { FaMoneyCheck } from "react-icons/fa6";

function IncomeInfoArea({
  description,
  setDescription,
  incProductId,
  incSetProduct,
  incServiceId,
  incSetService,
  productName,
}) {
  const [incomeOption, setIncomeOption] = useState("");
  const [product, setProduct] = useState([]);
  const [service, setService] = useState([]);

  useEffect(() => {
    console.log("incSetProductId alterando", incProductId);
  }, [incProductId]);

  useEffect(() => {
    if (incProductId !== null) {
      setIncomeOption("product");
    } else {
      setIncomeOption("service");
    }
  }, [incProductId]);

  useEffect(() => {
    fetch("http://localhost:8000/product")
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/service")
      .then((res) => res.json())
      .then((service) => setService(service));
  }, []);

  return (
    <div className="income-fornsContainer">
      <div className="income-formIcon">
        <FaMoneyCheck />
      </div>

      <div className="income-inputscontainer">
        <div className="income-inputSpace">
          <div className="income-standardElementArea">
            <label htmlFor="name">Nome</label>
            <br />
            <input
              type="text"
              id="name"
              className="income-clientFieldArea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {incProductId !== null ? (
            <div className="income-standardElementArea">
              <label htmlFor="receita">Tipo da receita</label>
              <br />

              <select
                id="receita"
                name="receita"
                className="income-roleDropdwon"
                defaultValue={"product"}
                onChange={(e) => setIncomeOption(e.target.value)}
              >
                <option value="product">Produto</option>
                <option value="service">Service</option>
              </select>
            </div>
          ) : (
            <div className="income-standardElementArea">
              <label htmlFor="receita">Tipo da receita</label>
              <br />

              <select
                id="receita"
                name="receita"
                className="income-roleDropdwon"
                defaultValue={"service"}
                onChange={(e) => setIncomeOption(e.target.value)}
              >
                <option value="product">Produto</option>
                <option value="service">Service</option>
              </select>
            </div>
          )}
        </div>

        <div className="income-inputSpace">
          <div className="income-treeElementArea">
            <label htmlFor="cliente">Tipo do cliente</label>
            <br />
            <select id="cliente" name="cliente" className="income-roleDropdwon">
              <option value="fisico">Físico</option>
              <option value="jurico">Jurídico</option>
            </select>
          </div>

          <div className="income-treeElementArea">
            <label htmlFor="cliente">Cliente</label>
            <br />
            <select
              id="cliente"
              name="cliente"
              className="income-roleDropdwon"
            ></select>
          </div>

          {incomeOption === "product" ? (
            <div className="income-treeElementArea">
              <label htmlFor="produto">Product</label>
              <br />

              <select
                id="produto"
                name="produto"
                className="income-roleDropdwon"
                value={incProductId}
                onChange={(e) => {
                  console.log("setProduct", e);
                  incSetProduct(e.target.value);
                }}
              >
                {product.map((products) => (
                  <option value={products.id}>{products.name}</option>
                ))}
              </select>
            </div>
          ) : (
            <div className="income-treeElementArea">
              <label htmlFor="service">Service</label>
              <br />

              <select
                id="service"
                name="service"
                className="income-roleDropdwon"
              >
                {service.map((services) => (
                  <option value={services.id}>{services.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IncomeInfoArea;
