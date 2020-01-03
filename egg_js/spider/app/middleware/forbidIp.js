module.exports = (options) => {
  return async (ctx, next) => {
    const forbidIPs = options;
    // console.log(forbidIPs);
    const targetIp = ctx.request.ip; // 得到用户ip
    const index = forbidIPs.indexOf(targetIp); // 判断用户ip 是否在被禁用ip 中
    if (index !== -1) {
      // 禁用ip
      ctx.status = 403
      ctx.body = '你的ip 已经被禁用了。'
    } else {
      // 执行下一个中间件
      await next()
    }
  }
}