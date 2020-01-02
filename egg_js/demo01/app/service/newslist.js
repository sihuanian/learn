'use strict';

const Service = require('egg').Service;

class NewslistService extends Service {
  async index() {
    const list = [111, 222, 333];
    return list;
  }
}

module.exports = NewslistService;
