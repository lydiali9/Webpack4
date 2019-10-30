let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: { // 开发服务器的配置
        port: 3000,
        progress: true,
        contentBase: './build',
        compress: true
    },
    mode: "production", // 模式
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
        })
    ]
}