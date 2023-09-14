import "./style.css";

import SimpleAddButton from "../SimpleAddButton";
import FilterButton from "../FilterButton";

function UpperBodyInformation() {
  return (
    <div id="upperBodyInfo">
      <h1>Product</h1>
      <div id="buttonSpace">
        <SimpleAddButton />
        <FilterButton />
      </div>
    </div>
  );
}

export default UpperBodyInformation;
