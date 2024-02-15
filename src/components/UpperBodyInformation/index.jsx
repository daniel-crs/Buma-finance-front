import "./style.css";

import { TimeProvider } from "../../context/TimeContext";

import SimpleAddButton from "../SimpleAddButton";
import MonthButton from "../MonthButton";
import AdvancedAddButton from "../AdvancedAddButton";
import FilterButton from "../FilterButton";

function UpperBodyInformation({ pageTitle, showMonth, simpleButton }) {
  return (
    <div id="upperBodyInfo">
      <h1>{pageTitle}</h1>

      {(() => {
        if (showMonth === true) {
          return (
            <TimeProvider>
              <MonthButton />
            </TimeProvider>
          )
        } else {
          return null;
        }
      })()}

      <div id="buttonSpace">
        {(() => {
          if (simpleButton === true) {
            return <SimpleAddButton modalChange={pageTitle} />;
          } else {
            return <AdvancedAddButton modalChange={pageTitle} />;
          }
        })()}
        <FilterButton />
      </div>
    </div>
  );
}

export default UpperBodyInformation;
