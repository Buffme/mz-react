const path = require('path');
const rewireLess = require('react-app-rewire-less')

module.exports = function(config, env) {

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }

  // 支持 less
  config = rewireLess(config, env);

  return config;
}
