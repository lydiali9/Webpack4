// webpack打包图片
// 1. 在js中创建图片来引入
// file-loader 默认会在内部生成一张图片 到build目录下， 把生成的图片的名字返回回来
// import logo from './logo.PNG';
import './index.css';
// let logo = require('./logo.PNG');
debugger
// let logo = require('./logo.PNG'); // 把图片引入，返回的结果是一个新的图片地址
// let img = new Image();
// img.src = logo;
// document.body.appendChild(img);
// 2. 在css中引入background('url')
// 3. <img src="" alt="" />

// import $ from 'jquery'; //console.log(window.$); // undefine 每次打包都会被引入
// import $ from 'expose-loader?$!jquery'; // console.log(window.$);  == console.log($); // 或者可以配置到modules.rules中
// console.log($); // 在每个模块中注入$对象
// expose-loader 暴露全局的loader 内联的loader
// pre 前面执行的loader  normal 普通loader     内联loader 后置 post-loader
// console.log(window.$); // undefine

/*1. expose-loader 暴露到window上；
2. ProvidePlugin给每个人提供一个$
3. externals 引入不打包*/

// let str = require("./a.js");
//
// require('./index.css');
// require('./index.less');
//
// console.log(str);
//
// let fn = () => {
//     console.log('ES6 function')
// }
// fn();
//
// @log
// class A { // 需要 @babel/plugin-proposal-class-properties插件去编译class语法
//     a = 1;
// }
//
// let a = new A();
// console.log(a.a);
//
// function log(target) {
//     console.log(target, 23);
// }