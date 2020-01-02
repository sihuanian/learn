'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // await this.ctx.render('news');
    const list = await this.service.news.getNewsList();
    // console.log(list);
    // this.ctx.body = list.result;
    await this.ctx.render('news', {list: list.result});
  }
  async newsDetail() {
    const aid = this.ctx.query.aid;
    console.log(aid)
    const list = await this.service.news.getNewsDetail(aid);
    // console.log('list*********', list);
    await this.ctx.render('newsDetail', {list: list.result[0].content});
  }
}

module.exports = NewsController;
