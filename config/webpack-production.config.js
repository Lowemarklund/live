const path = require('path');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  entry: [
    path.join(__dirname, '/../app/src/js/main.js'),
  ],
});

module.exports = config;
