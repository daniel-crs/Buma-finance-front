import "../../style.css";

function TableHeader() {
  return (
    <tr className="inex-listLines">
      <th className="inex-checkboxArea">
        <div className="inex-customCheckbox">
          <input id="checkbox-all" type="checkbox" />
          <label htmlFor="checkbox-all"></label>
        </div>
      </th>
      <th className="inex-nameArea">Nome</th>
      <th className="inex-expirationArea">Vencimento</th>
      <th className="inex-parcelArea">Parcela</th>
      <th className="inex-statusArea">Status</th>
      <th className="inex-valueArea">Valor</th>
      <th className="inex-opcaoArea">Opção</th>
    </tr>
  );
}

export default TableHeader;
