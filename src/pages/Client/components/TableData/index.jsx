import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import ModalStandard from "../ModalStandard";

function TableData({
  legalId,
  physicalId,
  nome,
  company,
  email,
  telefone,
  deleteIdentify,
}) {
  const [openModal, setOpenModal] = useState(false);

  const deleteLegalClient = () => {
    fetch(`http://localhost:8000/legalcustomer/${legalId}`, {
      method: "DELETE",
    });
  };

  const deletePhysicalClient = () => {
    fetch(`http://localhost:8000/physicalcustomer/${physicalId}`, {
      method: "DELETE",
    });
  };

  return (
    <tr className="listLines">
      <td className="checkboxArea">
        <div className="customCheckbox">
          <input id={1} type="checkbox" />
          <label htmlFor={1}></label>
        </div>
      </td>
      <td className="nameArea">{nome}</td>
      <td className="empresaArea">{company}</td>
      <td className="emailArea">{email}</td>
      <td className="telefoneArea">{telefone}</td>
      <td className="opcaoArea">
        <div className="iconsPosition">
          {(() => {
            if (deleteIdentify === "legal") {
              return (
                <Button
                  className="iconBtnBackground"
                  onClick={() => deleteLegalClient()}
                >
                  <span className="iconCustom">
                    <FaTrash />
                  </span>
                </Button>
              );
            } else if (deleteIdentify === "physical") {
              return (
                <Button
                  className="iconBtnBackground"
                  onClick={() => deletePhysicalClient()}
                >
                  <span className="iconCustom">
                    <FaTrash />
                  </span>
                </Button>
              );
            }
          })()}

          <Button
            className="iconBtnBackground"
            onClick={() => setOpenModal(true)}
          >
            <span className="iconCustom">
              <MdModeEdit />
            </span>
          </Button>

          <ModalStandard
            isOpen={openModal}
            setModalOpen={() => setOpenModal(!openModal)}
            legal={legalId}
          />
        </div>
      </td>
    </tr>
  );
}

export default TableData;