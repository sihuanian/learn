'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 设置session
    ctx.session.bar = 'session bar';
    // ctx.session.maxAge = 10000; // 设置session 的配置
    ctx.body = 'hi, egg ' + this.ctx.cookies.get('username', {
      encrypt: true // 设置时加密，获取时必须加这个配置
    });
  }
}

module.exports = HomeController;
