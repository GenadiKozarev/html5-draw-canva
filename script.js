const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'red';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    // one-liner:
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue > 360) hue = 0;
}

canvas.addEventListener('mousemove', draw);
// A user is drawing if they're pressing the mouse button
canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    // start drawing from where the user has actually clicked
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
// If a user hasn't pressed the mouse button, it doesn't count as drawing
canvas.addEventListener('mouseup', () => (isDrawing = false));
// Make sure we don't count as "drawing" when a user's pointer is out of the viewport
canvas.addEventListener('mouseout', () => (isDrawing = false));
