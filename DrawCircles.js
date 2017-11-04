this.DrawCircles = function(){
    this.start = 0;
    this.speed = Math.random() * ((c.height/325) - .5) +.5;
    this.starty = Math.random() * c.width;
    this.radius = Math.random() * (c.width/60);
    this.r = Math.floor(Math.random() * 200);
    this.g = Math.floor(Math.random() * 200);
    this.b = Math.floor(Math.random() * 200);
    this.a = Math.random() * (1 - .5) + .3;
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