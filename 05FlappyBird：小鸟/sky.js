
function Sky(ctx,x,y,img,speed,a) {
    // TODO: 准备小鸟对象所需要的数据
    this.waitTime = 0; // 累积小图等待的时间。
    this.ctx=ctx;
    this.x=x;
    this.y=y;
    this.img=img;
    this.speed=speed;
    this.a=a;
    this.index=0;

}

 
 Sky.prototype.draw = function(){
                                   //绘制天空 
     this.ctx.drawImage(this.img,
                this.x,this.y      //将图片放到画布
                                );
  
};
Sky.prototype.scount=function(count){
  Sky.count=count;                //设置天空图片数量
}

 Sky.prototype.update = function (dt) {
    
    this.x=this.x-this.speed*dt;    
    if(this.x<-800){  //如果图片刚好移出画布，就向右抽回
      this.x=this.x+800*Sky.count; //图片向右移动的距离
    }

};

