const merge = require('webpack-merge');
const webpackcongig = require('./webpack-common.js');
const buildRoot = require('./config.js').buildRoot ;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let plugins = [];
//独立打包css
plugins.push(
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    })
);

let serveConfig = {
    mode: 'production',
    devtool: 'cheap-source-map',
    output: {
        path: path.resolve(__dirname, buildRoot),
        filename: 'js/[name].js'
    },
    plugins: plugins,
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    // {
                    //     loader: 'sass-resources-loader',
                    //     options: {
                    //         // Provide path to the file with resources
                    //         resources: [
                    //             './src/sassCore/mixins/mixins.scss',
                    //             './src/sassCore/common/global.scss'
                    //         ]
                    //     }
                    // },
                ]
            }
        ]
    }

};
module.exports = merge([
    webpackcongig,
    serveConfig
])