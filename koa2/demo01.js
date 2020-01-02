const app = new (require('koa'))()

app.use(async ctx => {
  const url = ctx.url
  const request = ctx.request
  // const query = request.query
  // const querystring = request.querystring
  const query = ctx.query
  const querystring = ctx.querystring
  // console.log(request.method)
  // console.log(ctx.path)
  ctx.set('status', '404')
  ctx.set('Cache-Control', 'no-cache');
  // ctx.type = 'image/jpeg'
  ctx.type = 'image/png';
  
  ctx.body = {
    url,
    query,
    querystring,
    method: ctx.method
  }
  // console.log(ctx.get('Cache-Control'))
  console.log(ctx.type)
})

app.listen(3000)
