var circles= [100];
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
     for(var i = 0; i <= 100; i++){
         circles[i].drawit();
     }
}
function makeCircles(){
    for(var i = 0; i <= 100; i++){
        var randSpeed = Math.random() * 2.1;
        var randStarty = Math.random() * can.width;
        var randRadius= Math.random() * 20;
        circles[i] = new drawCircle(randSpeed,randStarty,randRadius);
    }
}

function drawCircle(randSpeed, randStarty, randRadius){
    this.start = 0;
    this.speed = randSpeed;
    this.starty = randStarty;
    this.radius = randRadius;
    this.drawit = function(){
        ctx.beginPath();
        ctx.arc(this.starty, (can.height - this.radius) - this.start ,this.radius,0,2*Math.PI);
        ctx.strokeStyle = "red";
        ctx.stroke();
        this.start+=this.speed;
    };
}
