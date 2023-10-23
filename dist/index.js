import Chart from './Chart.js';
const canva = document.getElementById('chart');
canva.width = 800;
canva.height = 400;
const points = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 1, 2, 3, 4, 5],
};
const pointsSin = {
    x: [], y: []
};
for (let i = -500; i < 500; i++) {
    pointsSin.x.push(i / 50);
    pointsSin.y.push(Math.sin(i / 10));
    console.log(pointsSin.y);
}
const chart = new Chart(canva, "black", "red", "red");
chart.draw(pointsSin);
//# sourceMappingURL=index.js.map