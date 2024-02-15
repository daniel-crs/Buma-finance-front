import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";

import { TimeProvider } from "../../context/TimeContext";
import CalendarBase from "./components/CalendarBase";

function Calendar() {
  return (
    <div>
      <Header />
      <SideBar />

      <TimeProvider>
        <div id="calen-bodyContainer">
          <UpperBodyInformation
            pageTitle={"Receitas e despesas"}
            showMonth={true}
            simpleButton={false}
          />

          
            <CalendarBase />
        </div>
      </TimeProvider>
    </div>
  );
}

export default Calendar;
