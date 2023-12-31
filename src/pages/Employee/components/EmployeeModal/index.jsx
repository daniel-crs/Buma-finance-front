import "../../style/form.css";

import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function EmployeeModal({
  id,
  employeeNome,
  employeeTelefone,
  employeeEmail,
  isOpen,
  setModalOpen,
}) {
  const [name, setName] = useState(employeeNome);
  const [number, setNumber] = useState(employeeTelefone);
  const [email, setEmail] = useState(employeeEmail);

  const updateEmployee = () => {
    fetch(`http://localhost:8000/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, number, email, role: 1 }),
    }).then((response) => response.json());

    window.location.reload();
  };

  if (isOpen) {
    return (
      <div className="employee-backgroundStyle">
        <div className="employee-modalStyle">
          <div id="employee-headerContainer">
            <div className="employee-clientTypeTitle">
              <h3>Editar Funcionario</h3>
            </div>

            <div className="employee-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="employee-Container">
            <fieldset className="employee-formCustom">
              <div className="employee-clientNameArea">
                <label htmlFor="nome">Nome</label>
                <br />
                <input
                  type="text"
                  id="nome"
                  className="employee-clientFieldArea"
                  placeholder="Ex: Lucas Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="employee-multipleFields">
                <div className="employee-clientEmailArea">
                  <label htmlFor="email">E-mail</label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    className="employee-clientFieldArea"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="employee-clientTelefoneArea">
                  <label htmlFor="telefone">Telefone</label>
                  <br />
                  <input
                    type="text"
                    id="telefone"
                    className="employee-clientFieldArea"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="employee-multipleFields">
                <div className="employee-standardElementArea">
                  <label htmlFor="Cargo">Cargo</label>
                  <br />
                  <select id="Cargo" className="employee-roleDropdwon">
                    <option value="site">Design</option>
                    <option value="aplicativos">Dev Junior</option>
                  </select>
                </div>

                <div className="employee-standardElementArea">
                  <label htmlFor="pagamento">Dia de pagamento</label>
                  <br />
                  <input
                    type="text"
                    id="pagamento"
                    className="employee-clientFieldArea"
                    placeholder="dd/mm/aaaa"
                  />
                </div>
              </div>
            </fieldset>

            <div className="employee-buttonPosition">
              <button
                onClick={() => {
                  updateEmployee();
                  setModalOpen(false);
                }}
                className="employee-saveButton"
                type="button"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
}

export default EmployeeModal;
