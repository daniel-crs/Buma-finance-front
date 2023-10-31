import "../../style/roleOptions.css";

import RoleModal from "../RoleModal";

import { useState, useRef } from "react";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

function RoleOptions({ roleId, name, salary, emps }) {
  const [openRoleModal, setOpenRoleModal] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const deleteRole = () => {
    if (!emps?.length) {
      fetch(`http://localhost:8000/roles/${roleId}`, {
        method: "DELETE",
      });

      window.location.reload();
    } else {
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  };

  return (
    <div className="role-roleOption">
      <div>
        <button
          className="role-button"
          ref={target}
          onClick={() => deleteRole()}
        >
          <span className="role-buttonIcon">
            <FaTrash />
          </span>
          <span className="role-buttonText">Excluir</span>
        </button>

        <Overlay target={target.current} show={show} placement="top">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Um cargo só pode ser deletado, se os seus funcionários forem
              deletados primeiro.
            </Tooltip>
          )}
        </Overlay>
      </div>

      <div>
        <button className="role-button" onClick={() => setOpenRoleModal(true)}>
          <span className="role-buttonIcon">
            <MdModeEdit />
          </span>
          <span className="role-buttonText">Editar</span>
        </button>

        <RoleModal
          id={roleId}
          roleName={name}
          roleSalary={salary}
          isOpen={openRoleModal}
          setModalOpen={() => setOpenRoleModal(!openRoleModal)}
        />
      </div>
    </div>
  );
}

export default RoleOptions;
