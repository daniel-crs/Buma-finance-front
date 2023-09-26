function TableHeader() {
  return (
    <tr className="listLines">
      <th className="checkboxArea">
        <div className="customCheckbox">
          <input id="checkbox-all" type="checkbox" />
          <label htmlFor="checkbox-all"></label>
        </div>
      </th>
      <th className="nameArea">Nome</th>
      <th className="categoriaArea">Categoria</th>
      <th className="valorArea">Valor</th>
      <th className="opcaoArea">Opção</th>
    </tr>
  );
}

export default TableHeader;
