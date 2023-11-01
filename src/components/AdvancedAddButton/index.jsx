import "./style.css";
import ClientLegalForm from "../../pages/Client/components/ClientLegalForm";
import ClientPhysicalForm from "../../pages/Client/components/ClientPhysicalForm";
import EmployeeForm from "../../pages/Employee/components/EmployeeForm";
import RoleForm from "../../pages/Employee/components/RoleForm";
import Button from "react-bootstrap/Button";

import { HiPlus } from "react-icons/hi";
import { useState } from "react";

function AdvancedAddButton({ modalChange }) {
  const [clientLegalModalShow, setLegalModalShow] = useState(false);
  const [clientPhysicalModalShow, setPhysicalModalShow] = useState(false);
  const [employeeModalShow, setEmployeeModalShow] = useState(false);
  const [roleModalShow, setRoleModalShow] = useState(false);

  return (
    <>
      <div className="dropdown">
        <Button id="addButton">
          <span className="addButton-icon">
            <HiPlus />
          </span>
          <span className="addButton-text">Adicionar</span>
        </Button>
        {(() => {
          if (modalChange === "Cliente") {
            return (
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
            );
          } else if (modalChange === "Funcionario") {
            return (
              <div className="dropdown-content">
                <Button
                  className="dropdown-item"
                  onClick={() => setEmployeeModalShow(true)}
                >
                  Funcionario
                </Button>

                <Button
                  className="dropdown-item"
                  onClick={() => setRoleModalShow(true)}
                >
                  Cargo
                </Button>
              </div>
            );
          } else {
            return (
              <div className="dropdown-content">
                <Button
                  className="dropdown-item"
                  onClick={() => setEmployeeModalShow(true)}
                >
                  Receita
                </Button>

                <Button
                  className="dropdown-item"
                  onClick={() => setRoleModalShow(true)}
                >
                  Despesa
                </Button>
              </div>
            );
          }
        })()}
      </div>

      <ClientLegalForm
        isOpen={clientLegalModalShow}
        setModalOpen={() => setLegalModalShow(!clientLegalModalShow)}
      />

      <ClientPhysicalForm
        isOpen={clientPhysicalModalShow}
        setModalOpen={() => setPhysicalModalShow(!clientPhysicalModalShow)}
      />

      <EmployeeForm
        isOpen={employeeModalShow}
        setModalOpen={() => setEmployeeModalShow(!employeeModalShow)}
      />

      <RoleForm
        isOpen={roleModalShow}
        setModalOpen={() => setRoleModalShow(!roleModalShow)}
      />
    </>
  );
}

export default AdvancedAddButton;
