---
layout:     post   				    # 使用的布局（不需要改）
title:      I Don't Know About JS 	# 标题 
subtitle:   老袁の相声总结3			#副标题
date:        2020-11-15  			# 创建时间
update_date: 2020-11-15  			# 更新时间
author:     pfan8 						# 作者
header-img: img/post-bg-github-cup.jpg 	#这篇文章标题背景图片
catalog: true 						# 是否归档
tags:	[Javascript]							#标签
---

# I don't know about JS 

## 一、Additive & Unary

js中`+`,`-`,`~`都会把对象（甚至function）转换为表达式

例如

```javascript
+function(){} // NaN
-function(){} // NaN
~function(){} // -1
+[] // 0
-[] // 0
~[] // -1
+{} // NaN
-{} // NaN
~{} // -1
```

But！你以为你就懂JS了吗？too young too simple，看看下面这些，猜猜结果是什么?

+ [] + []
+ {} + []
+ [] + {}
+ {} + {}
+ {} + {};

| 结

| 果

| 如

| 下

↓ （Chrome和Node的运行结果）

+ [] + [] // ""
+ {} + [] // 0
+ {} + []; // [object object]
+ [] + {} // [object object]
+ {} + {} // [object object]\[object object]
+ {} + {}; // NaN

神不神奇，就问你神不神奇！

================= 华丽的分割线 =================

首先，在ECMA中，`+`这个符号，有2种操作（赋值类的`+=`可以涵盖在additive中）：

+ unary
+ additive

unary的含义是一元操作符，顾名思义，处理成unary是因为JS的解释器认为目前只有一个操作对象，如果认为有2个对象，则会处理成additive。



**那么unary和additive有什么区别呢？**

`+`的unary很简单，直接toNumber，关于ToNumber对JS原生对象的映射关系如下(ECMA2020)

| Argument Type | Result                                                       |
| :-----------: | ------------------------------------------------------------ |
|   Undefined   | Return **NaN**                                               |
|     Null      | Return **+0**<sub>𝔽</sub>                                    |
|    Boolean    | If argument is true, return **1<sub>𝔽</sub>**<br />If argument is false, return **+0**<sub>𝔽</sub> |
|    Number     | Return argument (no conversion)                              |
|    String     | See grammar and conversion algorithm below                   |
|    Symbol     | Throw a TypeError exception                                  |
|    BigInt     | Throw a TypeError exception                                  |
|    Object     | Apply the following steps:<br />1. Let primValue be ? ToPrimitive(argument, number)<br />2. Return ? ToNumber(primValue) |

Object的转换稍微有点复杂，关于ToPrimitive，下面会介绍。

下面我们看additive operation，相比unary，这个操作就复杂一些了。ECMA2020中关于additive operation这样说：

> The addition operator either performs string concatenation or numeric addition.

其实意思就是判断应该做number还是string的转换，然后相加或者拼接。

additive具体的步骤是：

