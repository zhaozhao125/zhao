
function Land(ctx,x,y,img,speed,a) {
   
    this.waitTime = 0; 
    this.ctx=ctx;
    this.x=x;
    this.y=y;
    this.img=img;
    this.speed=speed;
    this.a=a;
    this.index=0;

}

 
Land.prototype.draw = function(){  //绘制大地 
 
     this.ctx.drawImage(this.img,  //将图片放到画布
                this.x,this.y
                                );
  
};
Land.prototype.scount=function(count){
  Land.count=count;           //设置大地图片数量
}

Land.prototype.update = function (dt) {
    
    this.x=this.x-this.speed*dt;
    if(this.x<-336){   //如果图片刚好移出画布，就向右抽回
      this.x=this.x+336*Land.count;  //图片向右移动的距离
    }

};

