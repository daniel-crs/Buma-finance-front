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
  legalcustomerId,
  setLegalcustomerId,
  physicalcustomerId,
  setPhysicalcustomerId,
}) {
  const [incomeOption, setIncomeOption] = useState("");
  const [clientOption, setClientOption] = useState("");
  const [product, setProduct] = useState([]);
  const [service, setService] = useState([]);
  const [legal, setLegal] = useState([]);
  const [physical, setPhysical] = useState([]);

  useEffect(() => {
    if (incProductId !== null) {
      setIncomeOption("product");
    } else {
      setIncomeOption("service");
    }
  }, [incProductId]);

  useEffect(() => {
    if (physicalcustomerId !== null) {
      setClientOption("fisico");
    } else {
      setIncomeOption("jurico");
    }
  }, [physicalcustomerId]);

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

  useEffect(() => {
    fetch("http://localhost:8000/legalcustomer")
      .then((res) => res.json())
      .then((legal) => setLegal(legal));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/physicalcustomer")
      .then((res) => res.json())
      .then((physical) => setPhysical(physical));
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
          {physicalcustomerId !== null ? (
            <div className="income-treeElementArea">
              <label htmlFor="cliente">Tipo do cliente</label>
              <br />
              <select
                id="cliente"
                name="cliente"
                className="income-roleDropdwon"
                defaultValue={"fisico"}
                onChange={(e) => setClientOption(e.target.value)}
              >
                <option value="fisico">Físico</option>
                <option value="jurico">Jurídico</option>
              </select>
            </div>
          ) : (
            <div className="income-treeElementArea">
              <label htmlFor="cliente">Tipo do cliente</label>
              <br />
              <select
                id="cliente"
                name="cliente"
                className="income-roleDropdwon"
                defaultValue={"jurico"}
                onChange={(e) => setClientOption(e.target.value)}
              >
                <option value="fisico">Físico</option>
                <option value="jurico">Jurídico</option>
              </select>
            </div>
          )}

          {clientOption === "fisico" ? (
            <div
              className="income-treeElementArea"
              onChange={() => setLegalcustomerId(null)}
            >
              <label htmlFor="cliente">Cliente</label>
              <br />
              <select
                id="cliente"
                name="cliente"
                className="income-roleDropdwon"
                value={physicalcustomerId}
                onChange={(e) => {
                  setPhysicalcustomerId(e.target.value);
                }}
              >
                {physical.map((physicalCustomers) => (
                  <option value={physicalCustomers.id}>
                    {physicalCustomers.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div
              className="income-treeElementArea"
              onChange={() => setPhysicalcustomerId(null)}
            >
              <label htmlFor="cliente">Cliente</label>
              <br />
              <select
                id="cliente"
                name="cliente"
                className="income-roleDropdwon"
                value={legalcustomerId}
                onChange={(e) => {
                  setLegalcustomerId(e.target.value);
                }}
              >
                {legal.map((legalCustomers) => (
                  <option value={legalCustomers.id}>
                    {legalCustomers.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {incomeOption === "product" ? (
            <div
              className="income-treeElementArea"
              onChange={() => incSetService(null)}
            >
              <label htmlFor="produto">Product</label>
              <br />

              <select
                id="produto"
                name="produto"
                className="income-roleDropdwon"
                value={incProductId}
                onChange={(e) => {
                  incSetProduct(e.target.value);
                }}
              >
                {product.map((products) => (
                  <option value={products.id}>{products.name}</option>
                ))}
              </select>
            </div>
          ) : (
            <div
              className="income-treeElementArea"
              onChange={() => incSetProduct(null)}
            >
              <label htmlFor="service">Service</label>
              <br />

              <select
                id="service"
                name="service"
                className="income-roleDropdwon"
                value={incServiceId}
                onChange={(e) => {
                  incSetService(e.target.value);
                }}
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
