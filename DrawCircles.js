/*
Project: Home Page
Author: Jonathan Lander
Other: Create web page for launching websites
 */
//draws the circle this is in an array in main function

this.DrawCircles = function(){
    //start x at zero
    this.start = 0;
    //speed is random
    this.speed = Math.random() * ((c.height/325) - .5) +.5;
    //where is starts on the y axis is random as well
    this.starty = Math.random() * c.width;
    //radius is based off the width of ones screen
    this.radius = Math.random() * (c.width/60);
    //colors are random
    this.r = Math.floor(Math.random() * 200);
    this.g = Math.floor(Math.random() * 200);
    this.b = Math.floor(Math.random() * 200);
    this.a = Math.random() * (1 - .5) + .3;
    //just draws the circles with a shadow
    this.drawIt = function(){
        ctx.beginPath();
        ctx.arc(this.starty, (c.height + this.radius) - this.start ,this.radius,0,2*Math.PI);
        ctx.fillStyle = 'rgba('+ this.r+ ','+ this.g + ',' + this.b +',' + this.a+ ')';
        ctx.fill();
        ctx.shadowColor = "black";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
        ctx.closePath();
        this.start+=this.speed;
    };
}