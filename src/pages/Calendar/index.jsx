import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";

import CalendarBase from "./components/CalendarBase";

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

        <CalendarBase />
      </div>
    </div>
  );
}

export default Calendar;
