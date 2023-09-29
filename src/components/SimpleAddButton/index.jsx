import "./style.css";

import { useState } from "react";
import Button from "react-bootstrap/Button";

import ProductForm from "../../pages/AllProductAndServices/components/ProductForm";
import ServiceForm from "../../pages/AllProductAndServices/components/ServiceForm";

import { HiPlus } from "react-icons/hi";

function SimpleAddButton({ modalChange }) {
  const [productModalShow, setModalShow] = useState(false);

  return (
    <>
      <Button id="addButton" onClick={() => setModalShow(true)}>
        <span className="addButton-icon">
          <HiPlus />
        </span>
        <span className="addButton-text">{modalChange}</span>
      </Button>

      {(() => {
        if (modalChange === "Produto") {
          return (
            <ProductForm
              show={productModalShow}
              onHide={() => setModalShow(false)}
            />
          );
        } else if (modalChange === "Serviço") {
          return (
            <ServiceForm
              show={productModalShow}
              onHide={() => setModalShow(false)}
            />
          );
        }
      })()}
    </>
  );
}

export default SimpleAddButton;
