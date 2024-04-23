const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = Number(document.getElementById('size').textContent)
let color = document.getElementById('color').value
let isPressed = false
let erase = 'white'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false
    
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed && !e.shiftKey) {

        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2 ,y2)

        x = x2
        y = y2
    }
    else e.shiftKey
})

canvas.addEventListener('mousemove', (e) => {
    if(e.shiftKey && isPressed) {

        const x2 = e.offsetX
        const y2 = e.offsetY

        eraseCircle(x2, y2)
        eraseLine(x, y, x2 ,y2)

        x = x2
        y = y2
    }
    else isPressed
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    color = document.getElementById('color').value
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    color = document.getElementById('color').value
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function eraseCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = erase
    ctx.fill()
}

function eraseLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = erase
    ctx.lineWidth = size * 2
    ctx.stroke()
}

const Button1 = document.getElementById('decrease')

Button1.onclick = SmallerFont;

function SmallerFont() {
    size -= 1

    document.getElementById('size').textContent = size
}

const Button2 = document.getElementById('increase')

Button2.onclick = BiggerFont;

function BiggerFont() {
    size += 1

    document.getElementById('size').textContent = size
}

const fill = document.getElementById('fill');

fill.addEventListener('click', ()=> {
    ctx.beginPath();
    ctx.arc(400, 400, 800, 0, Math.PI * 2)
    color = document.getElementById('color').value
    ctx.fillStyle = color
    ctx.fill()
})