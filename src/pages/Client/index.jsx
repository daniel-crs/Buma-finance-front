import "./client.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import TableHeader from "./components/TableHeader";
import TableData from "./components/TableData";

function Client() {
  return (
    <div>
      <Header />
      <SideBar />
      <div id="bodyContainer">
        <UpperBodyInformation pageTitle={"Cliente"} />

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />

            <TableData />
          </table>
        </div>

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />

            <TableData />
          </table>
        </div>
      </div>
    </div>
  );
}

export default Client;
