import "./style.css";
import ClientLegalForm from "../../pages/Client/components/ClientLegalForm";
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
          <Button
            className="dropdown-item"
            onClick={() => setLegalModalShow(true)}
          >
            Cliente juridico
          </Button>

          <Button
            className="dropdown-item"
            onClick={() => setPhysicalModalShow(true)}
          >
            Cliente física
          </Button>
        </div>
      </div>

      <ClientLegalForm
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
