import "../../employee.css";
import EmployeeModal from "../EmployeeModal";

import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";

function TableData({ employeeId, name, email, number }) {
  const [openModal, setOpenModal] = useState(false);

  const deleteEmployee = () => {
    fetch(`http://localhost:8000/employees/${employeeId}`, {
      method: "DELETE",
    });

    window.location.reload();
  };

  return (
    <tr className="employee-listLines">
      <td className="employee-checkboxArea">
        <div className="employee-customCheckbox">
          <input id={1} type="checkbox" />
          <label htmlFor={1}></label>
        </div>
      </td>
      <td className="employee-nameArea">{name}</td>
      <td className="employee-emailArea">{email}</td>
      <td className="employee-telefoneArea">{number}</td>
      <td className="employee-opcaoArea">
        <div className="employee-iconsPosition">
          <Button
            className="employee-iconBtnBackground"
            onClick={() => deleteEmployee()}
          >
            <span className="employee-iconCustom">
              <FaTrash />
            </span>
          </Button>

          <Button
            className="employee-iconBtnBackground"
            onClick={() => setOpenModal(true)}
          >
            <span className="employee-iconCustom">
              <MdModeEdit />
            </span>
          </Button>

          <EmployeeModal
            id={employeeId}
            employeeNome={name}
            employeeTelefone={number}
            employeeEmail={email}
            isOpen={openModal}
            setModalOpen={() => setOpenModal(!openModal)}
          />
        </div>
      </td>
    </tr>
  );
}

export default TableData;
