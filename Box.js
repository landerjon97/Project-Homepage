this.Box = function (x, y, size, link, image) {
    this.x = x;
    this.y= y;
    this.size=size;
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