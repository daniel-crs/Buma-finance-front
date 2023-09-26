import "./style.css";

import SimpleAddButton from "../SimpleAddButton";
import FilterButton from "../FilterButton";

function UpperBodyInformation({ pageTitle }) {
  return (
    <div id="upperBodyInfo">
      <h1>{pageTitle}</h1>
      <div id="buttonSpace">
        <SimpleAddButton modalChange={pageTitle} />
        <FilterButton />
      </div>
    </div>
  );
}

export default UpperBodyInformation;
