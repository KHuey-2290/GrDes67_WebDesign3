const canvas = document.getElementById("Game");
const context = canvas.getContext("2d");

let cPosX = 400;
let cPosY = 300;
let cVelX = 3.4;
let cVelY = 4.2;
let cRad = 60;

function draw () {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.fillStyle = "teal";
    context.ellipse(cPosX, cPosY, cRad, cRad, 0, 0, 2*Math.PI);
    context.stroke();
    context.fill();

    cPosX = cPosX + cVelX;
    cPosY = cPosY + cVelY;

    window.requestAnimationFrame(draw);
}

draw();