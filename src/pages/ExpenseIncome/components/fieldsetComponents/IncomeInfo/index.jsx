import { useEffect, useState } from "react";
import "../../../style/incomeForm.css";

import { FaMoneyCheck } from "react-icons/fa6";

function IncomeInfo({
  description,
  setDescription,
  setProductId,
  setServiceId,
  setLegalcustomerId,
  setPhysicalcustomerId,
}) {
  const [incomeOption, setIncomeOption] = useState("product");
  const [clientOption, setClientOption] = useState("fisico");
  const [legal, setLegal] = useState([]);
  const [physical, setPhysical] = useState([]);
  const [product, setProduct] = useState([]);
  const [service, setService] = useState([]);

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

          <div className="income-standardElementArea">
            <label htmlFor="receita">Tipo da receita</label>
            <br />

            <select
              id="receita"
              name="receita"
              className="income-roleDropdwon"
              onChange={(e) => setIncomeOption(e.target.value)}
            >
              <option value="product">Produto</option>
              <option value="service">Service</option>
            </select>
          </div>
        </div>

        <div className="income-inputSpace">
          <div className="income-treeElementArea">
            <label htmlFor="cliente">Tipo do cliente</label>
            <br />
            <select
              id="cliente"
              name="cliente"
              className="income-roleDropdwon"
              onChange={(e) => setClientOption(e.target.value)}
            >
              <option value="fisico">Físico</option>
              <option value="jurico">Jurídico</option>
            </select>
          </div>

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
                onChange={(e) => setPhysicalcustomerId(e.target.value)}
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
                onChange={(e) => setLegalcustomerId(e.target.value)}
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
              onChange={() => setServiceId(null)}
            >
              <label htmlFor="produto">Product</label>
              <br />

              <select
                id="produto"
                name="produto"
                className="income-roleDropdwon"
                onChange={(e) => setProductId(e.target.value)}
              >
                {product.map((products) => (
                  <option value={products.id}>{products.name}</option>
                ))}
              </select>
            </div>
          ) : (
            <div
              className="income-treeElementArea"
              onChange={() => setProductId(null)}
            >
              <label htmlFor="produto">Service</label>
              <br />

              <select
                id="produto"
                name="produto"
                className="income-roleDropdwon"
                onChange={(e) => setServiceId(e.target.value)}
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

export default IncomeInfo;
