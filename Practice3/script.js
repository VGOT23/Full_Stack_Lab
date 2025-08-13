
const svg = document.getElementById('canvas');
const shapeSelect = document.getElementById('shape');
let drawing = false, startX, startY, shape;

svg.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    if (shapeSelect.value === 'line') {
        shape = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        shape.setAttribute('x1', startX);
        shape.setAttribute('y1', startY);
        shape.setAttribute('x2', startX);
        shape.setAttribute('y2', startY);
    } else {
        shape = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        shape.setAttribute('x', startX);
        shape.setAttribute('y', startY);
        shape.setAttribute('width', 0);
        shape.setAttribute('height', 0);
        shape.setAttribute('fill', 'transparent');
    }
    shape.setAttribute('stroke', 'black');
    svg.appendChild(shape);
});

svg.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    if (shape.nodeName === 'line') {
        shape.setAttribute('x2', e.offsetX);
        shape.setAttribute('y2', e.offsetY);
    } else {
        let x = Math.min(startX, e.offsetX);
        let y = Math.min(startY, e.offsetY);
        let w = Math.abs(e.offsetX - startX);
        let h = Math.abs(e.offsetY - startY);
        shape.setAttribute('x', x);
        shape.setAttribute('y', y);
        shape.setAttribute('width', w);
        shape.setAttribute('height', h);
    }
});

svg.addEventListener('mouseup', () => drawing = false);