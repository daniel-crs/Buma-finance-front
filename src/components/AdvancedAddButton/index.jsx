import "./style.css";
import Form from "../../pages/Client/components/Form";
import ClientPhysicalForm from "../../pages/Client/components/ClientPhysicalForm";
import Button from "react-bootstrap/Button";

import { HiPlus } from "react-icons/hi";
import { useState } from "react";

function AdvancedAddButton() {
  const [clientLegalModalShow, setLegalModalShow] = useState(false);
  const [clientPhysicalModalShow, setPhysicalModalShow] = useState(false);

  return (
    <>
      <div className="dropdown">
        <Button id="addButton">
          <span className="addButton-icon">
            <HiPlus />
          </span>
          <span className="addButton-text">Adicionar</span>
        </Button>
        <div className="dropdown-content">
          <Button onClick={() => setLegalModalShow(true)}>
            Pessoa juridico
          </Button>

          <Button onClick={() => setPhysicalModalShow(true)}>
            Pessoa física
          </Button>
        </div>
      </div>

      <Form
        isOpen={clientLegalModalShow}
        setModalOpen={() => setLegalModalShow(!clientLegalModalShow)}
      />

      <ClientPhysicalForm
        isOpen={clientPhysicalModalShow}
        setModalOpen={() => setPhysicalModalShow(!clientPhysicalModalShow)}
      />
    </>
  );
}

export default AdvancedAddButton;
