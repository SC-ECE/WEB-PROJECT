let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let undoBtn = document.querySelector(".undo");
let clearBtn = document.querySelector(".clear");
let sizeEl = document.querySelector(".size");

let colorEl = document.querySelector(".color");
colorEl.value = "black";

let size = 10;
let isPressed = false;
let x, y;
let undo = [ctx.getImageData(0, 0, canvas.width, canvas.height)];

let color = colorEl.value;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    drawCircle(x, y);
})

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = null;
    y = null;
    undo.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
})

canvas.addEventListener("mousemove", (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
})

function updateSizeOnScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;
  if(size > 50) {
    size = 50;
  }
  updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;
  if(size < 5) {
    size = 5;
  }
  updateSizeOnScreen();
});

undoBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(undo.length > 0 && !(undo.length - 2 < 0)){
        ctx.putImageData(undo[undo.length - 2], 0, 0);
        undo.pop();
    }
});

colorEl.addEventListener("change", () => { color = colorEl.value});

clearBtn.addEventListener("click", () => {
    undo = [ctx.getImageData(0, 0, canvas.width, canvas.height)];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})