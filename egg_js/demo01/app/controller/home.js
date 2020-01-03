'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 使用extend/application 中的foo 方法 / 属性
    console.log(this.app.foo());
    console.log(this.app.sihuanian);

    // 使用extend/context 中的foo 方法 / 属性
    console.log(this.ctx.bar());

    // 使用extend/request 中的request 方法 / 属性
    console.log(this.ctx.request.baz());
    // console.log(this.ctx.baz()); 不能使用这种方式调用request 中的方法
 
    // 使用extend/response 中的response 方法 / 属性
    console.log(this.ctx.response.foo());

    // 使用extend/response 中的request 方法 / 属性
    console.log(this.ctx.helper.help());

    ctx.body = 'hi, egg';
  }
  async user() {
    const { ctx } = this;
    ctx.body = 'user 页面'
  }
}

module.exports = HomeController;
