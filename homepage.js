/*
Project: Home Page
Author: Jonathan Lander
Other: Create web page for launching websites as well as putting more project
I've already completed up.
 */


var circles= [];
var c;
var ctx;
var box = [];
var d = 5;
var image = [];

window.onload = function(){
    image[0] = new Image();
    image[0].src = 'Images/amazon.png'
    image[1] = new Image();
    image[1].src = 'Images/facebook.png'
    c = document.getElementById("can");
    ctx = c.getContext("2d");
    window.addEventListener('resize',resizeCanvas, false);
    resizeCanvas();
    box[0] = new Box(c.width/d, c.height/d, c.height/10,"https://www.facebook.com", image[0]);
    box[1] = new Box(c.width/d + (box[0].size + (c.width/30)), c.height/d, c.height/10,"https://www.facebook.com", image[1]);
   // box[2] = new Box(c.width/d + ((box[0].size * 2)+ (c.width/30)*2), c.height/d, c.height/10, "black","Clarion"
//        , "https://www.clarion.edu");
    //box[3] = new Box(c.width/d + ((box[0].size*3 )+ (c.width/30)*3), c.height/d, c.height/10, "black","Facebook"
//        , "https://www.facebook.com");
    c.addEventListener('click', function(e){
        if(e.pageX >=box[0].x && e.pageX <=box[0].x +box[0].size && e.pageY >= box[0].y && e.pageY <= box[0].y +box[0].size){
            window.location = box[0].link;
        }

    });
    setInterval(draw,25);

}
function resizeCanvas(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    box[0] = new Box(c.width/d, c.height/d, c.height/10, "red","Youtube", "http://www.youtube.com");
    box[1] = new Box(c.width/d + (box[0].size + c.width/10), c.height/d, c.height/10, "blue","Facebook", "https://www.facebook.com");
    //box[2] = new Box(c.width/d + ((box[1].size*2) + c.width/10), c.height/d, c.height/10, "black","Clarion", "https://www.clarion.edu");
    //box[3] = new Box(c.width/d + ((box[2].size*3) + c.width/10), c.height/d, c.height/10, "black","Facebook", "https://www.facebook.com");
}

function draw()
{
    ctx.fillStyle="White";
    ctx.fillRect(0,0,c.width, c.height);
    for(var i = 0; i <= 1; i++){
        box[i].drawIt();
    }
    ctx.save();
    var makeOne = Math.floor(Math.random() * 10);
    if(makeOne== 1 && circles.length<= 150){
        circles.push(new DrawCircles());
    }

    for(var i = 0; i < circles.length; i++){
         if(circles[i].start >= c.height + circles[i].radius*2){
             circles.splice(i,1,new DrawCircles());
         }
         else{
             circles[i].drawIt();
         }
     }
     ctx.restore();
}
