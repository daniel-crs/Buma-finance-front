import "../style.css";

import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import UpperBodyInformation from "../../../components/UpperBodyInformation";
import BtnDelete from "../../../components/BtnDelete";
import TableHeader from "../components/TableHeader";
import TableData from "../components/TableData";
import { useEffect, useState } from "react";

function Service() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8000/service";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Header />
      <SideBar />
      <div id="bodyContainer">
        <UpperBodyInformation pageTitle={"Serviço"} simpleButton={true} />

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />
            {data.map((Services, i) => (
              <TableData
                key={i}
                serviceId={Services.id}
                nome={Services.name}
                categoria={Services.serviceID}
                valor={Services.sell_price}
                pageTitle={"Serviço"}
              />
            ))}
          </table>
        </div>

        <BtnDelete />
      </div>
    </div>
  );
}

export default Service;
