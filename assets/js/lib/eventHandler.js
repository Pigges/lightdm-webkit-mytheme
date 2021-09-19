
// Mouse event

let mouse = {x: -1000, y: -1000, left: false, right: false, middle: false};
let keyboard;

// When the mouse moves
window.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
})

// When a mouse button is down
window.addEventListener("mousedown", function (e) {
  e.which == 1 ? mouse.left = true : e.which == 2 ? mouse.middle = true : e.wich == 3 ? mouse.right = true : null;
})

// When a mouse button is up
window.addEventListener("mouseup", function (e) {
  e.which == 1 ? mouse.left = false : e.which == 2 ? mouse.middle = false : e.wich == 3 ? mouse.right = false : null;
})

// Keyboard event


window.addEventListener("keydown", function (e) {
  if (keyboard[keyboard[e.keyCode]]) return
  keyboard[keyboard[e.keyCode]] = true;
  keysDown++;
  //console.log(keyboard[e.keyCode] + ": " + keyboard[keyboard[e.keyCode]]);
})

window.addEventListener("keyup", function (e) {
  if (!keyboard[keyboard[e.keyCode]]) return
  keyboard[keyboard[e.keyCode]] = false;
  keysDown--;
  //console.log(keyboard[e.keyCode] + ": " + keyboard[keyboard[e.keyCode]]);
})

let keysDown = 0;
// Mapping the keyboard
keyboard =
{
  38: "up",
  40: "down",
  37: "left",
  39: "right",
  32: "space",
  16: "shift",
  18: "alt",
  17: "ctrl",
  13: "enter",
  48: "zero",
  49: "one",
  50: "two",
  51: "three",
  52: "four",
  53: "five",
  54: "six",
  55: "seven",
  56: "eight",
  57: "nine",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  221: "ao",  // Å
  222: "ae",  // Ä
  192: "oi"   // Ö
};

for (let i in keyboard)
  keyboard[keyboard[i]] = false;

export {keyboard, mouse}