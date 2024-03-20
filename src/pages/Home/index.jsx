import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

import Reports from "./components/Reports";
import FinancialStatement from "./components/FinancialStatement";
import RevenueExpanseChart from "./components/RevenueExpanseCharts";

function Home() {
  return (
    <div>
      <Header />
      <SideBar />

      <div id="dashboar-bodyContainer">
        <div id="upperBodyInfo">
          <h1>DashBoard</h1>
        </div>

        <div id="dashboard-elements-struct">
          <Reports />
          <FinancialStatement />
          <RevenueExpanseChart />
        </div>
      </div>
    </div>
  );
}

export default Home;
