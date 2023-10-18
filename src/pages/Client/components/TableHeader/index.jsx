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
      <th className="empresaArea">Empresa</th>
      <th className="emailArea">E-mail</th>
      <th className="telefoneArea">Telefone</th>
      <th className="opcaoArea">Opção</th>
    </tr>
  );
}

export default TableHeader;
