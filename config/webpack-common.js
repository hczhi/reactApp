const HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path'),
    glob = require('glob'),
    fs = require('fs'),
    os = require('os'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true',
    CleanWebpackPlugin = require('clean-webpack-plugin'), //清理输出文件夹

    entries = {}, // js入口
    newEntries = {},
    buildRoot = require('./config.js').buildRoot ,
    htmls = glob.sync(require('./config.js').devHtmls),
    htmlCfgs = [], // HtmlWebpackPlugin配置项
    publicPath = require('./config.js').publicPath || 'http://localhost:8899/';

//动态获取入口文件，使得html、js的路径一致

htmls.forEach(filepath => {
    let paths = filepath.split('/'), // 以 src/pages/index/index.html截断成数组为例
        file = paths.pop(), // 如 index.html
        path = paths.join('/') + '/', // 如 src/pages/index
        names = paths[2],
        devPath = path; // 如src/pages/index
        console.log(names);   
    if (names) {
        newEntries[paths[1] + '/' + paths[2]] = [
            __dirname + '/../src/' + paths[1] + '/' + paths[2] + '/index.js',
            hotMiddlewareScript
        ] 

            console.log(__dirname + '/../src/' + paths[1] + '/' + paths[2] + '/index.js');  
        //生成html文件
        htmlCfgs.push(
            new HtmlWebpackPlugin({
                filename: paths[1] + '/' + paths[2], //http访问路径 pages/index
                template: __dirname + '/../src/' + paths[1] + '/' + paths[2] + '/index.html', //实际文件路径
                inject: 'body',
                //templateContent: contentText,
                chunks: ['commons', paths[1] + '/' + paths[2]],
                //排序
                chunksSortMode: 'manual'
            })
        );
    }
});

//独立打包css
htmlCfgs.push(
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    })
);

htmlCfgs.push(
    new webpack.HotModuleReplacementPlugin()
);

// 增加公共js
//newEntries['common'] = '@/page_common.js'

module.exports = {
    mode: 'development',
    entry: newEntries,
    output: {
        path: path.resolve(__dirname, buildRoot),
        filename: 'js/[name].js?v=' + new Date().getTime(),
        publicPath: publicPath
    },

    devtool: 'eval',

    performance: {
        hints: false
    },

    module: {
        //在配置文件里添加JSON loader
        rules: [{
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015'],
                    plugins: ["transform-runtime",["import", { "libraryName": "antd","libraryDirectory": "es","style": "css" }]]
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader?name=[name].[ext]&outputPath=images/&publicPath=/images/']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader?name=font/[name].[ext]'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    //MiniCssExtractPlugin.loader,
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
            },
            // {
            //     test: /\.vue$/,
            //     use: [{
            //         loader: 'vue-loader',
            //         options: {
            //             loaders: {
            //                 scss: 'style-loader!css-loader!sass-loader!postcss-loader'
            //             }
            //         }
            //     }]
            // }
        ]
    },

    //webpack 4.x 新增写法
    optimization: {
        splitChunks: {
            cacheGroups: {
                //打包公共模块
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    minSize: 0, // This is example is too small to create commons chunks
                    name: 'commons'
                },
            }
        }
    },

    resolve: {
        alias: {
            "@lib": path.resolve(__dirname, '../src/lib'),
            "@com": path.resolve(__dirname, '../src/component'),
        }
    },

    plugins: htmlCfgs,

    externals: {
        vue: 'Vue',
        $: '$',
        react: 'React',
        'react-dom':'ReactDOM'
    }
};
