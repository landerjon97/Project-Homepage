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
var w = 6;
var h = 6;
var image = [];

window.onload = function(){
    image[0] = new Image();
    image[0].src = 'Images/amazon.png';
    image[1] = new Image();
    image[1].src = 'Images/facebook.png';
    image[2] = new Image();
    image[2].src = 'Images/Clarion.png';
    image[3] = new Image();
    image[3].src = 'Images/Youtube.png';
    image[4] = new Image();
    image[4].src = 'Images/gmail.png';
    c = document.getElementById("can");
    ctx = c.getContext("2d");
    window.addEventListener('resize',resizeCanvas, false);
    resizeCanvas();
    box[0] = new Box(c.width/2,"https://www.amazon.com", image[0]);
    box[1] = new Box(c.width/2*2- (box[0].size/2),"https://www.facebook.com", image[1]);
    box[2] = new Box(c.width/2/.5- (box[0].size/2), "http://www.clarion.edu", image[2]);
   //box[3] = new Box(c.width/1.25 - (box[0].size/2),"https://www.youtube.com", image[3]);
   // box[4] = new Box(c.width/w + ((box[0].size * 4 )+ (c.width/30)*4),"https://gmail.com", image[4]);
    c.addEventListener('click', function(e){
        if(e.pageX >=box[0].x && e.pageX <=box[0].x +box[0].size && e.pageY >= box[0].y && e.pageY <= box[0].y +box[0].size){
            window.location = box[0].link;
        }
        else if(e.pageX >=box[1].x && e.pageX <=box[1].x +box[1].size && e.pageY >= box[1].y && e.pageY <= box[1].y +box[1].size){
            window.location = box[1].link;
        }
        else if(e.pageX >=box[2].x && e.pageX <=box[2].x +box[2].size && e.pageY >= box[2].y && e.pageY <= box[2].y +box[2].size){
            window.location = box[2].link;
        }
        else if(e.pageX >=box[3].x && e.pageX <=box[3].x +box[3].size && e.pageY >= box[3].y && e.pageY <= box[3].y +box[3].size){
            window.location = box[3].link;
        }
        else if(e.pageX >=box[4].x && e.pageX <=box[4].x +box[4].size && e.pageY >= box[4].y && e.pageY <= box[4].y +box[4].size){
            window.location = box[4].link;
        }

    });
    setInterval(draw,30);

}
function resizeCanvas(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    box[0] = new Box(c.width/2,"https://www.amazon.com", image[0]);
    box[1] = new Box(c.width/2*2 - (box[0].size/2),"https://www.facebook.com", image[1]);
    box[2] = new Box(c.width/2/.5 - (box[0].size/2), "http://www.clarion.edu", image[2]);
    //box[3] = new Box(c.width/w + ((box[0].size * 3 )+ (c.width/30)*3),"https://www.youtube.com", image[3]);
    //box[4] = new Box(c.width/w + ((box[0].size * 4 )+ (c.width/30)*4),"https://gmail.com", image[4]);
}

function draw()
{
    var radicalGrad = ctx.createRadialGradient(0,0,c.width/2,c.width,c.height,c.width/2);
    radicalGrad.addColorStop(0,"white");
    radicalGrad.addColorStop(1,"gray");
    ctx.fillStyle=radicalGrad;
    ctx.fillRect(0,0,c.width, c.height);

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
    for(var i = 0; i <= 3; i++){
        box[i].drawIt();
    }
    ctx.restore();
}
