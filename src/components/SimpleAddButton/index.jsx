import "./style.css";

import { HiPlus } from "react-icons/hi";

function SimpleAddButton() {
  return (
    <a href="/" id="addButton">
      <span className="addButton-icon">
        <HiPlus />
      </span>
      <span className="addButton-text">Product</span>
    </a>
  );
}

export default SimpleAddButton;
