const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'red';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
}

canvas.addEventListener('mousemove', draw);
// A user is drawing if they're pressing the mouse button
canvas.addEventListener('mousedown', () => (isDrawing = true));
// If a user hasn't pressed the mouse button, it doesn't count as drawing
canvas.addEventListener('mouseup', () => (isDrawing = false));
// Make sure we don't count as "drawing" when a user's pointer is out of the viewport
canvas.addEventListener('mouseout', () => (isDrawing = false));
