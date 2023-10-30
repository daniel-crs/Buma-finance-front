import "../../style/roleOptions.css";

import RoleModal from "../RoleModal";

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

function RoleOptions({ roleId, name, salary }) {
  const [openRoleModal, setOpenRoleModal] = useState(false);

  const deleteRole = () => {
    fetch(`http://localhost:8000/roles/${roleId}`, {
      method: "DELETE",
    });

    window.location.reload();
  };

  return (
    <div className="role-roleOption">
      <div>
        <button className="role-button" onClick={() => deleteRole()}>
          <span className="role-buttonIcon">
            <FaTrash />
          </span>
          <span className="role-buttonText">Excluir</span>
        </button>
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
