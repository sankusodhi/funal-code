window.onload = function() {
    const ctx = document.getElementById('funnelChart').getContext('2d');

    const data = {
        labels: [
            'Visitors',
            'Leads',
            'Prospects',
            'Customers'
        ],
        datasets: [{
            label: 'Traffic Funnel',
            data: [5000, 3000, 1000, 400],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0'
            ]
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                enabled: true
            }
        }
    };

    const funnelChart = new Chart(ctx, {
        type: 'funnel',
        data: data,
        options: options
    });
};
