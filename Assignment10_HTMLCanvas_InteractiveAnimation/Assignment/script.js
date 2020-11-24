const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

var clicks = 1;

let cPosX = canvas.width/2;
let cPosY = canvas.height/2;
let cVelX = 3.4;
let cVelY = 4.2;
let cRad = 50;

let cColor = "rgb(255, 200, 0)";

let rSlider = document.getElementById("redSlider");
let gSlider = document.getElementById("greenSlider");
let bSlider = document.getElementById("blueSlider");

function draw () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle();

    moveCircle();

    window.requestAnimationFrame(draw);
}

function drawCircle() {
    context.beginPath();
    context.boxSizing = "border-box";
    context.strokeStyle = "navy";
    context.lineWidth = 5;
    // context.fillStyle = "goldenrod";
    context.fillStyle = cColor;
    context.ellipse(cPosX, cPosY, cRad, cRad, 0, 0, 2*Math.PI);
    context.stroke();
    context.fill();
}

function moveCircle() {
    if(cPosX+cRad >= 800 || cPosX-cRad <= 0){
        cVelX *= -1;
    }

    if(cPosY+cRad >= 600 || cPosY-cRad <= 0) {
        cVelY = cVelY * -1;
    }

    cPosX = cPosX + cVelX;
    cPosY = cPosY + cVelY;
}

draw();

let colorChange = function (){
    console.log("Red: " + rSlider.value + "Green: " + gSlider.value + "Blue: " + bSlider.value);
    cColor = "rgb("+ rSlider.value +", "+gSlider.value +", "+bSlider.value +")";
}

canvas.addEventListener("click", function(event){
    console.log(event);

    let mouseXp = event.pageX - event.target.offsetLeft;
    let mouseYp = event.pageY - event.target.offsetTop;

    console.log("Mouse X: " + mouseXp);
    console.log("Mouse Y: " + mouseYp);

    let distX = Math.abs(cPosX - mouseXp);
    let distY = Math.abs(cPosY - mouseYp);

    if(distX < cRad && distY < cRad) {
        console.log("GOT EM!!!!!");
        console.log(clicks);
        clicks += 1;
    } 
    else {
        console.log("MISSED!! Try again");
    }
});

rSlider.addEventListener("change", colorChange);
gSlider.addEventListener("change", colorChange);
bSlider.addEventListener("change", colorChange);