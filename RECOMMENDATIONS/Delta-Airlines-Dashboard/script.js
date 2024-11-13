 // Chart Data
        const monthlyData = [
            { month: 'Jan', spend: 21706.44 },
            { month: 'Feb', spend: 22738.06 },
            { month: 'Mar', spend: 16883.63 },
            { month: 'Apr', spend: 17448.75 },
            { month: 'May', spend: 23649.44 },
            { month: 'Jun', spend: 20767.52 },
            { month: 'Jul', spend: 22474.18 },
            { month: 'Aug', spend: 21224.68 },
            { month: 'Sep', spend: 24336.16 },
            { month: 'Oct', spend: 10852.35 }
        ];

        // Create Chart
        const ctx = document.getElementById('spendChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyData.map(d => d.month),
                datasets: [{
                    label: 'Monthly Spend',
                    data: monthlyData.map(d => d.spend),
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.1,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: value => '$' + value.toLocaleString()
                        }
                    }
                }
            }
        });