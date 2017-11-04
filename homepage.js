var circles= [];


window.onload = function(){
    var c = document.getElementById("can");
    var ctx = c.getContext("2d");
    window.addEventListener('resize',resizeCanvas, false);
    resizeCanvas();
<<<<<<< HEAD
    player = new Player();
    setInterval(draw,1);
=======
    setInterval(draw,30);
>>>>>>> 6babea920c0676cfbc2f464878b4e220de83e4fd
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
    ctx.fillStyle="White";
    ctx.fillRect(0,0,can.width, can.height);
    ctx.fillStyle="black";
    ctx.fillRect(40,40,30,20);
    for(var i = 0; i < circles.length; i++){
         if(circles[i].start >= can.height + circles[i].radius*2){
             circles.splice(i,1,new DrawCircles());
             
         }
         else{
             circles[i].drawit();
         }
     }
}
