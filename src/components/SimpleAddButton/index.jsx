import "./style.css";

import { useState } from "react";
import Button from "react-bootstrap/Button";

import ProductForm from "../form/ProductForm";

import { HiPlus } from "react-icons/hi";

function SimpleAddButton() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button id="addButton" onClick={() => setModalShow(true)}>
        <span className="addButton-icon">
          <HiPlus />
        </span>
        <span className="addButton-text">Product</span>
      </Button>

      <ProductForm show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default SimpleAddButton;
