import "../style.css";

import Header from "../../../components/Header";
import SideBar from "../../../components/SideBar";
import UpperBodyInformation from "../../../components/UpperBodyInformation";
import BtnDelete from "../../../components/BtnDelete";
import TableHeader from "../components/TableHeader";
import TableData from "../components/TableData";

function Product() {
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
              nome={"Iphone 12"}
              categoria={"Celular"}
              valor={"R$ 4.000,00"}
            />
            <TableData
              productId={"2"}
              nome={"GTX 1080 TI"}
              categoria={"Componente de PC"}
              valor={"R$ 18.000,00"}
            />
            <TableData
              productId={"3"}
              nome={"Cobertor com o rosto do zanon"}
              categoria={"Decoração"}
              valor={"R$ 350,00"}
            />
            <TableData
              productId={"4"}
              nome={"Funko do Goku"}
              categoria={"Decoração"}
              valor={"R$ 50,00"}
            />
            <TableData
              productId={"5"}
              nome={"Teclado GT29"}
              categoria={"Componente de PC"}
              valor={"R$ 525,00"}
            />
          </table>
        </div>

        <BtnDelete />
      </div>
    </div>
  );
}

export default Product;
