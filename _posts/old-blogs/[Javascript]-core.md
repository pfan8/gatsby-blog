---
layout:     post   				    # 使用的布局（不需要改）
title:      JavaScript基础知识点总结 	# 标题 
subtitle:   老袁の相声总结			#副标题
date:        2020-10-20  			# 创建时间
update_date: 2020-10-20  			# 更新时间
author:     pfan8 						# 作者
header-img: img/post-bg-github-cup.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	[JavaScript]							#标签
---

## 1.变量提升
+ 变量提升：声明提升一层作用域，赋值则保留在词法环境中
+ 函数提升：
    + 函数提升类似变量提升，提升一层作用域
    + 但同时函数提升比变量提升强大，如果变量声明提升但是undefined，则忽略这个变量声明采用其上方的函数声明
+ 变量提升和函数提升都只提升一层作用域，所以就害怕遇到函数，阻挡变量提升。同时函数也是通过这种机制实现私有变量，外部函数无法访问内部函数声明的变量
+ 函数内部，和函数名相同命名的变量无效
+ （例外，疑似BUG）块级作用域中函数提升时，如果上方有已声明的同名对象，则不做替换，下面举例

① 变量替换不了函数

```js
{
    function init() {}
    init = 4;
    console.log(init); // 4
}
console.log(init); // function init
```

② 函数替换不了变量

```js
{
    init = 5
    function init() {}
    init = 4;
    console.log(init); // 4
}
console.log(init); // 5
```

## 2.self/_this/that/me
+ self.self == self: 判断浏览器, self是window对象
+ global.global == global: 判断node
+ 由于很多人写self = this，后面产生全局变量globalThis
+ 函数执行的this原则：谁调指谁，如果没有调用对象，则指向全局(window/global)
+ 函数的构造函数即使它本身，并且函数内部赋值的成员变量优先级比原型链高。举例说明：

```js
function go() {
    this.a = 30;
}
go.prototype.a = 40;

var s = new go();
console.log(s.a); // 会输出30，而不是40
```

+ 箭头函数自动将函数bind到**父级**作用域的this:
不用箭头函数

```js
var a = 30;
var test = {
    a: 50,
    init() {
        console.log(this.a);
    }
}
test.init(); // V8:50, node:50
var p = test.init;
p(); // V8:30, node:undefined

// 额外小知识点，这样声明的init bind没用
test.init.bind(this);
test.init() // 50
```

用箭头函数

```js
var a = 30;
var test = {
    a: 50,
    init: () => {
        console.log(this.a);
    }
}
test.init(); // V8:30, node:undefined
var p = test.init;
p(); // V8:30, node:undefined
```

其中，V8和node结果不同是因为node没有this全局变量，而V8的this是window对象
+ 箭头函数同时会取消函数的构造函数作用。举例说明:

```js
var fn = () => {
    this.a = 'test'
};
var instance = new fn(); // Error: no constructor
```

+ 'use strict'严格模式，仅作用当前函数作用域，对外部函数无效，因此在setTimeout，setInterval等函数中使用无效。总结：避免局部使用严格模式
+ 闭包的内涵是为内部函数构造Local作用域，防止受到外部污染
+ V8等引擎为js构造了一个全局的匿名函数，相当于main函数
+ event中的this就是DOM元素

## 3.Array借原型来构造

```js
var newArr = Array.prototype.splice.call(this, "abc");

var newArr = [].split.call(this, "abc"); //比上面多new了一次
```

## 4.类
+ static可以被继承

```js
class Car {
    static wheel = 4;
}

class BMW extends Car {}

console.log(BMW.wheel) // 4
```

原因，js中的Class只是syntax candy, class仅仅是通过在prototype上加上成员函数

同时，可以用Object.create配合function原型链构建子类

```js
'use strict';
function Car(color) {
  this.color = color;
}
Car.myName = '京程一灯🏮';
Car.prototype.x = function () {
  console.log('父类方法');
};

function BMW(color) {
    Car.call(this, color)
}

BMW.prototype = Object.create(Car.prototype, {
  constructor: {
    value: BMW,
    writeable: false,
  },
  xx: {
    value: function () {},
  },
});

//继承静态属性
var staticKeys = Object.entries(Car);
for (var i = 0; i < staticKeys.length; i++) {
  var key = staticKeys[i][0];
  var value = staticKeys[i][1];
  BMW[key] = value;
}
```

## 5.Regex clone
在js中，regex有lastIndex属性，因此

```js
var regex = /yideng/g; 
console.log(regex.test('yideng')); // true
console.log(regex.test('yideng')); // false
console.log(regex.test('yideng')); // true
console.log(regex.test('yideng')); // false
```

拷贝

```js
function cloneReg(target, isDeep) {
  var regFlag = /\w*$/;
  var result = new target.constructor(target.source, regFlag.exec(target));
  if (isDeep) {
    result.lastIndex = 0;
  } else {
    result.lastIndex = target.lastIndex;
  }
  return result;
}
```

## 5+.Buffer clone

```js
const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (!isDeep) {
    return buffer.slice();
  } else {
    const length = buffer.length,
      result = allocUnsafe
        ? allocUnsafe(length)
        : new buffer.constructor(length);
    return result;
  }
}
```

## 6.额外知识点
+ V8中，`this.length`代表`html`中`iframe`的个数
+ arguments调用function时，调用对象是IArguments（TS），举例说明

```js
var length = 10;
function fn() {
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function (fn) {
    // fn();
    arguments[0](); // will output 2
  },
};
yideng.method(fn, 1);
```