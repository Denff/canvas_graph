const graph01 = document.getElementById('myChart').getContext('2d');

const blue_gray_gradient = graph01.createLinearGradient(0, 0, 0, 534);

blue_gray_gradient.addColorStop(0, '#395B89');
blue_gray_gradient.addColorStop(.7, '#F2F4F6');
blue_gray_gradient.addColorStop(1, '#F2F4F6');

const myChart = new Chart(graph01, {
        type: 'line',
        data: {
            labels: [
            '20','40','50','60','70','80','100','110',
            '120','140','150','160','170','180','200','210',
            '220','240','250','260','280','290','300','310',
            '320','340','360','370','380','390','400','410',
            '420','440','460','480','500','510',
            '520','534'
            ],
            datasets: [{
                label: 'Filled',
                backgroundColor: blue_gray_gradient,
                borderColor: 'rgb(75, 192, 192)',
                data: [
                    4.5, 5, 4.5, 6, 5.5, 7.5, 12, 12, 15, 13.8,
                    14.1, 13.1, 22, 23.5, 22, 22.4, 22, 22, 23, 23.5,
                    26, 27, 23.5, 24.5, 23, 24.7, 24.8, 23.2, 26, 22,
                    20, 20, 24, 23.5, 25, 24.4, 24.6, 24, 26, 33.05
                ],
                fill: true,
            }]
        },
        options: {
            plugins: {
            filler: {
                propagate: true,
            },
            title: {
                display: true,
                text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
            }
            },
            interaction: {
            intersect: false,
            }
        }
    }

);


