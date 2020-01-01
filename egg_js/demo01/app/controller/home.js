'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async user() {
    const { ctx } = this;
    ctx.body = 'user 页面'
  }
}

module.exports = HomeController;