>If opText is `+`, then
>
>1. Let lprim be ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(lval).
>2. Let rprim be ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(rval).
>3. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(lprim) is String or [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (rprim) is String, then
>   1. Let lstr be ? [ToString](https://tc39.es/ecma262/#sec-tostring)(lprim).
>   2. Let rstr be ? [ToString](https://tc39.es/ecma262/#sec-tostring)(rprim).
>   3. Return the [string-concatenation](https://tc39.es/ecma262/#string-concatenation) of lstr and rstr.
>4. Set lval to lprim.
>5. Set rval to rprim.

以及容易被忽略的一个NOTE

> No hint is provided in the calls to [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive) in steps [1.a](https://tc39.es/ecma262/#step-binary-op-toprimitive-lval) and [1.b](https://tc39.es/ecma262/#step-binary-op-toprimitive-rval). All standard objects except Date objects handle the absence of a hint as if number were given; Date objects handle the absence of a hint as if string were given. Exotic objects may handle the absence of a hint in some other manner.

因此，当出现+（additive operation），就会对两个值进行ToPrimitive转换，转换完之后如果发现任意一个值是string，就全部转换为string再拼接，否则作为数值相加。Note说对于Date对象给hint是string，而其他object，如果hint没有指定就默认number。由于[]和{}都是object，所以ToPrimitive的hint是number

那么toPromitive又是什么rule：

> 1. [Assert](https://tc39.es/ecma262/#assert): input is an [ECMAScript language value](https://tc39.es/ecma262/#sec-ecmascript-language-types).
> 2. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(input) is Object, then
>    1. Let exoticToPrim be ? [GetMethod](https://tc39.es/ecma262/#sec-getmethod)(input, [@@toPrimitive](https://tc39.es/ecma262/#sec-well-known-symbols)).
>    2. If exoticToPrim is not `undefined` , then
>       1. If preferredType is not present, let hint be "default".
>       2. Else if preferredType is string, let hint be "string".
>       3. Else,
>          1. [Assert](https://tc39.es/ecma262/#assert): preferredType is number.
>          2. Let hint be "number".
>       4. Let result be ? [Call](https://tc39.es/ecma262/#sec-call)(exoticToPrim, input, « hint »).
>       5. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(result) is not Object, return result.
>       6. Throw a TypeError exception.
>    3. If preferredType is not present, let preferredType be number.
>    4. Return ? [OrdinaryToPrimitive](https://tc39.es/ecma262/#sec-ordinarytoprimitive)(input, preferredType).
> 3. Return input.

这里纠结了很久，想半天，按照exoticToPrim来算，就不应该是toString的结果（例如[]+[]是""），而且@@toPrimitive找半天没找到，又在想是不是在additive之前有一个GetValue导致[]已经转换成""了，结果看了半天GetValue和@@toPrimitive。事实上GetValue还是返回原值（对于Reference的[]就是自身），而@@toPrimitive对Array就不存在，从而exoticToPrim就是undefined（我摔！），exoticToPrim和@@toPrimitive都是针对Date对象的特殊处理。总而言之，言而总之，对于[]或者{}来说，它们都是走OrdinaryToPrimitive的method，下面是这个func定义

> 1. Assert: Type(O) is Object.
> 2. Assert: hint is either string or number.
> 3. If hint is string, then
>    1. Let methodNames be « "**toString**", "**valueOf**" ».
> 4. Else,
>    1. Let methodNames be « "**valueOf**", "**toString**" ».
> 5. For each element name of methodNames, do
>    1. Let method be ? Get(O, name).
>    2. If IsCallable(method) is **true**, then
>       1. Let result be ? Call(method, O).
>       2. If Type(result) is not Object, return result.
> 6. Throw a **TypeError** exception.

瞬间就明朗了，就算hint是number，先取valueOf，得到[]自身，并不是primitive value，因此再一次toString了。因此[]转换成''，{}转换成'[object object]'。同时，如果你注意unary的Object处理rule，是先toPrimitive，然后再toNumber，所以对[]，相当于toNumber('')；对{}，相当于toNumber('[object object]')，从而得到0和NaN，如此就很make sense

## 二、 Comparison Operation（Relational/Equality）

还有一些神奇的表达式操作：

```javascript
NaN <= 0
NaN == 0
NaN < 0
NaN == NaN
// above are all false, as expected, but let's see below
null <= 0 // true
null >= 0 // true
null == 0 // false
null < 0 // false
null == null // true
1 + null // 1
typeof null // "object"
```

历史遗留问题：判断object是二进制前4位是不是0，然而null全部是0

对于null，是一种单独的Type，所以对于Type(x)或者ToPrimitive(x)，null就是原值，并不会转换

那么继续研究ECMA：

+ 对Abstract Relational Comparison

> 1. If the LeftFirst flag is true, then
>    1. Let px be ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(x, number).
>    2. Let py be ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(y, number).
> 2. Else,
>    1. NOTE: The order of evaluation needs to be reversed to preserve left to right evaluation.
>    2. Let py be ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(y, number).
>    3. Let px be ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(x, number).
> 3. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (px) is String and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (py) is String, then
>    1. If [IsStringPrefix](https://tc39.es/ecma262/#sec-isstringprefix)(py, px) is true, return false.
>    2. If [IsStringPrefix](https://tc39.es/ecma262/#sec-isstringprefix)(px, py) is true, return true.
>    3. Let k be the smallest non-negative [integer](https://tc39.es/ecma262/#integer) such that the code unit at index k within px is different from the code unit at index k within py. (There must be such a k, for neither String is a prefix of the other.)
>    4. Let m be the [integer](https://tc39.es/ecma262/#integer) that is the numeric value of the code unit at index k within px.
>    5. Let n be the [integer](https://tc39.es/ecma262/#integer) that is the numeric value of the code unit at index k within py.
>    6. If m < n, return true. Otherwise, return false.
> 4. Else,
>    1. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (px) is BigInt and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (py) is String, then
>       1. Let ny be ! [StringToBigInt](https://tc39.es/ecma262/#sec-stringtobigint)(py).
>       2. If ny is NaN, return undefined.
>       3. Return BigInt::lessThan(px, ny).
>    2. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (px) is String and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (py) is BigInt, then
>       1. Let nx be ! [StringToBigInt](https://tc39.es/ecma262/#sec-stringtobigint)(px).
>       2. If nx is NaN, return undefined.
>       3. Return BigInt::lessThan(nx, py).
>    3. NOTE: Because px and py are primitive values, evaluation order is not important.
>    4. Let nx be ! [ToNumeric](https://tc39.es/ecma262/#sec-tonumeric)(px).
>    5. Let ny be ! [ToNumeric](https://tc39.es/ecma262/#sec-tonumeric)(py).
>    6. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(nx) is the same as [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(ny), return [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(nx)::lessThan(nx, ny).
>    7. [Assert](https://tc39.es/ecma262/#assert): [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(nx) is BigInt and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(ny) is Number, or [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(nx) is Number and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(ny) is BigInt.
>    8. If nx or ny is NaN, return undefined.
>    9. If nx is -∞𝔽 or ny is +∞𝔽, return true.
>    10. If nx is +∞𝔽 or ny is -∞𝔽, return false.
>    11. If [ℝ](https://tc39.es/ecma262/#ℝ)(nx) < [ℝ](https://tc39.es/ecma262/#ℝ)(ny), return true; otherwise return false.

前面对于null都不满足，于是走到了第4步else，4.4 nx be !ToNumeric(px)，得到0，于是，0 <= 0是true，但是0 < 0是false，这就是为什么null <= 0但是不null < 0了。

那么为什么null == 0是false呢，因为==和<=在ECMA中走的flow不同，==执行Abstract Equality Comparison，其rule对应如下

+ 对Abstract Equality Comparison

> 1. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(x) is the same as [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(y), then
>    1. Return the result of performing [Strict Equality Comparison](https://tc39.es/ecma262/#sec-strict-equality-comparison) x === y.
> 2. If x is null and y is undefined, return true.
> 3. If x is undefined and y is null, return true.
> 4. NOTE: This step is replaced in section [B.3.7.2](https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec).
> 5. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(x) is Number and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(y) is String, return the result of the comparison x == ! [ToNumber](https://tc39.es/ecma262/#sec-tonumber)(y).
> 6. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(x) is String and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(y) is Number, return the result of the comparison ! [ToNumber](https://tc39.es/ecma262/#sec-tonumber)(x) == y.
> 7. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (x) is BigInt and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (y) is String, then
>    1. Let n be ! [StringToBigInt](https://tc39.es/ecma262/#sec-stringtobigint)(y).
>    2. If n is NaN, return false.
>    3. Return the result of the comparison x == n.
> 8. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(x) is String and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(y) is BigInt, return the result of the comparison y == x.
> 9. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(x) is Boolean, return the result of the comparison ! [ToNumber](https://tc39.es/ecma262/#sec-tonumber)(x) == y.
> 10. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(y) is Boolean, return the result of the comparison x == ! [ToNumber](https://tc39.es/ecma262/#sec-tonumber)(y).
> 11. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(x) is either String, Number, BigInt, or Symbol and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(y) is Object, return the result of the comparison x == ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(y).
> 12. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(x) is Object and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)(y) is either String, Number, BigInt, or Symbol, return the result of the comparison ? [ToPrimitive](https://tc39.es/ecma262/#sec-toprimitive)(x) == y.
> 13. If [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (x) is BigInt and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (y) is Number, or if [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (x) is Number and [Type](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values) (y) is BigInt, then
>     1. If x or y are any of NaN, +∞𝔽, or -∞𝔽, return false.
>     2. If [ℝ](https://tc39.es/ecma262/#ℝ)(x) = [ℝ](https://tc39.es/ecma262/#ℝ)(y), return true; otherwise return false.
> 14. Return false.

可以看到，对于`null == 0`的比较，没有满足的条件可以找到，所以到14返回false。



类似的，这里还有一个tricky的情况，就是

```javascript
[] == true // false
[] == '' // true
!![] // true
```

因为==操作对[]采取第12条，所以ToPrimitive(x)就变成了''，从而不等于true，然而当直接判断!![]或者if([])这样的操作时，采用的是ToBoolean，其rule对应如下

| Argument Type | Result                                                       |
| ------------- | ------------------------------------------------------------ |
| Undefined     | false                                                        |
| Null          | false                                                        |
| Boolean       | return argument                                              |
| Number        | if argument is +0<sub>𝔽</sub>, -0<sub>𝔽</sub>, NaN, return false; otherwise return true |
| String        | if argument is the empty String, return false; otherwise return true |
| Symbol        | true                                                         |
| BigInt        | if argument is 0, return false; otherwise return true        |
| Object        | true                                                         |

于是乎!![]就变成了true，因为它是object

## 三、词法作用域

```javascript
function bar() {
    console.log(myName)
}
function foo() {
    var myName = '老袁';
    bar();
}
var myName = '京城一灯';
foo();
```

对于bar里面的myName，只会向上查找变量，因此myName有变量提升，相当于在bar上面有一个

```javascript
var myName;
```

而并不会查找foo里面的myName，那不在bar函数的上方，因此如果倒数第二行的myName被注释掉会直接报错，从而结果也理所应当的是`京城一灯`

## 四、GC

+ 浏览器什么时候会GC，即便是给引用赋值为null，也不会立马执行GC，对象仍然存在于内存空间中
+ 而且使用闭包应当注意，因为一旦使用闭包，就会造成类似的问题，闭包的数据无法被回收，造成内存泄漏
+ 对于eval()函数更甚，使用eval的地方就会形成闭包，因为eval里万一有需要使用的变量，宿主环境是无法负责的，因此只能给你闭包起来保证变量在这，所以使用eval要小心
+ 即便你要使用eval，使用window.eval()可以避免内存泄漏问题，因为这个命令就是让eval到全局window去查找需要的变量
+ `with`，遇到with里的变量，放弃所有GC，并且将变量丢到全局
+ try catch中的catch(e)，e也会造成内存泄漏

## 五、Function

下面这段代码

```javascript
var a = 'outside'
function init() {
    var a = 'inside';
    var fn1 = new Function(console.log(a));
    var fn2 = new Function('console.log(a)');
}
fn1(); // inside
fn2(); // outside
```

因为Function在遇到string的时候，是在全局作用域查找变量的

## 六、JS真的万物皆对象吗？

```javascript
typeof String // function
```

JavaScript中有一些内部未暴露的对象，并不是Object

对于下面的原型链对象

```javascript
Object.prototype.a = 'o';
Function.prototype.a = 'f';
var Person = function(){}
console.log(Person.a) // 'f'
console.log(new Person().a) // 'o'
1..a // 'o'
```

new出来的对象o1，o1的原型链是Person，Person的原型链是Object，从而找到了a为`o`，

而直接使用Person，其原型链是Function，所以找到了`f`，另外Function再网上找的话，原型链也是Object

1..a结果是`o`是因为1.是合法的，JS里的Number都是浮点数，所以1.0和1.是一样的

## 七、Meta Programming

类似修改valueOf，toString的一些底层方法，从而增强当前对象的功能

```javascript
var obj = {'a':2, 'b':3};
Object.defineProperty(obj, Symbol.iterator, {
    value: function() {
        var o = this;
        var idx = 0;
        var ks = Object.keys(o);
        return {
            next: function() {
                return {
                    value: o[kx[idx]],
                    done: idx > ks.length,
                }
            }
        }
    }
})
for(let v of obj) {
    console.log(v); // done
}
```

通过元编程就可以解决这个问题

另外，甚至可以改变toPrimitive等Symbol的Func，如

```javascript
var yideng = {
    [Symbol.toPrimitive]: ((i) => () => ++i;)(0),
}

if((yideng == 1) & (yideng == 2) & (yideng == 3)) {
    console.log('success here') // done
}
```

还有几点跟元编程相关

+ TCO尾递归优化，可以通过TCO_ENABLE=true打开（hosting支持的话）
+ Reflect也是基于元编程实现，例如npm库reflect-metadata，做IOC会用到

## 八、协程

+ async，await是microtask，不是macrotask，但是会保存变量，类似闭包，保存await的环境
+ await就是Promise.then
+ JS是单线程执行，但是V8有多个线程辅助，

## 九、JS实现多线程

+ Concurrent.Thread.js (Web Worker不灵的时候，可以临时替代)
+ web worker
+ 现在基本都用原子锁了