let str = require("./a.js");

require('./index.css');
require('./index.less');

console.log(str);

let fn = () => {
    console.log('ES6 function')
}
fn();

@log
class A { // 需要 @babel/plugin-proposal-class-properties插件去编译class语法
    a = 1;
}

let a = new A();
console.log(a.a);

function log(target) {
    console.log(target, 23);
}