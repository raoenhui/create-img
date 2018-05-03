var Canvas=require('canvas');
module.exports = function (params) {
  let {shape,width,height,bgColor}=params;
  if(shape=='circle'){
    //圆形
     height=width;
      var canvas = new Canvas(width, width);
      var  ctx = canvas.getContext('2d');
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      ctx.beginPath();
      ctx.arc(width,width,width,0,2*Math.PI);
      ctx.stroke();
  }else{
    //矩形
      var canvas = new Canvas(width, height);
      var  ctx = canvas.getContext('2d');
      ctx.fillStyle = "rgb(100,0,0)";
      ctx.fillRect(0,0,width,height);
  }

  ctx.fillStyle = bgColor;
  ctx.fillRect(0,0,width,height);
  return canvas.toBuffer();
};
