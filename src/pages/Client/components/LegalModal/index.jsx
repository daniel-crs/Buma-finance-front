import { useEffect, useState } from "react";
import "./style.css";

import { MdOutlineClose } from "react-icons/md";

function LegalModal({ legal, isOpen, setModalOpen }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [CNPJ, setCnpj] = useState("");
  const [company_name, setCompany_name] = useState("");

  useEffect(() => {
    if (!legal) return;

    fetch(`http://localhost:8000/legalcustomer/${legal}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setTelephone(data.telephone);
        setCnpj(data.CNPJ);
        setCompany_name(data.company_name);
      });
  }, [legal]);

  const updateLegalClient = () => {
    fetch(`http://localhost:8000/legalcustomer/${legal}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, telephone, CNPJ, company_name }),
    }).then((response) => response.json());

    window.location.reload();
  };

  if (isOpen) {
    return (
      <div className="backgroundStyle">
        <div className="modalStyle">
          <div id="headerContainer">
            <div className="clientTypeTitle">
              <h3>Editar Cliente Juridico</h3>
            </div>

            <div className="clientExitIcon">
              <MdOutlineClose
                onClick={() => {
                  setModalOpen(false);
                }}
              />
            </div>
          </div>

          <form id="Container">
            <fieldset className="formCustom">
              <div className="multipleFields">
                <div className="standardElementArea">
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

                <div className="standardElementArea">
                  <label htmlFor="empresa">Empresa</label>
                  <br />
                  <input
                    type="text"
                    id="empresa"
                    className="clientFieldArea"
                    placeholder="Ex: Magazine Luiza"
                    value={company_name}
                    onChange={(e) => setCompany_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="multipleFields">
                <div className="clientEmailArea">
                  <label htmlFor="email">E-mail</label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    className="clientFieldArea"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="clientTelefoneArea">
                  <label htmlFor="telefone">Telefone</label>
                  <br />
                  <input
                    type="text"
                    id="telefone"
                    className="clientFieldArea"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </div>
              </div>

              <div className="multipleFields">
                <div className="standardElementArea">
                  <label htmlFor="razaoSocial">Razão Social</label>
                  <br />
                  <input
                    type="text"
                    id="razaoSocial"
                    className="clientFieldArea"
                  />
                </div>

                <div className="standardElementArea">
                  <label htmlFor="cnpj">CNPJ</label>
                  <br />
                  <input
                    type="text"
                    id="cnpj"
                    className="clientFieldArea"
                    value={CNPJ}
                    onChange={(e) => setCnpj(e.target.value)}
                  />
                </div>
              </div>

              <div className="clientEnderecoArea">
                <label htmlFor="endereco">Endereço</label>
                <br />
                <input type="text" id="endereco" className="clientFieldArea" />
              </div>
            </fieldset>

            <div className="buttonPosition">
              <button
                onClick={() => {
                  updateLegalClient();
                  setModalOpen(false);
                }}
                className="saveButton"
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

export default LegalModal;
