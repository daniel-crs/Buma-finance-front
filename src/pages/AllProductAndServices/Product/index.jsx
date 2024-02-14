import "../style.css";

import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import UpperBodyInformation from "../../../components/UpperBodyInformation";
import BtnDelete from "../../../components/BtnDelete";
import TableHeader from "../components/TableHeader";
import TableData from "../components/TableData";

import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8000/product";

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
        <UpperBodyInformation pageTitle={"Produto"} showMonth={false} simpleButton={true} />

        <div className="listBackground">
          <table className="ListContainer">
            <TableHeader />
            {data.map((Products, i) => (
              <TableData
                key={i}
                productId={Products.id}
                nome={Products.name}
                valor={Products.sell_price}
                codigo={Product.code}
                categoria={Products.productID}
                pageTitle={"Produto"}
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
