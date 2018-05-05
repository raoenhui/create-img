var Canvas=require('canvas');
module.exports = function (params) {
  let {shape,width,height,bgColor}=params;
    var canvas = new Canvas(width,width);
    var  ctx = canvas.getContext('2d');
  if(shape=='circle'){
    //圆形

    ctx.beginPath();
    ctx.fillStyle = bgColor;
    ctx.arc(width/2, width/2, width/2, 0, 2*Math.PI, true);
    ctx.fill();

    }else{
      //矩形
          ctx.fillStyle = bgColor;
         ctx.fillRect(0,0,width,height);
    }


  return canvas.toBuffer();
};
