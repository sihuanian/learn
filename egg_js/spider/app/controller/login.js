'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    // this.ctx.session.bar 获取session
    await this.ctx.render('login', {crsf: this.ctx.crsf, bar: this.ctx.session.bar});
  }
  async add() {
    // console.log(this.ctx.request.body);
    this.ctx.body = {...this.ctx.query, ...this.ctx.request.body};
    this.ctx.cookies.set('username', this.ctx.request.body.username, {
      maxAge: 1000 * 60 * 24 * 64,
      httpOnly: true,
      signed: true,
      encrypt: true // 默认情况value 不可以是中文，设置加密参数为true, value 就可以是中文
    });
  }
}

module.exports = LoginController;
