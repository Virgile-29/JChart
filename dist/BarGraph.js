export default class BarGraph {
    constructor(canva, data) {
        this.canva = canva;
        this.data = data;
        this.initContext();
        //this.orderDataByValue();
        this.scaleData();
    }
    /**
     * Initialize the context of the canva
     */
    initContext() {
        if (this.canva === null) {
            throw new Error("Canva not found");
        }
        this.ctx = this.canva.getContext('2d');
        if (this.ctx === null) {
            throw new Error("Context not found");
        }
    }
    ascendingOrder() {
        this.data.sort((a, b) => a.value - b.value);
    }
    descendingOrder() {
        this.data.sort((a, b) => b.value - a.value);
    }
    scaleData() {
        const max = this.data.filter((item) => item.value > 0).reduce((acc, item) => acc + item.value, 0);
        const scale = this.canva.height / max;
        console.log(this.canva.height, max);
        for (let i = 0; i < this.data.length; i++) {
            this.data[i].value *= scale;
        }
        console.log(this.data);
    }
    draw() {
        this.ctx.lineWidth = 4;
        // Draw x-axis
        this.ctx.strokeStyle = "yellow";
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canva.height);
        this.ctx.lineTo(this.canva.width, this.canva.height);
        this.ctx.stroke();
        // Draw y-axis
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(0, this.canva.height);
        this.ctx.stroke();
        // Draw scale text on y-axis
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "blue";
        this.ctx.textAlign = "center";
        this.ctx.fillText("0", 20, this.canva.height);
        // Draw bars
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "black";
        this.ctx.fillStyle = "red";
        const spaceBetweenBars = 10;
        const barWidth = this.canva.width / this.data.length - spaceBetweenBars;
        this.descendingOrder();
        for (let i = 0; i < this.data.length; i++) {
            const bar = this.data[i];
            const x = i * barWidth + spaceBetweenBars;
            const y = this.canva.height - (bar.value);
            this.ctx.fillRect(x, y, barWidth, bar.value);
            this.ctx.strokeRect(x, y, barWidth, bar.value);
        }
    }
}
//# sourceMappingURL=BarGraph.js.map