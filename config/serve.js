const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const mockjs = require('express-mockjs');

const path = require('path');

const app = express();
const config = require('./webpack.serve.js');
const compiler = webpack(config);


const fs = require('fs');
app.use(express.static(path.join(__dirname, '../dist')));
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));


const apitest = require('../mock/apitest');
app.use('/apitest', apitest);
app.use('/mapi', mockjs(path.join(__dirname, '../mock')));


// Serve the files on port 9191.
app.listen(8899, function () {
  console.log('app listening on port 8899!\n');
});
