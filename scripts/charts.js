document.addEventListener('DOMContentLoaded', init);

let canvas1, ctx1, canvas2, ctx2;

function init()
{
    canvas1 = document.getElementById('line-chart');
    ctx1 = canvas1.getContext('2d');
    createLineChart();

    canvas2 = document.getElementById('doughnut');
    ctx2 = canvas2.getContext('2d');
    createDoughnut();
}

function createLineChart()
{
    new Chart(ctx1,
    {
        type: 'line',
        data: {
            labels: [...new Array(10)].fill().map((year, index) => 2010 + index),
            datasets: [
                {
                    label: 'Consumption (Million gallons per day)',
                    data: [1039, 1021, 1009.1, 1006.1, 996, 1009, 1002, 990.2, 1007.5, 987.4],
                    borderColor: 'rgb(75, 192, 192, 1)',
                    tension: 0.1,
                    yAxisID: 'y1'
                },
                {
                    label: 'Per Capita (Gallons per person per day)',
                    data: [127, 123, 121, 120, 118, 119, 118, 117, 120, 118],
                    borderColor: 'rgb(255, 99, 132, 1)',
                    tension: 0.1,
                    yAxisID: 'y2'
                }
            ]
        },
        options: {
            responsive: true,
            aspectRatio: 1.1,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Water Consumption in New York City'
                }
            },
            scales: {
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                y2: {
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            }
        }
    });
}

function createDoughnut()
{
    new Chart(ctx2,
    {
        type: 'doughnut',
        data: {
            labels: ['Gasoline', 'Fuel Oil', 'HPD-In Rem / DAMP', 'HPD-Emergency Repairs', 'Heat, Light & Power'],
            datasets: [{
                label: 'Amount (in millions)',
                data: [95, 95, 10, 3, 737],
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"]
            }]
        },
        options: {
            responsive: true,
            aspectRatio: 1.1,
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Projected Citywide Energy Cost in 2022 (in millions)'
                }
            }
        }
    });
}