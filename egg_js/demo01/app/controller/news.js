const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = '新闻页面';
    const msg = '新闻页';
    // const newsList = [1, 2, 3];
    const { ctx } = this;
    const newsList = await this.service.newslist.index();

    console.log(this.config.baseURL)
    await ctx.render('news.html', {
      msg,
      newsList
    });
  }
  
  async newsList() {
    console.log(this.ctx.query);
    console.log(this.ctx.params)
    this.ctx.body = '新闻列表';
  }
}

module.exports = NewsController;
