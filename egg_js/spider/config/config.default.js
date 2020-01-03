/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577969541498_5425';

  // add your middleware config here
  config.middleware = ['forbidIp', 'auth'];
  config.forbidIp = ['127.0.0.1', '::1']; // forbidIp中间件的options 参数

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  config.api = 'http://www.phonegap100.com/';

  // session 的配置
  config.session = {
    key: 'sesion_id',
    maxAge: 1000 *15,
    httpOnly: true,
    renew: true // 延期session 的时间
  }

  return {
    ...config,
    ...userConfig,
  };
};
