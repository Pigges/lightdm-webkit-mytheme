import "./lib/main.js";

let draw = turea.draw
let totalWidth = window.innerWidth;
let totalHeight = window.innerHeight;

window.onload = function() {
    start()
}

function start() {
    window.canvas = turea.init(totalWidth, totalHeight);
    window.ctx = window.canvas.getContext('2d')  
    requestAnimationFrame(animate);
}

function animate() {
    draw.clearScreen();
    draw.circle(turea.mouse.x, turea.mouse.y, 50, "red");
    draw.text(20, totalHeight-20, 20, turea.clock(), "blue")
    requestAnimationFrame(animate);
}