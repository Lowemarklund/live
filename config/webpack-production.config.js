const path = require('path');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  entry: [
    path.join(__dirname, '/../server/index.js'),
  ],
});

module.exports = config;
