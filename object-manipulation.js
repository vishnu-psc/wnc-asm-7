var image = document.getElementById('image');
var file = document.getElementById('file');
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var circleMap = new Map();

var moveRight = 10;
var moveLeft = 10;
var moveUp = 10;
var moveDown = 10;



class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
}

function upload() {
    image.src = URL.createObjectURL(file.files[0]);
    document.getElementById('canvas-div').style.backgroundImage = "url('" + image.src + "')";
    canvas.style.opacity = 1;
}

var radius_measurement = canvas.height / 10;
function addCircle(x_measurement, y_measurement, radius_measurement, color) {


    var circle = new Circle(x_measurement, y_measurement, radius_measurement, "red");
    circleMap.set(0, circle);
    ctx.beginPath();
    ctx.fillStyle = circle.color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {
        console.log("Right");

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        addCircle(circleMap.get(0).x + moveRight, circleMap.get(0).y, circleMap.get(0).radius, circleMap.get(0).color);
        console.log(circleMap.get(0).x + moveRight + " " + circleMap.get(0).y + " " + circleMap.get(0).radius + " " + circleMap.get(0).color);


    }
});