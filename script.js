
const canvas = document.getElementById('c1');
const ctx = canvas.getContext('2d');
const gradient = ctx.createLinearGradient(0,0, 0,534);

gradient.addColorStop(0, '#395B89');
gradient.addColorStop(.5, '#F2F4F6');
gradient.addColorStop(1, '#F2F4F6');

ctx.strokeStyle = "black";
ctx.lineWidth = "1";

ctx.moveTo(0, 233.8);  // 4

ctx.lineTo(13, 222.54); // 5.4
ctx.lineTo(26, 236.22); // 3.7 
ctx.lineTo(39, 216.9); // 6.1
ctx.lineTo(52, 222.54);  // 5.4
ctx.lineTo(66, 205.64); // 7.5
ctx.lineTo(80, 175.86); // 11.2
ctx.lineTo(93, 175.86); // 11.2
ctx.lineTo(106, 150.9);  // 14.3
ctx.lineTo(119, 159.76); // 13.2 (12.7)
ctx.lineTo(133, 157.35);  // 13.5 (13.2)
ctx.lineTo(146, 160.565);  // 13.1
ctx.lineTo(160, 106.64);  // 19.8
ctx.lineTo(173, 94.57); // 21.3
ctx.lineTo(186, 106.64);  // 19.8
ctx.lineTo(200, 101.01);  //20.5
ctx.lineTo(213, 106.64);  // 19.8
ctx.lineTo(226, 106.64);   // 19.8
ctx.lineTo(239, 96.98);  // 21
ctx.lineTo(252, 90.545);  //21.8
ctx.lineTo(266, 72.84);  //24
ctx.lineTo(280, 68.81);  // 24.5
ctx.lineTo(293, 90.545); //21.8
ctx.lineTo(306, 76.06); //23.6
ctx.lineTo(320, 83.3); //22.7
ctx.lineTo(333, 74.45); //23.8
ctx.lineTo(346, 71.23); //24.2
ctx.lineTo(360, 81.69); //22.9
ctx.lineTo(373, 64.79); //25
ctx.lineTo(386, 60.765); //22.5
ctx.lineTo(400, 94.57); //21.3
ctx.lineTo(413, 94.57); //21.3
ctx.lineTo(426, 74.45);  //23.8
ctx.lineTo(439, 81.69); //22.9
ctx.lineTo(452, 68.81);  // 24.5
ctx.lineTo(465, 72.84);  //24
ctx.lineTo(478, 69.62); //24.4
ctx.lineTo(491, 76.86); //23.5
ctx.lineTo(505, 63.98); //25.1
ctx.lineTo(534, 2);  //33.05

ctx.lineTo(534, 266);
ctx.lineTo(0, 266);
ctx.lineTo(0, 233.8);
ctx.stroke();

ctx.fillStyle = gradient;
ctx.fill();

const divRes = document.querySelector('.graph-result');
const divCrossroad = document.querySelector('.graph-crossroad');

canvas.addEventListener('mousedown', function(e){ 

    let y = e.layerY;
    divRes.innerHTML =(33.05 - (y/8.04841)).toFixed(1) + "%";

    divRes.style.display = "block";
    (e.layerX < 450) ? (divRes.style.left = e.layerX + 5 + 'px') : (divRes.style.left = e.layerX - 60 + 'px');
    (e.layerY < 230) ? (divRes.style.top = e.layerY + 5 + 'px') : (divRes.style.top = e.layerY - 30 + 'px')

    divCrossroad.style.display = "block";
    divCrossroad.style.top = e.layerY + 'px';
    divCrossroad.style.left = e.layerX + 'px';
    console.log(e);
    
});
// canvas.addEventListener('mouseout', function(e){ 
//     divRes.style.display = "none";
//     divCrossroad.style.display = "none";

// });

