'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    const url = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    const result = await this.ctx.curl(url); // 获取请求路径上的数据
    const data = JSON.parse(result.data); // buffer 转换成对象
    // console.log('==========', data);
    return data;
  }
  async getNewsDetail(aid) {
    const url = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    const result = await this.ctx.curl(url); // 获取请求路径上的数据
    const data = JSON.parse(result.data); // buffer 转换成对象
    return data;
  }
}

module.exports = NewsService;
