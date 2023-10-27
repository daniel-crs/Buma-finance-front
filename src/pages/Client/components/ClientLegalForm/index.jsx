import { useState } from "react";
import "./style.css";

import { MdOutlineClose } from "react-icons/md";

function ClientLegalForm({ isOpen, setModalOpen }) {
  const url = "http://localhost:8000/legalcustomer";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [CNPJ, setCnpj] = useState("");
  const [company_name, setCompany_name] = useState("");

  console.log(JSON.stringify({ name, email, telephone, CNPJ, company_name }));

  const createLegalClient = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, telephone, CNPJ, company_name }),
    }).then((res) => res.json());

    window.location.reload();
  };

  if (isOpen) {
    return (
      <div className="legalClient-backgroundStyle">
        <div className="legalClient-modalStyle">
          <div id="legalClient-headerContainer">
            <div className="legalClient-clientTypeTitle">
              <h3>Adicionar Pessoa Juridico</h3>
            </div>

            <div className="legalClient-clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="legalClient-Container" onSubmit={createLegalClient}>
            <fieldset className="legalClient-formCustom">
              <div className="legalClient-multipleFields">
                <div className="legalClient-standardElementArea">
                  <label htmlFor="nome">Nome</label>
                  <br />
                  <input
                    type="text"
                    id="nome"
                    className="legalClient-clientFieldArea"
                    placeholder="Ex: Lucas Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="legalClient-standardElementArea">
                  <label htmlFor="empresa">Empresa</label>
                  <br />
                  <input
                    type="text"
                    id="empresa"
                    className="legalClient-clientFieldArea"
                    placeholder="Ex: Magazine Luiza"
                    value={company_name}
                    onChange={(e) => setCompany_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="legalClient-multipleFields">
                <div className="legalClient-clientEmailArea">
                  <label htmlFor="email">E-mail</label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    className="legalClient-clientFieldArea"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="legalClient-clientTelefoneArea">
                  <label htmlFor="telefone">Telefone</label>
                  <br />
                  <input
                    type="text"
                    id="telefone"
                    className="legalClient-clientFieldArea"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
              </div>

              <div className="legalClient-multipleFields">
                <div className="legalClient-standardElementArea">
                  <label htmlFor="razaoSocial">Razão Social</label>
                  <br />
                  <input
                    type="text"
                    id="razaoSocial"
                    className="legalClient-clientFieldArea"
                  />
                </div>

                <div className="legalClient-standardElementArea">
                  <label htmlFor="cnpj">CNPJ</label>
                  <br />
                  <input
                    type="text"
                    id="cnpj"
                    className="legalClient-clientFieldArea"
                    value={CNPJ}
                    onChange={(e) => setCnpj(e.target.value)}
                  />
                </div>
              </div>

              <div className="legalClient-clientEnderecoArea">
                <label htmlFor="endereco">Endereço</label>
                <br />
                <input
                  type="text"
                  id="endereco"
                  className="legalClient-clientFieldArea"
                />
              </div>
            </fieldset>

            <div className="legalClient-buttonPosition">
              <button
                onClick={() => {
                  createLegalClient();
                  setModalOpen(false);
                }}
                className="legalClient-saveButton"
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

export default ClientLegalForm;
