import BarGraph from './BarGraph.js';
const canva = document.getElementById('chart');
canva.width = 500;
canva.height = 500;
const points = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 1, 2, 3, 4, 5],
};
const pointsSin = {
    x: [], y: []
};
const group = [
    {
        label: "A",
        value: 100
    },
    {
        label: "B",
        value: 15
    },
    {
        label: "C",
        value: 150
    },
];
for (let i = -500; i < 500; i++) {
    pointsSin.x.push(i / 50);
    pointsSin.y.push(Math.sin(i / 10));
}
// DRAW LINE GRAPH
// const chart = new LineGraph(canva, "black", "red", "red");
// chart.draw(pointsSin);
// DRAW BAR GRAPH
const chart = new BarGraph(canva, group);
chart.draw();
//# sourceMappingURL=index.js.map