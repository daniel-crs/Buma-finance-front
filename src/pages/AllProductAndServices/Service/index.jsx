import "../style.css";

import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import UpperBodyInformation from "../../../components/UpperBodyInformation";
import BtnDelete from "../../../components/BtnDelete";
import TableHeader from "../components/TableHeader";
import TableData from "../components/TableData";

function Service() {
  return (
    <div>
      <Header />
      <SideBar />
      <div id="bodyContainer">
        <UpperBodyInformation />

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />
            <TableData
              productId={"1"}
              nome={"Design de Site"}
              categoria={"Design"}
              valor={"A negociar"}
            />

            <TableData
              productId={"2"}
              nome={"Desenvolvimento de software"}
              categoria={"Software"}
              valor={"A negociar"}
            />
          </table>
        </div>

        <BtnDelete />
      </div>
    </div>
  );
}

export default Service;
