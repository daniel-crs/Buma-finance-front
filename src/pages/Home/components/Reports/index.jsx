import "./style.css";

import { RiMoneyDollarBoxLine } from "react-icons/ri";

function Reports() {
    return (
        <div id="dashboard-container">
            <h2 className="dashboard-elements-title">Relatorio de agosto</h2>

            <div id="reports-elements-container">
                <div className="elements-struct">
                    <div>
                        <RiMoneyDollarBoxLine className="report-icon"/>
                    </div>
                    <div>
                        <h3 style={{ color: "#5EBC00" }} className="report-value-info">R$ 257.000,00</h3>
                        <p>Receita</p>
                    </div>
                </div>
                <div>
                    <h2>-</h2>
                </div>
                <div className="elements-struct">
                    <div>
                        <RiMoneyDollarBoxLine className="report-icon"/>
                    </div>
                    <div>
                        <h3 style={{ color: "#F53B3B" }} className="report-value-info">R$ 257.000,00</h3>
                        <p>Despesa</p>
                    </div>
                </div>
                <div>
                    <h2>=</h2>
                </div>
                <div className="elements-struct">
                    <div>
                        <RiMoneyDollarBoxLine className="report-icon"/>
                    </div>
                    <div>
                        <h3 style={{ color: "#2DD4F9" }} className="report-value-info">R$ 257.000,00</h3>
                        <p>Fluxo de caixa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;