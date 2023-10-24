import LineGraph from './LineGraph.js';
import BarGraph from './BarGraph.js';

const canva = document.getElementById('chart') as HTMLCanvasElement;
canva.width = 600;
canva.height = 600;
const points = {
    x: [0, 1, 2, 3, 4, 5],
    y: [0, 1, 2, 3, 4, 5],
}

const pointsSin = {
    x: [], y: []
}

const group = [
    {
        label: "A",
        value: 10
    },
    {
        label: "B",
        value: 20
    },
    {
        label: "C",
        value: 30
    },
]

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


