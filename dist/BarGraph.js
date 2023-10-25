/**
 * BarGraph with HTMLCanvasElement.
    * @param canva HTMLCanvasElement
    * @param data Array<{ label: string, value: number }>
    *TODO:  FIND A WAY TO DISPLAY THE SCALE VALUES PROPORTIONALLY
    *       TO THE CANVA SIZE AND DATA VALUES WITH /10 SCALE VALUES
    *TODO: Add Configuration to customize Style
 */
export default class BarGraph {
    /**
     * Construct a BarGraph Canva
     * @param canva HTMLCanvasElement
     * @param data Array<{ label: string, value: number }>
     */
    constructor(canva, data) {
        this.canva = canva;
        this.data = data;
        // Attempt to shrink the canva to fit the labels and scale values
        this.scaledDataValues = [];
        this.scaleValuesY = [];
        this.initContext();
        this.ascendingOrder();
        this.scaleDataValuesToCanvaSize();
        this.initFrame();
        this.setScaleValuesY();
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
    /**
     * Adjust data values to the canva size
     */
    scaleDataValuesToCanvaSize() {
        const scale = this.getCoefficient();
        for (let i = 0; i < this.data.length; i++) {
            this.scaledDataValues.push(this.data[i].value * scale);
        }
        console.log(this.scaledDataValues);
    }
    getCoefficient() {
        const max = this.data[this.data.length - 1].value;
        return this.canva.height / max;
    }
    /**
     * Initialize the reduced frame of the canva
     */
    initFrame() {
        this.frame = {
            width: this.canva.width * 0.9,
            height: this.canva.height
        };
    }
    /**
     * Set the scale values for the y-axis
     */
    setScaleValuesY() {
        const valuesAmount = 10;
        const max = this.data[this.data.length - 1].value;
        let step = max / valuesAmount;
        // while (step % 10 !== 0) {
        //     step++;
        // }
        console.log(max);
        for (let i = 0; i < valuesAmount; i++) {
            this.scaleValuesY.push(i * step);
        }
        console.log(this.scaleValuesY);
    }
    ascendingOrder() {
        this.data.sort((a, b) => a.value - b.value);
        this.scaledDataValues.sort((a, b) => a - b);
    }
    descendingOrder() {
        this.data.sort((a, b) => b.value - a.value);
        this.scaledDataValues.sort((a, b) => b - a);
    }
    draw() {
        const ctx = this.ctx;
        ctx.lineWidth = 4;
        // Draw x-axis
        ctx.strokeStyle = "yellow"; // TODO: Add to config
        ctx.beginPath();
        ctx.moveTo(0, this.canva.height);
        ctx.lineTo(this.canva.width, this.canva.height);
        ctx.stroke();
        // Draw y-axis
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, this.canva.height);
        ctx.stroke();
        // Draw bars
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black"; // TODO: Add to config
        ctx.fillStyle = "red"; // TODO: Add to config
        const barWidth = this.canva.width / this.data.length;
        // Sort data by descending order before rendering
        this.ascendingOrder();
        for (let i = 0; i < this.scaledDataValues.length; i++) {
            const barValue = this.scaledDataValues[i];
            const x = i * barWidth;
            const y = this.canva.height - (barValue);
            ctx.fillRect(x, y, barWidth, barValue);
            ctx.strokeRect(x, y, barWidth, barValue);
        }
        // Draw scale text on y-axis
        ctx.font = "20px Arial"; // TODO: Add to config 
        ctx.fillStyle = "black"; // TODO: 
        ctx.textAlign = "center";
        ctx.fillText("0", 10, this.canva.height);
        // Draw a small line on the y-axis to indicate the scale
        ctx.beginPath();
        ctx.moveTo(0, this.canva.height);
        ctx.lineTo(10, this.canva.height);
        ctx.stroke();
        this.scaleValuesY.forEach((value, i) => {
            ctx.fillText(value.toString(), 20, this.canva.height - (i * this.canva.height / this.scaleValuesY.length));
        });
    }
}
//# sourceMappingURL=BarGraph.js.map