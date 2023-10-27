import "./employee.css";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";

import { useState, useEffect } from "react";

function Employee() {
  const [roles, setRoles] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/roles")
      .then((res) => res.json())
      .then((roles) => setRoles(roles));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((res) => res.json())
      .then((employees) => setEmployees(employees));
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <div id="employee-bodyContainer">
        <UpperBodyInformation pageTitle={"Funcionario"} simpleButton={false} />

        {roles.map((role) => (
          <div className="employee-listBackground">
            <div className="employee-titleArea">
              <div className="employee-title">
                <h3>{role.function}</h3>
              </div>
              <div className="employee-title">
                <h3>R$ {role.salary}</h3>
              </div>
            </div>

            <div className="employee-tableContainer">
              <table className="employee-listContainer">
                <TableHeader />

                {employees
                  .filter((emp) => role.id === emp.role)
                  .map((employee, i) => (
                    <TableData
                      key={i}
                      employeeId={employee.id}
                      nome={employee.name}
                      email={employee.email}
                      telefone={employee.number}
                    />
                  ))}
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employee;
