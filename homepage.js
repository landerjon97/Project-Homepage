var circles = new Array(20);
window.onload = function(){
    c = document.getElementById("can");
    ctx = c.getContext("2d");
    window.addEventListener('resize',resizeCanvas, false);
    resizeCanvas();
    makeCircles();
    setInterval(draw,5);
}


function resizeCanvas(){
    can.width = window.innerWidth;
    can.height = window.innerHeight;
    
}

function draw()
{

    ctx.fillStyle="black";
    ctx.fillRect(0,0,can.width, can.height);
     for(var i = 0; i <= circles.length; i++){
         circles[i].drawit();
     }
}
function makeCircles(){
    for(var i = 0; i <= circles.length; i++){
        var randSpeed = Math.random() * 2.1;
        var randStarty = Math.random() * can.width;
        var randRadius= Math.random() * 20;
        circles[i] = new drawCircle(randSpeed,randStarty,randRadius);
    }
}

function drawCircle(randSpeed, randStarty, randRadius){
    this.speed = randSpeed;
    this.starty = randStarty;
    this.radius = randRadius;
    function drawit(){
        ctx.beginPath();
        ctx.arc(starty, (can.height - radius) - speed ,radius,0,2*Math.PI);
        ctx.strokeStyle = "red";
        ctx.stroke();
        speed+=speed;
    };
}
