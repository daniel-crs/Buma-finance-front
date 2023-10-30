import "../../style/form.css";

import { useState, useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";

function EmployeeForm({ isOpen, setModalOpen }) {
  const url = "http://localhost:8000/employees";
  const [roles, setRoles] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState(1);

  console.log(roles.id);

  const createEmplooye = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, number, email, role: position }),
    }).then((res) => res.json());

    window.location.reload();
  };

  useEffect(() => {
    fetch("http://localhost:8000/roles")
      .then((res) => res.json())
      .then((roles) => setRoles(roles));
  }, []);

  if (isOpen) {
    return (
      <div className="employee-backgroundStyle">
        <div className="employee-modalStyle">
          <div id="employee-headerContainer">
            <div className="employee-clientTypeTitle">
              <h3>Adicionar Funcionario</h3>
            </div>

            <div className="employee-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="employee-Container" onSubmit={createEmplooye}>
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
                  <label htmlFor={position}>Cargo</label>
                  <br />

                  <select
                    id={position}
                    name={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="employee-roleDropdwon"
                  >
                    {roles.map((role) => (
                      <option value={role.id}>{role.function}</option>
                    ))}
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
                  createEmplooye();
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

export default EmployeeForm;
