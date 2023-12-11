import "../../../../style/expenseForm.css";

import { FaMoneyCheck } from "react-icons/fa6";

function ExpenseInfo({ name, setName }) {
  return (
    <div>
      <div className="expense-fornsContainer">
        <div className="expense-formIcon">
          <FaMoneyCheck />
        </div>

        <div className="expense-inputscontainer">
          <div className="expense-inputSpace">
            <div className="expense-onlyElementArea">
              <label htmlFor="name">Nome</label>
              <br />
              <input
                type="text"
                id="name"
                className="expense-clientFieldArea"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseInfo;
