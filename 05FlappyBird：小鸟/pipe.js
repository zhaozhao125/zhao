/*
* @Author: Administrator
* @Date:   2016-08-22 11:11:19
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-22 16:05:31
*/


function Pipe(ctx,x,imgup,imgdown,speed,a) {
    // TODO: 准备小鸟对象所需要的数据
    this.waitTime = 0; // 累积小图等待的时间。
    this.ctx=ctx;
    this.x=x;
   
    this.imgup=imgup;
    this.imgdown=imgdown;

    this.speed=speed;
    this.a=a;
    this.index=0;
    this.height=Math.random()*200+100;
}

 
Pipe.prototype.draw = function(){
 
     this.ctx.drawImage(this.imgdown,
                this.x, this.height-420
                                );
     this.ctx.drawImage(this.imgup,
                this.x,this.height+150
                                );
};
Pipe.prototype.scount=function(count,space){
 Pipe.count=count;
 Pipe.space=space;
}
 
Pipe.prototype.update = function (dt) {
   
    this.x=this.x-this.speed*dt;
    if(this.x<-52){
      // this.x=this.x+52*Pipe.count+Pipe.space;
      this.x=this.x+Pipe.space*Pipe.count;
         this.height=Math.random()*200+100;

    }

};

Pipe.prototype.texts=function(x,y){
  return (this.x<x&&x<this.x+52)&&( !(y>this.height&&y<this.height+150) )

}
