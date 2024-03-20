import "./style.css"

import RevenueChart from "../RevenueChart";
import ExpanseChart from "../ExpanseChart";

function RevenueExpanseChart() {
    return (
        <div id="revenue-expanse-charts-struct">
            <RevenueChart />
            
            <ExpanseChart />
        </div>
    )
}

export default RevenueExpanseChart;