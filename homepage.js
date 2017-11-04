var circles= [];
var player;
var left = false;
var right= false;
var up = false;
var down= false;
window.onload = function(){
    c = document.getElementById("can");
    ctx = c.getContext("2d");
    window.addEventListener('resize',resizeCanvas, false);
    resizeCanvas();
    player = new Player();
    setInterval(draw,1);
}
function resizeCanvas(){
    can.width = window.innerWidth;
    can.height = window.innerHeight;   
}

function draw()
{
    
    var makeOne = Math.floor(Math.random() * 10);
    if(makeOne== 1 && circles.length<= 150){
        circles.push(new DrawCircles());
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,can.width, can.height);
    player.drawit()
    
    for(var i = 0; i <= circles.length; i++){
         if(circles[i].start >= can.height + circles[i].radius*2){
             circles.splice(i,1,new DrawCircles());
         }
         else{
             circles[i].drawit();
         }
     }
}

