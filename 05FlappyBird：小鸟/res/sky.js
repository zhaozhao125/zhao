/*
* @Author: Administrator
* @Date:   2016-08-21 20:29:11
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-21 20:31:42
*/

// 创建小鸟的构造函数
/*
 * 小鸟的参数表：
 * 1. 小鸟的初始位置(x,y)。注意，小鸟真正动起来时，只有y轴坐标在变
 * 2. img：小鸟图片。 (imgELs.birds)
 * 3. index : 小鸟自身应该显示第几张小图。 （小鸟一共有3张小图，宽高是“52 × 45”）
 * 4. speed和a：小鸟的速度和加速度。我们算小鸟的位置时，应该是这样的了：
 *   speed = speed + a × dt;  速度是根据加速度和时间算出来的。
 *   s = speed × dt; 路程是根据速度和时间算出来的。
 *   y = y + s; 位置是根据路程算出来的。(纵轴的位置)
 * */
  // var cvs = document.getElementById('cvs');
  //   var ctx = cvs.getContext('2d');
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
  // TODO:绘制小鸟 （不需要有旋转）
     this.ctx.drawImage(this.img,
                0, 0, 800, 600, 
                 this.x,this.y, 800, 600
                                );
  
};

 Sky.prototype.update = function (dt) {
    // 我们原来是一帧切换一张小图。昨天写的一帧是100毫秒。
    // 但是现在我们的一帧，约为16.67毫秒，所以小图切换的速度，就太快了。
    // r如何解决这个问题呢？
    // this.waitTime += dt;
    // if (this.waitTime >= 100) { // 等停在这给index上的时间超过100毫秒，再做切换
    //     // 现在的思路是：
    //     //      等待一百毫秒后，切换小图，然后用来累积等待时间的变量减去100毫秒。
    //     this.index++;
    //     if (this.index > 7) {
    //         this.index = 0;
    //     }
    //     this.waitTime -= 100;
    // }
    // TODO : 小鸟的下落动画
   
    // this.speed= this.speed + this.a*dt;
    
    // this.speed=this.speed+this.a*dt;
    // this.y=this.y+this.speed*dt;
  

    this.x=this.x-3;
    if(this>799){
        this.x=0;
    }

};


// var bird=new Bird(ctx,0,0,imgELs.birds,0.05,0.01);
