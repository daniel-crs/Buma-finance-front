import "./style.css";

import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import UpperBodyInformation from "../../components/UpperBodyInformation";
import PrintWeek from "./components/PrintWeek";
import PrintDays from "./components/PrintDays";

import { TimeProvider } from "../../context/TimeContext";
import { FilterValueProvider } from "../../context/FilterValueContext";

function Calendar() {
  return (
    <div>
      <Header />
      <SideBar />

      <TimeProvider>
        <FilterValueProvider>
          <div id="calen-bodyContainer">
            <UpperBodyInformation
              pageTitle={"Receitas e despesas"}
              showMonth={true}
              simpleButton={false}
            />

            <div className="calendar-container">
                <div className="calendar">
                    <PrintWeek/>

                    <PrintDays/>
                </div>
            </div>
          </div>
        </FilterValueProvider>
      </TimeProvider>
    </div>
  );
}

export default Calendar;
