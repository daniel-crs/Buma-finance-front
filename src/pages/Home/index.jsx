import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

import Reports from "./components/Reports";
import FinancialStatement from "./components/FinancialStatement";

function Home() {
  return (
    <div>
      <Header />
      <SideBar />

      <div id="bodyContainer">
        <div id="upperBodyInfo">
          <h1>DashBoard</h1>
        </div>

        <div id="dashboard-elements-struct">
          <Reports />
          <FinancialStatement />
        </div>
      </div>
    </div>
  );
}

export default Home;
