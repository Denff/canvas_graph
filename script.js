


const graph01 = document.getElementById('myChart').getContext('2d');

const blue_gray_gradient = graph01.createLinearGradient(0, 0, 0, 734);

blue_gray_gradient.addColorStop(0, '#395B89');
// blue_gray_gradient.addColorStop(.4, '#395B89');
blue_gray_gradient.addColorStop(.2, '#395B89');
// blue_gray_gradient.addColorStop(.2, '#F2F4F6');
blue_gray_gradient.addColorStop(1, '#F2F4F6');


// var customTooltips = function (tooltip) {
// 			$(this._chart.canvas).css("cursor", "pointer");

// 			var positionY = this._chart.canvas.offsetTop;
// 			var positionX = this._chart.canvas.offsetLeft;

// 			$(".chartjs-tooltip").css({
// 				opacity: 0,
// 			});

// 			if (!tooltip || !tooltip.opacity) {
// 				return;
// 			}

// 			if (tooltip.dataPoints.length > 0) {
// 				tooltip.dataPoints.forEach(function (dataPoint) {
// 					var content = [dataPoint.xLabel, dataPoint.yLabel].join(": ");
// 					var $tooltip = $("#tooltip-" + dataPoint.datasetIndex);

// 					$tooltip.html(content);
// 					$tooltip.css({
// 						opacity: 1,
// 						top: positionY + dataPoint.y + "px",
// 						left: positionX + dataPoint.x + "px",
// 					});
// 				});
// 			}
// 		};



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
                label: 'Доход в %',
                backgroundColor: blue_gray_gradient,
                borderColor: 'rgba(57, 91, 137, 0.3)',
                data: [
                    4.5, 5, 4.5, 6, 5.5, 7.5, 12, 12, 15, 13.8,
                    14.1, 13.1, 22, 23.5, 22, 22.4, 22, 22, 23, 23.5,
                    26, 27, 23.5, 24.5, 23, 24.7, 24.8, 23.2, 26, 22,
                    20, 20, 24, 23.5, 25, 24.4, 24.6, 24, 26, 33.05
                ],
                borderWidth: 1,
                fill: true,
            }]
        },
        options: {

            plugins: {
                tooltip: {
                    bodyFont: {
                        size: 14,
                        family: 'Arial',
                    },
                    // footerFont: {
                        // weight: 'bold',
                    // },
                    bodyColor: '#ffffff',
                    caretPadding: 30,
                    // position: 'nearest',
                    position: 'average',
                    // mode: 'index',
                    // intersect: false,
                    padding: 10,
                    cornerRadius: 4,
                    // xPadding: 40,
                    caretSize: 0,
                    backgroundColor: '#424C57',
                    // titleFontColor: '#f0dd00',
                    // bodyFontColor: 'rgba(255, 255, 12, 1)',
                    // borderColor: 'rgba(250,200,200,1)',
                    // borderWidth: 4,
                    // custom: customTooltips
                },
                legend: {
                    labels: {
                        font: {
                            size: 24
                        }
                    }
                },
                filler: {
                    propagate: true,
                },
                title: {
                    display: false,
                    text: (ctx) => 'Fill: ' + ctx.chart.data.datasets[0].fill
                }
            },
            pointStyle: 'circle',
            radius: 1,
            layout: {
                padding: 70
            },
            interaction: {
                intersect: false,
            }

        }
    }

);


