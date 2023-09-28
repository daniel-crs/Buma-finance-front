import "../style.css";

import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import UpperBodyInformation from "../../../components/UpperBodyInformation";
import BtnDelete from "../../../components/BtnDelete";
import TableHeader from "../components/TableHeader";
import TableData from "../components/TableData";

import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState("");

  const url = "http://localhost:1337/api/work-lists";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <SideBar />
      <div id="bodyContainer">
        <UpperBodyInformation pageTitle={"Produto"} />

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />
            {data.map((Products, i) => (
              <TableData
                key={i}
                productId={Products.id}
                nome={Products.name}
                categoria={Products.productID}
                valor={Products.sell_price}
              />
            ))}
          </table>
        </div>

        <BtnDelete />
      </div>
    </div>
  );
}

export default Product;
