import "../../employee.css";

function TableHeader() {
  return (
    <tr className="employee-listLines">
      <th className="employee-checkboxArea">
        <div className="employee-customCheckbox">
          <input id="checkbox-all" type="checkbox" />
          <label htmlFor="checkbox-all"></label>
        </div>
      </th>
      <th className="employee-nameArea">Nome</th>
      <th className="employee-emailArea">E-mail</th>
      <th className="employee-telefoneArea">Telefone</th>
      <th className="employee-opcaoArea">Opção</th>
    </tr>
  );
}

export default TableHeader;
