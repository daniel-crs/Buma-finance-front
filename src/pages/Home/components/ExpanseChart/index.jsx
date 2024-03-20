import ReactApexChart from "react-apexcharts"

function ExpanseChart() {
    const options = {
        chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
        }]
    };

    const series = [10, 10, 13, 43, 22];
    
    return (
        <div className="revenue-expanse-charts-container">
            <h3 className="dashboard-elements-title">Maiores despesas</h3>
        
            <div className="revenue-expanse-charts-position">
                <ReactApexChart options={options} series={series} type="pie" width={380} />
            </div>
        </div>
    )
}

export default ExpanseChart;