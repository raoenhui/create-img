
// const render = require('./lib/render');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

const getCanvas = require('./canvas.js');


// "database"

const posts = [];

// middleware

app.use(logger());

// app.use(render);

app.use(koaBody());

// route definitions

router.get('/:size/:shape/:bg', list)
  .get('/', list);

app.use(router.routes());

/**
 * Post listing.
 */

 function list(ctx) {
  var sizeAry=ctx.params.size?ctx.params.size.split('x'):[200,200];
  var shape=ctx.params.shape?ctx.params.shape:'rectangle'; //'rectangle||circle'
  var bgColor=ctx.params.bg?`#${ctx.params.bg}`:`#e83632`;

  var imgBuffer=getCanvas({width:Number(sizeAry[0]),height:Number(sizeAry[1]),shape,bgColor});
  ctx.type="image/jpg"
  ctx.status = 200;
  ctx.body = imgBuffer;
}



// listen

if (!module.parent) app.listen(3000);
