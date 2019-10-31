let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css为link标签 并且注入到build/index.html中
let OptimizeCss = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        path: path.resolve(__dirname, 'build') // 路径必须是一个绝对路径
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
            filename: 'main.css'
        })
    ],
    module: { // 模块
        rules: [ // 规则 css-loader 解析@import这种语法的
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