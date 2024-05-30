/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// Scripts

window.addEventListener('DOMContentLoaded', event => {
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    // Chart.js initializations
    const ctx = document.getElementById('myChart').getContext('2d');
    const pieCtx = document.getElementById("pieChart").getContext("2d");
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    let currentChart;

    const barChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: "Bar Chart",
                data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
        ]
    };

    const pieChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: "Pie Chart",
            data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    const lineChart = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: "Line Chart",
                data: [100, 59, 80, 81, 56, 55, 68, 23, 10, 100, 60, 90],
                fill: false,
                borderColor: "rgba(74, 255, 150, 0.94)",
                borderWidth: 1
            }
        ]
    };

    function renderChart(type) {
        if (currentChart) {
            currentChart.destroy();
        }

        let chartData;
        switch (type) {
            case 'bar':
                chartData = barChart;
                break;
            case 'pie':
                chartData = pieChart;
                break;
            case 'line':
                chartData = lineChart;
                break;
            default:
                chartData = barChart;
        }

        currentChart = new Chart(ctx, {
            type: type,
            data: chartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function changeChartType(type) {
        renderChart(type);
    }

    // Initial chart rendering
    renderChart('bar');

    // Attach the changeChartType function to window for global access
    window.changeChartType = changeChartType;
});
