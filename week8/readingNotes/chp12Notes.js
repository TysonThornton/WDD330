// Canvas API allows you to draw by using JavaScript
// Can draw shapes, lines, arcs, text, gradients, patterns, and manipulate pixels in images and video

// Grab the canvas element on HTML
var canvas = document.getElementById("myCanvas");

// Set the context – the place where the drawing is rendered. Use getContext method and pass “2d” string
var context = canvas.getContext("2d");

// Fill brush with color - with strokeStyle or fillStyle
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";

// Draw a rectangle by calling fillRect and strokeRect methods - they use X Y coordinates
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

drawGradient();
function drawGradient() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}


function drawCircle(canvas) {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}

