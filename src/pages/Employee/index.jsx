import "./employee.css";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";

import { useState, useEffect } from "react";

function Employee() {
  const [role, setRole] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/roles")
      .then((res) => res.json())
      .then((role) => setRole(role));
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <div id="employee-bodyContainer">
        <UpperBodyInformation pageTitle={"Funcionario"} simpleButton={false} />

        {role.map((Roles, i) => (
          <div className="employee-listBackground">
            <div className="employee-titleArea">
              <div className="employee-title">
                <h3>{Roles.function}</h3>
              </div>
              <div className="employee-title">
                <h3>R$ {Roles.salary}</h3>
              </div>
            </div>

            <div className="employee-tableContainer">
              <table className="employee-listContainer">
                <TableHeader />

                <TableData />
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employee;
