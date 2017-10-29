this.Player = function()
{
    this.radius = 10;
    this.color = "white";
    this.y = 30;
    this.x = 30;
    this.speed = 5;
    this.drawit = function(){
        ctx.beginPath();
        ctx.arc(this.x,this.y ,this.radius,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        
    };

}