const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 500, 500);
ctx.fillStyle = "black";
let brushSize = "black";
document.getElementById("color").addEventListener("change", function () {
    brushColor = this.value;
})
document.getElementById("thicknes").addEventListener("change", function () {
    brushSize = this.value;
})
let painting = false;
function paintingStart(e) {
    painting = true;
    draw(e);
}
function paintingEnd(e) {
    painting = false;
    ctx.beginPath();
}
canvas.addListner("mousedown", paintingStart);
