'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.home.user);
  router.get('/admin', controller.admin.index);
  router.get('/news', controller.news.index);
  // router.get('/newslist', controller.news.newsList);
  router.get('/newslist/:id', controller.news.newsList);
};
