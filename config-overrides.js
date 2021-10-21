const { resolve } = require('path')

module.exports = function override(config, env) {
  config.externals = { 'sqlite3': 'commonjs sqlite3' };
  config.target = 'electron-renderer';

  return config;
}