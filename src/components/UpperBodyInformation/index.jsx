import "./style.css";

import SimpleAddButton from "../SimpleAddButton";
import AdvancedAddButton from "../AdvancedAddButton";
import FilterButton from "../FilterButton";

function UpperBodyInformation({ pageTitle, simpleButton }) {
  return (
    <div id="upperBodyInfo">
      <h1>{pageTitle}</h1>

      {(() => {
        if (pageTitle === "Receitas e despesas") {
          return (
            <div className="dateButton">
              <h3>Agosto</h3>
            </div>
          );
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
