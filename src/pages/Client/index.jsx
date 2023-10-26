import "./client.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";
import { useEffect, useState } from "react";

function Client() {
  const [legal, setLegal] = useState([]);
  const [physical, setPhysical] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/legalcustomer")
      .then((res) => res.json())
      .then((legal) => setLegal(legal));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/physicalcustomer")
      .then((res) => res.json())
      .then((physical) => setPhysical(physical));
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <div id="bodyContainer">
        <UpperBodyInformation pageTitle={"Cliente"} simpleButton={false} />

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />
            {legal.map((LegalCustomers, i) => (
              <TableData
                key={i}
                legalId={LegalCustomers.id}
                nome={LegalCustomers.name}
                company={LegalCustomers.company_name}
                email={LegalCustomers.email}
                telefone={LegalCustomers.telephone}
                identify={"legal"}
              />
            ))}
          </table>
        </div>

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />
            {physical.map((PhysicalCustomer, i) => (
              <TableData
                key={i}
                physicalId={PhysicalCustomer.id}
                nome={PhysicalCustomer.name}
                email={PhysicalCustomer.email}
                telefone={PhysicalCustomer.telephone}
                cpf={PhysicalCustomer.CPF}
                identify={"physical"}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Client;
