import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";

function ExpenseIncome() {
  return (
    <div>
      <Header />
      <SideBar />

      <div id="inex-bodyContainer">
        <UpperBodyInformation
          pageTitle={"Receitas e despesas"}
          simpleButton={false}
        />

        <div className="inex-listBackground">
          <div className="inex-tableContainer">
            <table className="inex-listContainer">
              <TableHeader />

              <TableData />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseIncome;
