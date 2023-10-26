import "./style.css";

import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function PhysicalModal({
  id,
  physical_name,
  physical_email,
  physical_telefone,
  physical_cpf,
  isOpen,
  setModalOpen,
}) {
  const [name, setName] = useState(physical_name);
  const [email, setEmail] = useState(physical_email);
  const [telephone, setTelephone] = useState(physical_telefone);
  const [CPF, setCpf] = useState(physical_cpf);

  const updatePhysicalClient = () => {
    fetch(`http://localhost:8000/physicalcustomer/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, telephone, CPF }),
    }).then((response) => response.json());

    window.location.reload();
  };

  if (isOpen) {
    return (
      <div className="physicalClient-backgroundStyle">
        <div className="physicalClient-modalStyle">
          <div id="physicalClient-headerContainer">
            <div className="physicalClient-clientTypeTitle">
              <h3>Editar Pessoa Física</h3>
            </div>

            <div className="physicalClient-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="physicalClient-Container">
            <fieldset className="physicalClient-formCustom">
              <div className="physicalClient-multipleFields">
                <div className="physicalClient-standardElementArea">
                  <label htmlFor="nome">Nome</label>
                  <br />
                  <input
                    type="text"
                    id="nome"
                    className="clientFieldArea"
                    placeholder="Ex: Lucas Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="physicalClient-standardElementArea">
                  <label htmlFor="empresa">Empresa</label>
                  <br />
                  <input
                    type="text"
                    id="empresa"
                    className="physicalClient-clientFieldArea"
                    placeholder="Ex: Magazine Luiza"
                  />
                </div>
              </div>

              <div className="physicalClient-clientEmailArea">
                <label htmlFor="email">E-mail</label>
                <br />
                <input
                  type="text"
                  id="email"
                  className="physicalClient-clientFieldArea"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="physicalClient-multipleFields">
                <div className="physicalClient-standardElementArea">
                  <label htmlFor="Telefone">Telefone</label>
                  <br />
                  <input
                    type="text"
                    id="Telefone"
                    className="physicalClient-clientFieldArea"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>

                <div className="physicalClient-standardElementArea">
                  <label htmlFor="cnpj">CPF</label>
                  <br />
                  <input
                    type="text"
                    id="cnpj"
                    className="physicalClient-clientFieldArea"
                    value={CPF}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </div>
              </div>

              <div className="physicalClient-clientEnderecoArea">
                <label htmlFor="endereco">Endereço</label>
                <br />
                <input
                  type="text"
                  id="endereco"
                  className="physicalClient-clientFieldArea"
                />
              </div>
            </fieldset>

            <div className="physicalClient-buttonPosition">
              <button
                onClick={() => {
                  updatePhysicalClient();
                  setModalOpen(false);
                }}
                className="physicalClient-saveButton"
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

export default PhysicalModal;
