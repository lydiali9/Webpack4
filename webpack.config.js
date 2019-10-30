let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
        })
    ],
    module: { // 模块
        rules: [ // 规则 css-loader 解析@import这种语法的
            {
                test: /\.css$/,
                use: [
                    // style-loader用于将css插入到head的body中
                    // loader单一
                    // 多个loader需要一个数组
                    // loader是需要顺序的， 默认是从右向左执行
                    {
                        loader: "style-loader",
                        // options: {
                        //     insertAt: 'top' // 指定自定义的css标签插入到 webpack打包后的css文件的上面，提高优先级
                        // }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // style-loader用于将css插入到head的body中
                    // loader单一
                    // 多个loader需要一个数组
                    // loader是需要顺序的， 默认是从右向左执行
                    {
                        loader: "style-loader",
                    },
                    'css-loader', // @import 路径解析
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