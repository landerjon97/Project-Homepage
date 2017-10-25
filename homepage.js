window.onload = function(){
    c = document.getElementById("can");
    ctx = c.getContext("2d");
    function resizeCanvas(){
        can.style.width = window.innerWidth + "px";
       setTimeout(function(){
            can.style.height = window.innerHeight + "px";
        },0); 
    };
    window.onresize = resizeCanvas;
    resizeCanvas();
 
    draw();
}

function draw()
{
    ctx.beginPath();
    
    ctx.arc(can.width / 5, can.height / 5,30,0,2*Math.PI);
    ctx.fillStyle = "red";
    ctx.stroke();
}
