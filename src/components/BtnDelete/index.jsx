import "./style.css";

function BtnDelete() {
  return (
    <div id="deleteButtonSpace">
      <button type="button" id="deleteButton">
        <span className="deleteButton-text">Excluir</span>
      </button>
    </div>
  );
}

export default BtnDelete;
