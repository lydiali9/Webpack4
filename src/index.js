import $ from 'jquery'; //console.log(window.$); // undefine
// import $ from 'expose-loader?$!jquery'; // console.log(window.$);  == console.log($); // 或者可以配置到modules.rules中
console.log($); // 在每个模块中注入$对象
// expose-loader 暴露全局的loader 内联的loader
// pre 前面执行的loader  normal 普通loader     内联loader 后置 post-loader
// console.log(window.$); // undefinex

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