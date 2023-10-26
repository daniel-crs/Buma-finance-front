import "./style.css";
import Form from "../../pages/Client/components/Form";
import Button from "react-bootstrap/Button";

import { HiPlus } from "react-icons/hi";
import { useState } from "react";

function AdvancedAddButton() {
  const [clientLegalModalShow, setLegalModalShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLegalModalShow(true)} id="addButton">
        <span className="addButton-icon">
          <HiPlus />
        </span>
        <span className="addButton-text">Cliente</span>
      </Button>

      <Form
        isOpen={clientLegalModalShow}
        setModalOpen={() => setLegalModalShow(!clientLegalModalShow)}
      />
    </>
  );
}

export default AdvancedAddButton;
