import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";

function Calendar() {
  return (
    <div>
      <Header />
      <SideBar />

      <div id="calen-bodyContainer">
        <UpperBodyInformation
          pageTitle={"Receitas e despesas"}
          simpleButton={false}
        />
      </div>
    </div>
  );
}

export default Calendar;
