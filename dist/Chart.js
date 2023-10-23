export default class Chart {
    constructor(canva, axisColor = "black", lineColor = "black", pointColor = "red") {
        this.ctx = null;
        this.canva = canva;
        this.lineColor = lineColor;
        this.pointColor = pointColor;
        this.axisColor = axisColor;
        this.initContext();
    }
    initContext() {
        if (this.canva === null) {
            throw new Error("Canva not found");
        }
        this.ctx = this.canva.getContext('2d');
        if (this.ctx === null) {
            throw new Error("Context not found");
        }
    }
    draw(coordinates) {
        if (this.ctx === null)
            throw new Error("Context not found");
        if (coordinates.x.length !== coordinates.y.length)
            throw new Error("X and Y coordinates must have the same length");
        if (coordinates.x.length === 0 && coordinates !== undefined)
            throw new Error("Coordinates must not be empty");
        if (coordinates === undefined)
            throw new Error("Coordinates must be defined");
        const scale = 20;
        const pointSize = 1.5;
        // Draw x-axis
        this.ctx.strokeStyle = this.axisColor;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.canva.height / 2);
        this.ctx.lineTo(this.canva.width, this.canva.height / 2);
        this.ctx.stroke();
        // Draw y-axis
        this.ctx.beginPath();
        this.ctx.moveTo(this.canva.width / 2, 0);
        this.ctx.lineTo(this.canva.width / 2, this.canva.height);
        this.ctx.stroke();
        // Draw origin
        this.ctx.beginPath();
        this.ctx.arc(this.canva.width / 2, this.canva.height / 2, pointSize, 0, 2 * Math.PI);
        this.ctx.fill();
        // Draw points
        this.ctx.fillStyle = this.pointColor;
        coordinates.x.forEach((x, i) => {
            this.ctx.beginPath();
            this.ctx.arc(x * scale + this.canva.width / 2, -coordinates.y[i] * scale + this.canva.height / 2, pointSize, 0, 2 * Math.PI);
            this.ctx.fill();
        });
        // Draw lines
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.beginPath();
        coordinates.x.forEach((x, i) => {
            this.ctx.lineTo(x * scale + this.canva.width / 2, -coordinates.y[i] * scale + this.canva.height / 2);
        });
        this.ctx.stroke();
    }
}
//# sourceMappingURL=Chart.js.map