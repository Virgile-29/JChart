import Chart from './Chart';
const canva = document.getElementById('chart');
const points = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 1, 2, 3, 4, 5],
};
// const scale = 20;
// const pointSize = 2.5;
canva.width = 500;
canva.height = 500;
const chart = new Chart(canva);
chart.draw(points);
// const ctx = canva.getContext('2d');
// ctx.fillStyle = 'black';
// // Draw x-axis
// ctx.beginPath();
// ctx.moveTo(0, canva.height / 2);
// ctx.lineTo(canva.width, canva.height / 2);
// ctx.stroke();
// // Draw y-axis
// ctx.beginPath();
// ctx.moveTo(canva.width / 2, 0);
// ctx.lineTo(canva.width / 2, canva.height);
// ctx.stroke();
// // Draw origin
// ctx.beginPath();
// ctx.arc(canva.width / 2, canva.height / 2, pointSize, 0, 2 * Math.PI);
// ctx.fill();
// // Draw points
// ctx.fillStyle = 'red';
// points.x.forEach((x, i) => {
//     ctx.beginPath();
//     ctx.arc(x * scale + canva.width / 2, -points.y[i] * scale + canva.height / 2, pointSize, 0, 2 * Math.PI);
//     ctx.fill();
// });
// // Draw lines
// ctx.strokeStyle = 'red';
// ctx.beginPath();
// //ctx.moveTo(points.x[0] * scale + canva.width / 2, -points.y[0] * scale + canva.height / 2);
// points.x.forEach((x, i) => {
//     ctx.lineTo(x * scale + canva.width / 2, -points.y[i] * scale + canva.height / 2);
// });
// ctx.stroke();
