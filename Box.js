//c.width/w + (box[0].size + (c.width/30)), c.height/h, c.height/h,"https://www.facebook.com", image[1]
this.Box = function (x, link, image) {
    this.x = x;
    this.y= c.height/h;
    this.size=c.height/h;
    this.link = link;
    this.image = image;
    this.drawIt = function () {
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(this.image, this.x,this.y,this.size,this.size);
        ctx.shadowColor = "black";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 10;
    }

}