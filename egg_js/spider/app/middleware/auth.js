module.exports = app => {
  return async (ctx, next) => {
    // 推荐的命名空间，用于通过中间件传递信息和你的前端视图。csrf 在html 中就可以直接使用
    ctx.state.csrf = ctx.csrf;
    await next();
  }
}