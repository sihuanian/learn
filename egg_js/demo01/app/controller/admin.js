'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'admin 首页';
  }
}

module.exports = AdminController;
