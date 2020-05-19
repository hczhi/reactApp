const merge = require('webpack-merge');
const webpackcongig = require('./webpack-common.js');

serveConfig = {
    mode: 'development',
    devtool: 'eval'
};
module.exports = merge([
    webpackcongig,
    serveConfig
])