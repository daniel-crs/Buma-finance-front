import ReactApexChart from "react-apexcharts";

function FinancialStatement() {
    
    const option = {
        colors: ['#5EBC00', '#F53B3B', '#2DD4F9'],
        chart: {
            type: "bar",
            height: 350
        },
        plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          }, 
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return "$ " + val + " thousands"
              }
            }
          }
    };

    const series = [
        {
        name: 'Receita',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 60, 66]
        }, {
        name: 'Despesa',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 66]
        }, {
        name: 'Fluxo de caixa',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 66]
        },
    ];

    return (
        <div id="dashboard-container">
            <h2 className="dashboard-elements-title">Balança financeiro anual</h2>

            <div style={{ padding: "10px 30px 10px 30px" }}>
                <ReactApexChart options={option} series={series} type="bar" height={350} />
            </div>
        </div>
    )
}

export default FinancialStatement;