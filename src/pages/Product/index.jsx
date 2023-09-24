import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";

function Product() {
  return (
    <div>
      <Header />
      <SideBar />
      <div id="bodyContainer">
        <UpperBodyInformation />
      </div>
    </div>
  );
}

export default Product;
