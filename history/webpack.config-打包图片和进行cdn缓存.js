let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css为link标签 并且注入到build/index.html中
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    optimization: { // 优化项
        minimizer: [
            new UglifyJsPlugin({ // 压缩JS
                cache: true,
                parallel: true, // 是否处罚多个
                sourceMap: true // 比如ES6压缩成ES5 后用于源码映射
            }),
            new OptimizeCss() // 压缩css
        ]
    },
    mode: "development", // 模式
    entry: './src/index.js', // 入口
    output: {
        filename: "bundle.[hash:5].js", // 打包后的文件名
        path: path.resolve(__dirname, 'build'), // 路径必须是一个绝对路径
        // publicPath: "www.baidu.com" // 相当于放在cdn服务器上进行缓存,
        // 打包后自动放在cdn上 这是全局css,js和img，如果只是想处理图片就注释这里，加在图片上
    },
    plugins: [ // 放着webpack所有的插件
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true, // 删除html中的双引号
                collapseWhitespace: true // html打包为一行
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        // new webpack.ProvidePlugin({ // 在每个模块中都注入$符号
        //     $: 'jquery'
        // })
    ],
    externals: {
        'jquery': 'jQuery'
    },
    module: { // 模块
        rules: [ // 规则 css-loader 解析@import这种语法的
            // { // loader 默认从右向左执行 向下向上执行
            //     test: /\.js$/,
            //     use: {
            //         loader: 'eslint-loader',
            //         options: {
            //             'enforce': 'pre' // pre 向下向上执行强制优先执行在普通loader之前  post在普通loader之后执行
            //         }
            //     },
            // },
            // {
            //     test: require.resolve('jquery'),
            //     use: 'expose-loader?$'
            // },
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 1,
                        outputPath: '/img/',
                        publicPath: 'www.lynnli.com.cn'
                    }
                },
                // 做一个限制，当我们的图片小于多少K的时候 用base64来转换
                // 否则用file-loader产生真实的图片
            },
            {
                test: /\.js$/, // 普通loader
                use: {
                    loader: "babel-loader",
                    options: { // 用babel-loader 需要把ES6->ES5 使用@babel/preset-env插件
                        presets: [
                            '@babel/preset-env'
                        ],
                        "plugins": [
                            ["@babel/plugin-proposal-decorators", {"legacy": true}], // 属性装置器
                            ["@babel/plugin-proposal-class-properties", {"loose": true}], // 类装置器
                            '@babel/plugin-transform-runtime' //babel 编译时只转换语法，几乎可以编译所有时新的 JavaScript 语法，但并不会转化BOM里面不兼容的API
                            // 比如 Promise,Set,Symbol,Array.from,async 等等的一些API
                            // 等等的一些API这时候就需要 polyfill 来转转化这些API
                        ]
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // 创建link标签
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, // 创建link标签
                    'css-loader', // @import 路径解析
                    'postcss-loader',
                    'less-loader' // 把less -> css
                ]
            }
        ]
    }
    // devServer: { // 开发服务器的配置
    //     port: 3000,
    //     progress: true,
    //     contentBase: './build',
    //     compress: true
    // }
}