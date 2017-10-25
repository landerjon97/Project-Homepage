window.onload = function(){
    c = document.getElementById("can");
    ctx = c.getContext("2d");
    document.addEventListener("keydown", keyPush);
    //setting a frame rate
    
    setInterval(game,1000/15);
}
var up = false;
var down = false;
var left = false;
var right = false;
px=py=10;
gs=20;
tc=25;
ax=ay=15;
xv=yv=0;
trail= [];
tail = 5;
function game (){
    //settings speed
    px+=xv;
    py+=yv;
    //wall detection
    if(px<0){
        px = tc-1;
    }
    if(px>tc-1){
        px = 0;
    }
     if(py<0){
        py = tc-1;
    }
    if(py>tc-1){
        py = 0;
    }

    ctx.fillStyle="black";
    ctx.fillRect(0,0,c.width, c.height);
    ctx.fillStyle="lime";

    for(var i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
        if(trail[i].x==px && trail[i].y==py){
            tail=5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length > tail){
        trail.shift();
    }
    if(ax==px && ay == py){
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);

}
function keyPush(evt){
    switch(evt.keyCode){
        case 37:
        left=true;
        if(right == false){
            xv=-1;
            yv=0;
            down = false;
            up = false;
        }
        break;
        
        case 38:
        up = true;
        if(down == false){
            xv=0;
            yv=-1;
            left = false;
            right = false;
        }
        break;

        case 39:
        right=true;
        if(left == false){
            xv=1;
            yv=0;
            down=false;
            up=false;
        }
        break;
        
        case 40:
        down = true;
        if(up == false){
            xv=0;
            yv=1;
            right = false;
            left = false;
        }
        break;


    }
}