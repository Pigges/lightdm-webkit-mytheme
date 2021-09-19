// Draw a circle
let circle = function(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  }
  
  // Draw a rectangle
  let rectangle = function(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  }
  
  // Draw a triangle
  let triangle = function(x1, y1, x2, y2, x3, y3, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.fill();
  }
  
  // Draw a arc
  let arc = function(x, y, radius, angle, lineWidth, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, -angle * Math.PI / 180, true);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
  }
  
  // Draw some text
  let text = function(x, y, size, text, color, font) {
    ctx.font = size + (font ? (`px ${font}`) : (`px ${defaultFont}`));
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }
  
  // Clear the screen
  let clearScreen = function() {
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

let draw = {circle, rectangle, triangle, arc, text, clearScreen}
export {draw}