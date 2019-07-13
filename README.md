<!-- TOC -->

- [JS 基础知识点（一）](#js-基础知识点一)
  - [原始（Primitive）类型](#原始primitive类型)
  - [对象（Object）类型](#对象object类型)
  - [typeof vs instanceof](#typeof-vs-instanceof)
    - [typeof](#typeof)
    - [instanceof](#instanceof)
  - [类型转换(记忆)](#类型转换记忆)
    - [转换为布尔值、字符、数字](#转换为布尔值字符数字)
    - [转 Boolean](#转-boolean)
    - [对象转原始类型](#对象转原始类型)
    - [四则运算符](#四则运算符)
  - [this](#this)
    - [案例：](#案例)
    - [箭头函数中的 `this`](#箭头函数中的-this)
    - [改变上下文的 API](#改变上下文的-api)
    - [this 的规则](#this-的规则)
- [JS 基础知识点（二）](#js-基础知识点二)
  - [== vs ===](#-vs-)
    - [==（记忆）](#记忆)
    - [===](#)
  - [闭包](#闭包)
  - [深浅拷贝](#深浅拷贝)
    - [浅拷贝](#浅拷贝)
    - [深拷贝（记忆）](#深拷贝记忆)
  - [原型](#原型)
    - [原型](#原型-1)
    - [原型链](#原型链)
- [ES6 知识点](#es6-知识点)
  - [var、let 及 const 区别](#varlet-及-const-区别)
  - [原型继承和 Class 继承](#原型继承和-class-继承)
    - [class](#class)
    - [组合继承](#组合继承)
    - [寄生组合继承](#寄生组合继承)
    - [Class 继承](#class-继承)
  - [模块化](#模块化)
    - [立即执行函数](#立即执行函数)
    - [AMD 和 CMD](#amd-和-cmd)
    - [CommonJS](#commonjs)
    - [require:(再看一下)](#require再看一下)
    - [ES Module](#es-module)
  - [Proxy(再看一下)](#proxy再看一下)
  - [map, filter, reduce(再看一下)](#map-filter-reduce再看一下)
    - [map](#map)
    - [filter](#filter)
    - [reduce](#reduce)
    - [数组常用方法分析](#数组常用方法分析)
- [JS 异步编程（需要补充看）](#js-异步编程需要补充看)
  - [并发（concurrency）和并行（parallelism）区别](#并发concurrency和并行parallelism区别)
  - [回调函数（Callback）](#回调函数callback)
  - [Generator(需要补充)](#generator需要补充)
  - [Promise(再看一下)](#promise再看一下)
  - [async 及 await(需要补充)](#async-及-await需要补充)
  - [常用定时器函数](#常用定时器函数)
    - [setTimeout](#settimeout)
    - [setInterval](#setinterval)
    - [requestAnimationFrame](#requestanimationframe)
- [手写 Promise](#手写-promise)
    - [Eventloop](#eventloop)
      - [进程与线程](#进程与线程)
      - [执行栈](#执行栈)
      - [浏览器中的 Event Loop](#浏览器中的-event-loop)
    - [JS进阶知识点](#js进阶知识点)
      - [手写 call、apply 及 bind 函数](#手写-callapply-及-bind-函数)
    - [Vue 常考基础知识点](#vue-常考基础知识点)
- [Event Lop](#event-lop)
- [JS 高阶知识点](#js-高阶知识点)
  - [手写 call、apply 及 bind 函数(再看一下)](#手写-callapply-及-bind-函数再看一下)
  - [new](#new)
  - [instanceof 的原理](#instanceof-的原理)
  - [为什么 0.1 + 0.2 != 0.3](#为什么-01--02--03)
  - [垃圾回收机制](#垃圾回收机制)
    - [新生代算法](#新生代算法)
    - [老生代算法](#老生代算法)
- [浏览器基础知识点](#浏览器基础知识点)
  - [事件触发三阶段](#事件触发三阶段)
  - [注册事件](#注册事件)
  - [事件代理](#事件代理)
  - [跨域（需要补充 nginx、优缺点、webworker 等）](#跨域需要补充-nginx优缺点webworker-等)
    - [JSONP](#jsonp)
    - [CORS](#cors)
    - [简单请求](#简单请求)
    - [复杂请求](#复杂请求)
    - [document.domain](#documentdomain)
    - [postMessage](#postmessage)
  - [存储](#存储)
    - [cookie，localStorage，sessionStorage，indexDB](#cookielocalstoragesessionstorageindexdb)
    - [Service Worker](#service-worker)
- [浏览器缓存机制](#浏览器缓存机制)
  - [缓存位置](#缓存位置)
    - [Service Worker](#service-worker-1)
    - [Memory Cache](#memory-cache)
    - [Disk Cache](#disk-cache)
    - [Push Cache](#push-cache)
    - [网络请求](#网络请求)
  - [缓存策略](#缓存策略)
    - [强缓存](#强缓存)
      - [Expires](#expires)
      - [Cache-control](#cache-control)
    - [协商缓存](#协商缓存)
      - [Last-Modified 和 If-Modified-Since](#last-modified-和-if-modified-since)
      - [ETag 和 If-None-Match](#etag-和-if-none-match)
  - [实际场景应用缓存策略](#实际场景应用缓存策略)
    - [频繁变动的资源](#频繁变动的资源)
    - [代码文件](#代码文件)
- [浏览器渲染原理](#浏览器渲染原理)
  - [浏览器接收到 HTML 文件并转换为 DOM 树](#浏览器接收到-html-文件并转换为-dom-树)
  - [将 CSS 文件转换为 CSSOM 树](#将-css-文件转换为-cssom-树)
  - [生成渲染树](#生成渲染树)
  - [为什么操作 DOM 慢](#为什么操作-dom-慢)
  - [什么情况阻塞渲染](#什么情况阻塞渲染)
  - [重绘（Repaint）和回流（Reflow）](#重绘repaint和回流reflow)
    - [减少重绘和回流](#减少重绘和回流)
  - [思考](#思考)
- [安全防范知识点](#安全防范知识点)
  - [XSS](#xss)
    - [什么是XSS攻击？](#什么是xss攻击)
    - [攻击来源分为三类](#攻击来源分为三类)
      - [1. 存储型XSS](#1-存储型xss)
      - [2. 反射型XSS](#2-反射型xss)
      - [3. DOM型XSS](#3-dom型xss)
    - [如何防御](#如何防御)
  - [CSRF](#csrf)
    - [攻击原理](#攻击原理)
    - [检测CSRF漏洞](#检测csrf漏洞)
    - [如何防御](#如何防御-1)
      - [SameSite](#samesite)
      - [验证 Referer](#验证-referer)
      - [Anti CSRF Token](#anti-csrf-token)
      - [验证码](#验证码)
  - [点击劫持](#点击劫持)
    - [如何防御](#如何防御-2)
    - [服务端：](#服务端)
      - [X-FRAME-OPTIONS](#x-frame-options)
      - [使用 FrameBusting 代码](#使用-framebusting-代码)
      - [使用认证码认证用户](#使用认证码认证用户)
    - [客户端](#客户端)
      - [升级浏览器](#升级浏览器)
      - [NoScript 扩展](#noscript-扩展)
  - [中间人攻击](#中间人攻击)
- [从 V8 中看 JS 性能优化](#从-v8-中看-js-性能优化)
  - [测试性能工具](#测试性能工具)
  - [JS性能优化](#js性能优化)
- [性能优化琐碎事](#性能优化琐碎事)
  - [图片优化](#图片优化)
    - [计算图片大小](#计算图片大小)
    - [图片加载优化](#图片加载优化)
  - [DNS 预解析](#dns-预解析)
  - [防抖](#防抖)
  - [节流](#节流)
  - [预加载](#预加载)
  - [预渲染](#预渲染)
  - [懒执行](#懒执行)
  - [懒加载](#懒加载)
  - [CDN](#cdn)
- [Webpack 性能优化](#webpack-性能优化)
  - [减少 Webpack 打包时间](#减少-webpack-打包时间)
    - [优化 Loader](#优化-loader)
    - [HappyPack](#happypack)
    - [DllPlugin](#dllplugin)
    - [代码压缩](#代码压缩)
    - [一些小的优化点](#一些小的优化点)
  - [减少 Webpack 打包后的文件体积](#减少-webpack-打包后的文件体积)
    - [按需加载](#按需加载)
    - [Scope Hoisting](#scope-hoisting)
    - [Tree Shaking](#tree-shaking)
    - [开启gzip压缩](#开启gzip压缩)
- [React 和 Vue 两大框架](#react-和-vue-两大框架)
  - [MVVM](#mvvm)
  - [Virtual DOM](#virtual-dom)
  - [路由原理](#路由原理)
    - [Hash 模式](#hash-模式)
    - [History 模式](#history-模式)
    - [两种模式对比](#两种模式对比)
  - [Vue 和 React 之间的区别](#vue-和-react-之间的区别)
- [Vue 常考基础知识点](#vue-常考基础知识点-1)
  - [生命周期钩子函数（8 个生命周期、keep-alive）](#生命周期钩子函数8-个生命周期keep-alive)
  - [组件通信](#组件通信)
  - [extend 能做什么](#extend-能做什么)
  - [mixin 和 mixins 区别](#mixin-和-mixins-区别)
  - [computed 和 watch 区别](#computed-和-watch-区别)
  - [keep-alive 组件有什么作用](#keep-alive-组件有什么作用)
  - [v-show 与 v-if 区别](#v-show-与-v-if-区别)
  - [组件中 data 什么时候可以使用对象](#组件中-data-什么时候可以使用对象)
- [Vue 常考进阶知识点](#vue-常考进阶知识点)
  - [响应式原理](#响应式原理)
  - [Object.defineProperty 的缺陷](#objectdefineproperty-的缺陷)
  - [编译过程](#编译过程)
  - [NextTick 原理分析](#nexttick-原理分析)
- [监控](#监控)
  - [页面埋点](#页面埋点)
  - [性能监控](#性能监控)
  - [异常监控](#异常监控)
    - [代码报错](#代码报错)
    - [接口异常](#接口异常)
- [UDP](#udp)
  - [面向无连接](#面向无连接)
  - [不可靠性](#不可靠性)
  - [高效](#高效)
  - [传输方式](#传输方式)
  - [适合使用的场景](#适合使用的场景)
- [TCP](#tcp)
  - [头部](#头部)

<!-- /TOC -->


# JS 基础知识点（一）

## 原始（Primitive）类型

> 原始类型有哪几种？null 是对象嘛？

- boolean
- null  
  typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object
- undefined
- number  
  0.1 + 0.2 !== 0.3  
  双精度浮点数
- string
- symbol



## 对象（Object）类型

> 对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？

对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。

## typeof vs instanceof

> typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？

### typeof

- typeof 对于原始类型来说，除了 null 都可以显示正确的类型

- typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型

### instanceof

- 判断一个对象的正确类型，这时候可以考虑使用 instanceof，因为内部机制是通过原型链来判断的

- 对于原始类型来说，你想直接通过 instanceof 来判断类型是不行的，当然我们还是有办法让 instanceof 判断原始类型的。

```
class PrimitiveString {
    static [Symbol.hasInstance](x) {
      return typeof x === 'string'
    }
}
console.log('hello world' instanceof PrimitiveString) // true
//Symbol.hasInstance 能让我们自定义 instanceof 行为
```

- 所以：instanceof 也不是百分之百可信的。



## 类型转换(记忆)

> 该知识点常在笔试题中见到，熟悉了转换规则就不惧怕此类题目了。

### 转换为布尔值、字符、数字

| 原始值              | 转换类型 | 结果                                               |
| ------------------- | -------- | -------------------------------------------------- |
| number              | 布尔值   | 除了 0，-0，NaN 都是 true                          |
| string              | 布尔值   | 除了空串都是 true                                  |
| undefined null      | 布尔值   | false                                              |
| 引用类型            | 布尔值   | true                                               |
| number              | 字符串   | 5 => "5"                                           |
| Boolean,函数,Symbol | 字符串   | true                                               |
| 数组                | 字符串   | [1,2] => 1,2                                       |
| 对象                | 字符串   | '[object Object]'                                  |
| string              | 数字     | '1'=>1 'a'=>NaN                                    |
| 数组                | 数字     | 空数组为 0，存在一个元素且为数字是数字，其他为 NaN |
| null                | 数字     | 0                                                  |
| 除了数组的引用类型  | 数字     | NaN                                                |
| Symbol              | 数字     | 抛错                                               |

注：Boolean 转字符串这行结果我指的是 true 转字符串的例子，不是说 Boolean、函数、Symblo 转字符串都是 `true`

### 转 Boolean

除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。

### 对象转原始类型

对象在转换类型的时候，会调用内置的 [[ToPrimitive]] 函数，对于该函数来说，算法逻辑一般来说如下：

- 如果已经是原始类型了，那就不需要转换了
- 如果需要转字符串类型就调用 x.toString()，转换为基础类型的话就返回转换的值。不是字符串类型的话就先调用 valueOf，结果不是基础类型的话再调用 toString
- 调用 x.valueOf()，如果转换为基础类型，就返回转换的值
- 如果都没有返回原始类型，就会报错

### 四则运算符

- 加法运算符不同于其他几个运算符，它有以下几个特点：
  - 运算中其中一方为字符串，那么就会把另一方也转换为字符串
  - 如果一方不是字符串或者数字，那么会将它转换为数字或者字符串
    ```
    1 + '1' // '11'
    true + true // 2
    4 + [1,2,3] // "41,2,3"
    ```
- 对于除了加法的运算符来说，只要其中一方是数字，那么另一方就会被转为数字。
  ```
  4 * '3' // 12
  4 * [] // 0
  4 * [1, 2] // NaN
  ```
- 比较运算符
  - 如果是对象，就通过 toPrimitive 转换对象
  - 如果是字符串，就通过 unicode 字符索引来比较



## this

> 如何正确判断 this？箭头函数的 this 是什么？

### 案例：

```
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
a: 2,
foo: foo
}
obj.foo()
const c = new foo()
```

对于直接调用 `foo` 来说，不管 `foo` 函数被放在了什么地方，`this` 一定是 `window`

对于 `obj.foo()` 来说，我们只需要记住，谁调用了函数，谁就是 `this`，所以在这个场景下 `foo`函数中的 `this` 就是 `obj` 对象

对于 `new` 的方式来说，`this` 被永远绑定在了 `c` 上面，不会被任何方式改变 `this`

### 箭头函数中的 `this`

```
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()()) //window
```

首先箭头函数其实是没有 `this` 的，箭头函数中的 `this` 只取决**包裹箭头函数的第一个普通函数的 `this`**。在这个例子中，因为包裹箭头函数的第一个普通函数是 `a`，所以此时的 `this` 是 `window`。另外对箭头函数使用 `bind` 这类函数是无效的。

### 改变上下文的 API

apply、call、bind 这些 API 的`this` 取决于第一个参数，如果第一个参数为空，那么就是 `window`。

如果对一个函数进行多次 `bind`，`this` 永远由第一次 `bind` 决定。

### this 的规则

![this](this.png)



------

# JS 基础知识点（二）

## == vs ===

> 涉及面试题：== 和 === 有什么区别？

### ==（记忆）

1. 首先会判断两者类型是否**相同**。相同的话就是比大小了
2. 类型不相同的话，那么就会进行类型转换
3. 会先判断是否在对比 `null` 和 `undefined`，是的话就会返回 `true`
4. 判断两者类型是否为 `string` 和 `number`，是的话就会将字符串转换为 `number`
5. 判断其中一方是否为 `boolean`，是的话就会把 `boolean` 转为 `number` 再进行判断
6. 判断其中一方是否为 `object` 且另一方为 `string`、`number` 或者 `symbol`，是的话就会把 `object` 转为原始类型再进行判断

### ===

判断两者类型和值是否相同



## 闭包

> 什么是闭包？

闭包的定义其实很简单：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。

在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。

```
function A() {
  let a = 1
  window.B = function () {
      console.log(a)
  }
}
A()
B() // 1
```

> 循环中使用闭包解决 `var` 定义函数的问题

```
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
} //这会输出一堆6
```

解法：
一、使用闭包

```
for (var i = 1; i <= 5; i++) {
  ;(function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}
```

二、使用 `setTimeout` 的第三个参数，这个参数会被当成 `timer` 函数的参数传入。

```
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    },
    i * 1000,
    i
  )
}
```

三、let（最为推荐）

```
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```



## 深浅拷贝

> 什么是浅拷贝？如何实现浅拷贝？什么是深拷贝？如何实现深拷贝？

对象类型在赋值的过程中其实是复制了地址，从而会导致改变了一方其他也都被改变的情况。

### 浅拷贝

1. 首先可以通过 `Object.assign` 来解决这个问题，很多人认为这个函数是用来深拷贝的。其实并不是，`Object.assign` 只会拷贝所有的属性值到新的对象中，如果属性值是对象的话，拷贝的是地址，所以并不是深拷贝。

```
   let a = {
     age: 1
   }
   let b = Object.assign({}, a)
   a.age = 2
   console.log(b.age) // 1
```

2. 通过展开运算符 `...` 来实现浅拷贝

```
  let a = {
    age: 1
  }
  let b = { ...a }
  a.age = 2
  console.log(b.age) // 1
```

浅拷贝只解决了第一层的问题，如果接下去的值中还有对象的话，那么就又回到最开始的话题了，两者享有相同的地址。要解决这个问题，我们就得使用深拷贝了。

### 深拷贝（记忆）

1. 这个问题通常可以通过 `JSON.parse(JSON.stringify(object))` 来解决。

   ```
   let a = {
     age: 1,
     jobs: {
       first: 'FE'
     }
   }
   let b = JSON.parse(JSON.stringify(a))
   a.jobs.first = 'native'
   console.log(b.jobs.first) // FE
   ```

   该方法也有局限性：

   - 会忽略 `undefined`
   - 会忽略 `symbol`
   - 不能序列化函数
   - 不能解决循环引用的对象

   但是在通常情况下，复杂数据都是可以序列化的，所以这个函数可以解决大部分问题。

   如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 `MessageChannel`

2) 自己想实现一个深拷贝，但是其实实现一个深拷贝是很困难的，需要我们考虑好多种边界情况，比如原型链如何处理、DOM 如何处理等等，所以这里我们实现的深拷贝只是简易版，更推荐使用 [lodash 的深拷贝函数](https://link.juejin.im/?target=https%3A%2F%2Flodash.com%2Fdocs%23cloneDeep)。

   ```
   function deepClone(obj) {
     function isObject(o) {
       return (typeof o === 'object' || typeof o === 'function') && o !== null
     }

     if (!isObject(obj)) {
       throw new Error('非对象')
     }

     let isArray = Array.isArray(obj)
     let newObj = isArray ? [...obj] : { ...obj }
     Reflect.ownKeys(newObj).forEach(key => {
       newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
     })

     return newObj
   }

   let obj = {
     a: [1, 2, 3],
     b: {
       c: 2,
       d: 3
     }
   }
   let newObj = deepClone(obj)
   newObj.b.c = 1
   console.log(obj.b.c) // 2
   ```



## 原型

> 如何理解原型？如何理解原型链？

### 原型

1. 每个 JS 对象都有 `__proto__` 属性，这个属性指向了原型。
2. 原型也是一个对象，并且这个对象中包含了很多函数，所以我们可以得出一个结论：对于 `obj` 来说，可以通过 `__proto__` 找到一个原型对象，在该对象中定义了很多函数让我们来使用。
3. `__proto__` 还有一个`constructor` 属性，其中还有一个 `prototype` 属性，并且这个属性对应的值和先前我们在 `__proto__` 中看到的一模一样。
4. 所以我们又可以得出一个结论：原型的 `constructor` 属性指向构造函数，构造函数又通过 `prototype` 属性指回原型，但是并不是所有函数都具有这个属性，`Function.prototype.bind()` 就没有这个属性。

### 原型链

原型链就是多个对象通过 `__proto__` 的方式连接了起来。

对象的 `__proto__` 属性指向原型， `__proto__` 将对象和原型连接起来组成了原型链。



------

# ES6 知识点

## var、let 及 const 区别

> 什么是提升？什么是暂时性死区？var、let 及 const 区别？

```
console.log(a) // undefined
var a = 1

//等价于
var a
console.log(a) // undefined
a = 1
```

虽然变量还没有被声明，但是我们却可以使用这个未被声明的变量，这种情况就叫做提升，并且提升的是声明。

函数也会被提升，并且优先于变量提升。提升存在的根本原因就是为了解决函数间互相调用的情况。

1. 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部
2. `var` 存在提升，我们能在声明之前使用。`let`、`const` 因为暂时性死区的原因，不能在声明前使用
3. `var` 在全局作用域下声明变量会导致变量挂载在 `window` 上，其他两者不会
4. `let` 和 `const` 作用基本一致，但是后者声明的变量不能再次赋值



## 原型继承和 Class 继承

> 原型如何实现继承？Class 如何实现继承？Class 本质是什么？

### class

其实在 JS 中并不存在类，`class` 只是语法糖，本质还是函数。

```
class Person {}
Person instanceof Function // true
```

### 组合继承

```
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}
function Child(value) {
  Parent.call(this, value)
}
Child.prototype = new Parent()

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true
```

以上继承的方式核心是在子类的构造函数中通过 `Parent.call(this)` 继承父类的属性，然后改变子类的原型为 `new Parent()` 来继承父类的函数。

这种继承方式优点在于构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数，但是也存在一个缺点就是在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费。

### 寄生组合继承

```
function Parent(value) {
  this.val = value
}
Parent.prototype.getValue = function() {
  console.log(this.val)
}

function Child(value) {
  Parent.call(this, value)
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

const child = new Child(1)

child.getValue() // 1
child instanceof Parent // true
```

以上继承实现的核心就是将父类的原型赋值给了子类，并且将构造函数设置为子类，这样既解决了无用的父类属性问题，还能正确的找到子类的构造函数。

### Class 继承

```
class Parent {
  constructor(value) {
    this.val = value
  }
  getValue() {
    console.log(this.val)
  }
}
class Child extends Parent {
  constructor(value) {
    super(value)
  }
}
let child = new Child(1)
child.getValue() // 1
child instanceof Parent // true
```

`class` 实现继承的核心在于使用 `extends` 表明继承自哪个父类，并且在子类构造函数中必须调用 `super`，因为这段代码可以看成 `Parent.call(this, value)`。



## 模块化

> 为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？

使用模块化可以给我们带来以下好处：

- 解决命名冲突
- 提供复用性
- 提高代码可维护性

### 立即执行函数

在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。

```
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```

### AMD 和 CMD

鉴于目前这两种实现方式已经很少见到，所以不再对具体特性细聊，只需要了解这两者是如何使用的。

```
// AMD
define(['./a', './b'], function(a, b) {
  // 加载模块完毕可以使用
  a.do()
  b.do()
})
// CMD
define(function(require, exports, module) {
  // 加载模块
  // 可以把 require 写在函数体的任意地方实现延迟加载
  var a = require('./a')
  a.doSomething()
})
```

### CommonJS

CommonJS 最早是 Node 在使用，目前也仍然广泛使用，比如在 Webpack 中你就能见到它，当然目前在 Node 中的模块管理已经和 CommonJS 有一些区别了。

```
// a.js
module.exports = {
    a: 1
}
// or
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1
```

### require:(再看一下)

```
var module = require('./a.js')
module.a
// 这里其实就是包装了一层立即执行函数，这样就不会污染全局变量了，
// 重要的是 module 这里，module 是 Node 独有的一个变量
module.exports = {
    a: 1
}
// module 基本实现
var module = {
  id: 'xxxx', // 我总得知道怎么去找到他吧
  exports: {} // exports 就是个空对象
}
// 这个是为什么 exports 和 module.exports 用法相似的原因
var exports = module.exports
var load = function (module) {
    // 导出的东西
    var a = 1
    module.exports = a
    return module.exports
};
// 然后当我 require 的时候去找到独特的id，然后将要使用的东西用立即执行函数包装下，over
```

另外虽然 `exports` 和 `module.exports` 用法相似，但是不能对 `exports` 直接赋值。因为 `var exports = module.exports` 这句代码表明了 `exports` 和 `module.exports` 享有相同地址，通过改变对象的属性值会对两者都起效，但是如果直接对 `exports` 赋值就会导致两者不再指向同一个内存地址，修改并不会对 `module.exports` 起效。

### ES Module

ES Module 是原生实现的模块化方案，与 CommonJS 有以下几个区别

- CommonJS 支持动态导入，也就是 `require(${path}/xx.js)`，后者目前不支持，但是已有提案

- CommonJS 是同步导入，因为用于服务端，文件都在本地，同步导入即使卡住主线程影响也不大。而后者是异步导入，因为用于浏览器，需要下载文件，如果也采用同步导入会对渲染有很大影响

- CommonJS 在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以如果想更新值，必须重新导入一次。但是 ES Module 采用实时绑定的方式，导入导出的值都指向同一个内存地址，所以导入值会跟随导出值变化

- ES Module 会编译成 `require/exports` 来执行的

  ```
  // 引入模块 API
  import XXX from './a.js'
  import { XXX } from './a.js'
  // 导出模块 API
  export function a() {}
  export default function() {}
  ```



## Proxy(再看一下)

> Proxy 可以实现什么功能？

在 Vue3.0 中通过 `Proxy` 来替换原本的 `Object.defineProperty` 来实现数据响应式。 Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。

```
let p = new Proxy(target, handler)
//target 代表需要添加代理的对象，handler 用来自定义对象中的操作，比如可以用来自定义 set 或者 get 函数。
```

接下来我们通过 Proxy 来实现一个数据响应式

```
let onWatch = (obj, setBind, getLogger) => {
  let handler = {
    get(target, property, receiver) {
      getLogger(target, property)
      // 这句判断代码是新增的
      if (typeof target[property] === 'object' && target[property] !== null) {
        return new Proxy(target[property], handler);
      } else {
        return Reflect.get(target, property);
      }
    },
    set(target, property, value, receiver) {
      setBind(value, property)
      return Reflect.set(target, property, value)
    }
  }
  return new Proxy(obj, handler)
}

let obj = { a: 1 }
let p = onWatch(
  obj,
  (v, property) => {
    console.log(`监听到属性${property}改变为${v}`)
  },
  (target, property) => {
    console.log(`'${property}' = ${target[property]}`)
  }
)
p.a = 2 // 监听到属性a改变
p.a // 'a' = 2
```

在上述代码中，我们通过自定义 `set` 和 `get` 函数的方式，在原本的逻辑中插入了我们的函数逻辑，实现了在对对象任何属性进行读写时发出通知。

当然这是简单版的响应式实现，如果需要实现一个 Vue 中的响应式，需要我们在 `get` 中收集依赖，在 `set` 派发更新，之所以 Vue3.0 要使用 `Proxy` 替换原本的 API 原因在于 `Proxy` 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 `Proxy` 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。



## map, filter, reduce(再看一下)

> map, filter, reduce 各自有什么作用？

### map

`map` 作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后放入到新的数组中。

`map` 的回调函数接受三个参数，分别是当前索引元素，索引，原数组

```
[1, 2, 3].map(v => v + 1) // -> [2, 3, 4]
```

### filter

`filter` 的作用也是生成一个新数组，在遍历数组的时候将返回值为 `true` 的元素放入新数组，我们可以利用这个函数删除一些不需要的元素。

`filter` 的回调函数接受三个参数，分别是当前索引元素，索引，原数组

```
let array = [1, 2, 4, 6]
let newArray = array.filter(item => item !== 6)
console.log(newArray) // [1, 2, 4]
```

### reduce

`reduce` 可以将数组中的元素通过回调函数最终转换为一个值。

```
const arr = [1, 2, 3]
const sum = arr.reduce((acc, current) => acc + current, 0)
console.log(sum)
```

对于 `reduce` 来说，它接受两个参数，分别是回调函数和初始值，接下来我们来分解上述代码中 `reduce` 的过程

- 首先初始值为 `0`，该值会在执行第一次回调函数时作为第一个参数传入
- 回调函数接受四个参数，分别为累计值、当前元素、当前索引、原数组，后三者想必大家都可以明白作用，这里着重分析第一个参数
- 在一次执行回调函数时，当前值和初始值相加得出结果 `1`，该结果会在第二次执行回调函数时当做第一个参数传入
- 所以在第二次执行回调函数时，相加的值就分别是 `1` 和 `2`，以此类推，循环结束后得到结果 `6`

`reduce` 还可以实现很多功能，接下来我们就通过 `reduce` 来实现 `map` 函数

```
const arr = [1, 2, 3]
const mapArray = arr.map(value => value * 2)
const reduceArray = arr.reduce((acc, current) => {
  acc.push(current * 2)
  return acc
}, [])
console.log(mapArray, reduceArray) // [2, 4, 6]
```

### 数组常用方法分析

修改原数组的 API 有:

splice/reverse/fill/copyWithin/sort/push/pop/unshift/shift

不修改原数组的 API 有:

slice/map/forEach/every/filter/reduce/entries/find

- map: 遍历数组，返回回调返回值组成的新数组
- forEach: 无法 break，可以用 try/catch 中 throw new Error 来停止
- filter: 过滤
- some: 有一项返回 true，则整体为 true
- every: 有一项返回 false，则整体为 false
- join: 通过指定连接符生成字符串
- sort(fn) / reverse: 排序与反转，改变原数组
- concat: 连接数组，不影响原数组， 浅拷贝
- slice(start, end): 返回截断后的新数组，不改变原数组
- splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
- indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
- reduce / reduceRight(fn(prev, cur), defaultPrev): 两两执行，prev 为上次化简函数的 return 值，cur 为当前值(从第二项开始)



------

# JS 异步编程（需要补充看）

## 并发（concurrency）和并行（parallelism）区别

> 并发与并行的区别？

异步和这小节的知识点其实并不是一个概念，但是这两个名词确实是很多人都常会混淆的知识点。其实混淆的原因可能只是两个名词在中文上的相似，在英文上来说完全是不同的单词。

并发是宏观概念，我分别有任务 A 和任务 B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就可以称之为并发。

并行是微观概念，假设 CPU 中存在两个核心，那么我就可以同时完成任务 A、B。同时完成多个任务的情况就可以称之为并行。



## 回调函数（Callback）

> 什么是回调函数？回调函数有什么缺点？如何解决回调地狱问题？

回调函数应该是大家经常使用到的，以下代码就是一个回调函数的例子：

```
ajax(url, () => {
    // 处理逻辑
})
```

但是回调函数有一个致命的弱点，就是容易写出回调地狱（Callback hell）。假设多个请求存在依赖性，你可能就会写出如下代码：

```
ajax(url, () => {
    // 处理逻辑
    ajax(url1, () => {
        // 处理逻辑
        ajax(url2, () => {
            // 处理逻辑
        })
    })
})
```

回调地狱的根本问题就是：

1. 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身
2. 嵌套函数一多，就很难处理错误

当然，回调函数还存在着别的几个缺点，比如不能使用 `try catch` 捕获错误，不能直接 `return`。

在接下来的几小节中，我们将来学习通过别的技术解决这些问题。



## Generator(需要补充)

> 你理解的 Generator 是什么？

`Generator` 算是 ES6 中难理解的概念之一了，`Generator` 最大的特点就是可以控制函数的执行。

```
function *foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}

```

`Generator` 函数一般见到的不多，其实也于他有点绕有关系，并且一般会配合 co 库去使用。当然，我们可以通过 `Generator` 函数解决回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：

```
function *fetch() {
    yield ajax(url, () => {})
    yield ajax(url1, () => {})
    yield ajax(url2, () => {})
}
let it = fetch()
let result1 = it.next()
let result2 = it.next()
let result3 = it.next()

```

Generator: [https://www.cnblogs.com/whybxy/p/7645578.html](https://link.juejin.im/?target=https%3A%2F%2Fwww.cnblogs.com%2Fwhybxy%2Fp%2F7645578.html) 第三部分看完

Generator 文章链接:[https://www.cnblogs.com/wangfupeng1988/p/6532713.html](https://link.juejin.im/?target=https%3A%2F%2Fwww.cnblogs.com%2Fwangfupeng1988%2Fp%2F6532713.html)



## Promise(再看一下)

> Promise 的特点是什么，分别有什么优缺点？什么是 Promise 链？Promise 构造函数执行和 then 函数执行有什么区别？

`Promise` 翻译过来就是承诺的意思，这个承诺会在未来有一个确切的答复，并且该承诺有三种状态，分别是：

1. 等待中（pending）
2. 完成了 （resolved）
3. 拒绝了（rejected）

这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 resolved 后，就不能再次改变

```
new Promise((resolve, reject) => {
  resolve('success')
  // 无效
  reject('reject')
})
```

当我们在构造 `Promise` 的时候，构造函数内部的代码是立即执行的

```
new Promise((resolve, reject) => {
  console.log('new Promise')
  resolve('success')
})
console.log('finifsh')
// new Promise -> finifsh
```

`Promise` 实现了链式调用，也就是说每次调用 `then` 之后返回的都是一个 `Promise`，并且是一个全新的 `Promise`，原因也是因为状态不可变。如果你在 `then` 中 使用了 `return`，那么 `return` 的值会被 `Promise.resolve()` 包装

`Promise` 也很好地解决了回调地狱的问题，可以把之前的回调地狱例子改写为如下代码：

```
ajax(url)
  .then(res => {
      console.log(res)
      return ajax(url1)
  }).then(res => {
      console.log(res)
      return ajax(url2)
  }).then(res => console.log(res))
```

`Promise`也是存在一些缺点的，比如无法取消 `Promise`，错误需要通过回调函数捕获。



## async 及 await(需要补充)

> async 及 await 的特点，它们的优点和缺点分别是什么？await 原理是什么？

一个函数如果加上 `async` ，那么该函数就会返回一个 `Promise`

```
async function test() {
  return "1"
}
console.log(test()) // -> Promise {<resolved>: "1"}
```

`async` 就是将函数返回值使用 `Promise.resolve()` 包裹了下，和 `then` 中处理返回值一样，并且 `await` 只能配套 `async` 使用

```
async function test() {
  let value = await sleep()
}
```

`async` 和 `await` 可以说是异步终极解决方案了，相比直接使用 `Promise` 来说，优势在于处理 `then`的调用链，能够更清晰准确的写出代码，毕竟写一大堆 `then` 也很恶心，并且也能优雅地解决回调地狱问题。当然也存在一些缺点，因为 `await` 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 `await` 会导致性能上的降低。

```
async function test() {
  // 以下代码没有依赖性的话，完全可以使用 Promise.all 的方式
  // 如果有依赖性的话，其实就是解决回调地狱的例子了
  await fetch(url)
  await fetch(url1)
  await fetch(url2)
}
```

`await` 内部实现了 `generator`，其实 `await` 就是 `generator` 加上 `Promise` 的语法糖，且内部实现了自动执行 `generator`。



## 常用定时器函数

> setTimeout、setInterval、requestAnimationFrame 各有什么特点？

### setTimeout

最常用的`setTimeout`，很多人认为 `setTimeout` 是延时多久，那就应该是多久后执行。

其实这个观点是错误的，因为 JS 是单线程执行的，如果前面的代码影响了性能，就会导致 `setTimeout` 不会按期执行。当然了，我们可以通过代码去修正 `setTimeout`，从而使定时器相对准确

```
let period = 60 * 1000 * 60 * 2
let startTime = new Date().getTime()
let count = 0
let end = new Date().getTime() + period
let interval = 1000
let currentInterval = interval

function loop() {
  count++
  // 代码执行所消耗的时间
  let offset = new Date().getTime() - (startTime + count * interval);
  let diff = end - new Date().getTime()
  let h = Math.floor(diff / (60 * 1000 * 60))
  let hdiff = diff % (60 * 1000 * 60)
  let m = Math.floor(hdiff / (60 * 1000))
  let mdiff = hdiff % (60 * 1000)
  let s = mdiff / (1000)
  let sCeil = Math.ceil(s)
  let sFloor = Math.floor(s)
  // 得到下一次循环所消耗的时间
  currentInterval = interval - offset
  console.log('时：'+h, '分：'+m, '毫秒：'+s, '秒向上取整：'+sCeil, '代码执行时间：'+offset, '下次循环间隔'+currentInterval)

  setTimeout(loop, currentInterval)
}

setTimeout(loop, currentInterval)
```

### setInterval

这个函数作用和 `setTimeout` 基本一致，只是该函数是每隔一段时间执行一次回调函数。

通常来说不建议使用 `setInterval`。第一，它和 `setTimeout` 一样，不能保证在预期的时间执行任务。第二，它存在执行累积的问题。

### requestAnimationFrame

首先 `requestAnimationFrame` 自带函数节流功能，基本可以保证在 16.6 毫秒内只执行一次（不掉帧的情况下），并且该函数的延时效果是精确的，没有其他定时器时间不准的问题。

如果你有循环定时器的需求，其实完全可以通过 `requestAnimationFrame` 来实现

```
function setInterval(callback, interval) {
  let timer
  const now = Date.now
  let startTime = now()
  let endTime = startTime
  const loop = () => {
    timer = window.requestAnimationFrame(loop)
    endTime = now()
    if (endTime - startTime >= interval) {
      startTime = endTime = now()
      callback(timer)
    }
  }
  timer = window.requestAnimationFrame(loop)
  return timer
}

let a = 0
setInterval(timer => {
  console.log(1)
  a++
  if (a === 3) cancelAnimationFrame(timer)
}, 1000)
```





------

# 手写 Promise

首先：

[Promise/A+ 规范](https://promisesaplus.com/)

[Promise/A+ 规范（译）](https://link.juejin.im/?target=http%3A%2F%2Fwww.ituring.com.cn%2Farticle%2F66566)

[史上最最最详细的手写 Promise 教程](https://juejin.im/post/5b2f02cd5188252b937548ab)

<<<<<<< HEAD
###  Eventloop

#### 进程与线程

> 进程与线程区别？JS 单线程带来的好处？

进程描述了 CPU 在**运行指令及加载和保存上下文所需的时间**，放在应用上来说就代表了一个程序。线程是进程中的更小单位，描述了执行一段指令所需的时间。

把这些概念拿到浏览器中来说，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。

在 JS 运行的时候可能会阻止 UI 渲染，这说明了两个线程是**互斥**的。这其中的原因是因为 JS 可以修改 DOM，如果在 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。这其实也是一个单线程的好处，得益于 JS 是单线程运行的，可以达到节省内存，节约上下文切换时间，没有锁的问题的好处。当然前面两点在服务端中更容易体现，对于锁的问题，形象的来说就是当我读取一个数字 15 的时候，同时有两个操作对数字进行了加减，这时候结果就出现了错误。解决这个问题也不难，只需要在读取的时候加锁，直到读取完毕之前都不能进行写入操作。



####  执行栈

> 涉及面试题：什么是执行栈？

可以把执行栈认为是一个存储函数调用的**栈结构**，遵循先进后出的原则。



#### 浏览器中的 Event Loop

[【JS】Event-loop——JS执行机制](https://rosychen.com/2019/06/20/2019-06-20-[JS]Event-loop/)



### JS进阶知识点

#### 手写 call、apply 及 bind 函数

> call、apply 及 bind 函数内部实现是怎么样的？



































### Vue 常考基础知识点
------

# Event Lop

[【JS】Event-loop——JS 执行机制](https://rosychen.com/2019/06/20/2019-06-20-[JS]Event-loop/)

[这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89#heading-6)



------

# JS 高阶知识点

## 手写 call、apply 及 bind 函数(再看一下)

> call、apply 及 bind 函数内部实现是怎么样的？



## new

> new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别？

在调用 `new` 的过程中会发生以上四件事情：

1. 新生成了一个对象
2. 链接到原型
3. 绑定 this
4. 返回新对象

对于对象来说，其实都是通过 `new` 产生的，无论是 `function Foo()` 还是 `let a = { b : 1 }` 。

对于创建一个对象来说，更推荐使用字面量的方式创建对象（无论性能上还是可读性）。因为你使用 `new Object()` 的方式创建对象需要通过作用域链一层层找到 `Object`，但是你使用字面量的方式就没这个问题。



## instanceof 的原理

> instanceof 的原理是什么？

`instanceof` 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 `prototype`。

```
function myInstanceof(left, right) {
  let prototype = right.prototype
  left = left.__proto__
  while (true) {
    if (left === null || left === undefined)
      return false
    if (prototype === left)
      return true
    left = left.__proto__
  }
}
```

- 首先获取类型的原型
- 然后获得对象的原型
- 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 `null`，因为原型链最终为 `null`



## 为什么 0.1 + 0.2 != 0.3

> 为什么 0.1 + 0.2 != 0.3？如何解决这个问题？

JS 采用 IEEE 754 双精度版本（64 位），并且只要采用 IEEE 754 的语言都有该问题。

`0.1` 在二进制中是无限循环的一些数字，其实不只是 `0.1`，其实很多十进制小数用二进制表示都是无限循环的。这样其实没什么问题，但是 JS 采用的浮点数标准却会裁剪掉我们的数字。

那么这些循环的数字被裁剪了，就会出现精度丢失的问题，也就造成了 `0.1` 不再是 `0.1` 了，而是变成了 `0.100000000000000002`,同样的，`0.2` 在二进制也是无限循环的，被裁剪后也失去了精度变成了 `0.200000000000000002`

所以这两者相加不等于 `0.3` 而是 `0.300000000000000004`

既然 `0.1` 不是 `0.1`，那为什么 `console.log(0.1)` 却是正确的呢？

因为在输入内容的时候，二进制被转换为了十进制，十进制又被转换为了字符串，在这个转换的过程中发生了取近似值的过程，所以打印出来的其实是一个近似值，你也可以通过以下代码来验证

```
console.log(0.100000000000000002) // 0.1
```

那么说完了为什么，最后来说说怎么解决这个问题吧。其实解决的办法有很多，这里我们选用原生提供的方式来最简单的解决问题

```
parseFloat((0.1 + 0.2).toFixed(10)) === 0.3 // true
```



## 垃圾回收机制

> V8 下的垃圾回收机制是怎么样的？

V8 实现了准确式 GC(Garbage Collection)，GC 算法采用了分代式垃圾回收机制。因此，V8 将内存（堆）分为新生代和老生代两部分。

### 新生代算法

新生代中的对象一般存活时间较短，使用 Scavenge GC 算法。

在新生代空间中，内存空间分为两部分，分别为 From 空间和 To 空间。在这两个空间中，必定有一个空间是使用的，另一个空间是空闲的。新分配的对象会被放入 From 空间中，当 From 空间被占满时，新生代 GC 就会启动了。算法会检查 From 空间中存活的对象并复制到 To 空间中，如果有失活的对象就会销毁。当复制完成后将 From 空间和 To 空间互换，这样 GC 就结束了。

### 老生代算法

老生代中的对象一般存活时间较长且数量也多，使用了两个算法，分别是标记清除算法和标记压缩算法。

先来说下什么情况下对象会出现在老生代空间中：

- 新生代中的对象是否已经经历过一次 Scavenge 算法，如果经历过的话，会将对象从新生代空间移到老生代空间中。
- To 空间的对象占比大小超过 25 %。在这种情况下，为了不影响到内存分配，会将对象从新生代空间移到老生代空间中。

老生代中的空间很复杂，有如下几个空间

```
enum AllocationSpace {
  // TODO(v8:7464): Actually map this space's memory as read-only.
  RO_SPACE,    // 不变的对象空间
  NEW_SPACE,   // 新生代用于 GC 复制算法的空间
  OLD_SPACE,   // 老生代常驻对象空间
  CODE_SPACE,  // 老生代代码对象空间
  MAP_SPACE,   // 老生代 map 对象
  LO_SPACE,    // 老生代大空间对象
  NEW_LO_SPACE,  // 新生代大空间对象

  FIRST_SPACE = RO_SPACE,
  LAST_SPACE = NEW_LO_SPACE,
  FIRST_GROWABLE_PAGED_SPACE = OLD_SPACE,
  LAST_GROWABLE_PAGED_SPACE = MAP_SPACE
};
```

在这个阶段中，会遍历堆中所有的对象，然后标记活的对象，在标记完成后，销毁所有没有被标记的对象。在标记大型堆内存时，可能需要几百毫秒才能完成一次标记。这就会导致一些性能上的问题。为了解决这个问题，2011 年，V8 从 stop-the-world 标记切换到增量标志。在增量标记期间，GC 将标记工作分解为更小的模块，可以让 JS 应用逻辑在模块间隙执行一会，从而不至于让应用出现停顿情况。

在 2018 年，GC 技术又有了一个重大突破，这项技术名为并发标记。该技术可以让 GC 扫描和标记对象时，同时允许 JS 运行。

清除对象后会造成堆内存出现碎片的情况，当碎片超过一定限制后会启动压缩算法。在压缩过程中，将活的对象像一端移动，直到所有对象都移动完成然后清理掉不需要的内存。



---

# 浏览器基础知识点

## 事件触发三阶段

> 事件的触发过程是怎么样的？知道什么是事件代理嘛？

事件触发有三个阶段：

- `window` 往事件触发处传播，遇到注册的捕获事件会触发
- 传播到事件触发处时触发注册的事件
- 从事件触发处往 `window` 传播，遇到注册的冒泡事件会触发

事件触发一般来说会按照上面的顺序进行，但是也有特例，**如果给一个 body 中的子节点同时注册冒泡和捕获事件，事件触发会按照注册的顺序执行。**



## 注册事件

通常我们使用 `addEventListener` 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 `useCapture` 参数来说，该参数默认值为 `false` ，`useCapture` 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性

- `capture`：布尔值，和 `useCapture` 作用一样
- `once`：布尔值，值为 `true` 表示该回调只会调用一次，调用后会移除监听
- `passive`：布尔值，表示永远不会调用 `preventDefault`

一般来说，如果我们只希望事件只触发在目标上，这时候可以使用 `stopPropagation` 来阻止事件的进一步传播。通常我们认为 `stopPropagation` 是用来阻止事件冒泡的，其实该函数也可以阻止捕获事件。`stopImmediatePropagation` 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。



## 事件代理

如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话**应该注册在父节点上**

事件代理的方式相较于直接给目标注册事件来说，有以下优点：

- 节省内存
- 不需要给子节点注销事件



## 跨域（需要补充 nginx、优缺点、webworker 等）

> 什么是跨域？为什么浏览器要使用同源策略？你有几种方式可以解决跨域问题？了解预检请求嘛？

因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。

**那么是出于什么安全考虑才会引入这种机制呢？** 其实主要是用来防止 CSRF 攻击的。简单点说，CSRF 攻击是利用用户的登录态发起恶意请求。

也就是说，没有同源策略的情况下，A 网站可以被任意其他来源的 Ajax 访问到内容。如果你当前 A 网站还存在登录态，那么对方就可以通过 Ajax 获得你的任何信息。当然同源策略并不能完全阻止 CSRF。

**然后我们来考虑一个问题，请求跨域了，那么请求到底发出去没有？** 请求必然是发出去了，但是浏览器拦截了响应。你可能会疑问明明通过表单的方式可以发起跨域请求，为什么 Ajax 就不会。因为归根结底，跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。

接下来我们将来学习几种常见的方式来解决跨域的问题。

### JSONP

JSONP 的原理很简单，就是利用 `<script>` 标签没有跨域限制的漏洞。通过 `<script>` 标签指向一个需要访问的地址并提供一个回调函数来接收数据。

JSONP 使用简单且兼容性不错，但是只限于 `get` 请求。

在开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP，以下是简单实现

```
function jsonp(url, jsonpCallback, success) {
  let script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  window[jsonpCallback] = function(data) {
    success && success(data)
  }
  document.body.appendChild(script)
}
jsonp('http://xxx', 'callback', function(value) {
  console.log(value)
})
```

### CORS

CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 `XDomainRequest` 来实现。

浏览器会自动进行 CORS 通信，实现 CORS 通信的关键是**后端**。只要后端实现了 CORS，就实现了跨域。

服务端设置 `Access-Control-Allow-Origin` 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。

虽然设置 CORS 和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为**简单请求和复杂请求**。

### 简单请求

以 Ajax 为例，当满足以下条件时，会触发简单请求

1. 使用下列方法之一：
   - `GET`
   - `HEAD`
   - `POST`
2. `Content-Type` 的值仅限于下列三者之一：
   - `text/plain`
   - `multipart/form-data`
   - `application/x-www-form-urlencoded`

请求中的任意 `XMLHttpRequestUpload` 对象均没有注册任何事件监听器； `XMLHttpRequestUpload` 对象可以使用 `XMLHttpRequest.upload` 属性访问。

### 复杂请求

那么很显然，不符合以上条件的请求就肯定是复杂请求了。

对于复杂请求来说，首先会发起一个预检请求，该请求是 `option` 方法的，通过该请求来知道服务端是否允许跨域请求。

对于预检请求来说，如果你使用过 Node 来设置 CORS 的话，可能会遇到过这么一个坑。

以下以 express 框架举例：

```
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
  )
  next()
})
```

该请求会验证你的 `Authorization` 字段，没有的话就会报错。

当前端发起了复杂请求后，你会发现就算你代码是正确的，返回结果也永远是报错的。因为预检请求也会进入回调中，也会触发 `next` 方法，因为预检请求并不包含 `Authorization` 字段，所以服务端会报错。

想解决这个问题很简单，只需要在回调中过滤 `option` 方法即可

```
res.statusCode = 204
res.setHeader('Content-Length', '0')
res.end()
```

### document.domain

该方式只能用于**二级域名相同**的情况下，比如 `a.test.com` 和 `b.test.com` 适用于该方式。

只需要给页面添加 `document.domain = 'test.com'` 表示二级域名都相同就可以实现跨域

### postMessage

这种方式通常用于获取嵌入页面中的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息

```
// 发送消息端
window.parent.postMessage('message', 'http://test.com')
// 接收消息端
var mc = new MessageChannel()
mc.addEventListener('message', event => {
  var origin = event.origin || event.originalEvent.origin
  if (origin === 'http://test.com') {
    console.log('验证通过')
  }
})
```



## 存储

> 有几种方式可以实现存储功能，分别有什么优缺点？什么是 Service Worker？

### cookie，localStorage，sessionStorage，indexDB

我们先来通过表格学习下这几种存储方式的区别

| 特性         | **cookie**                                 | localStorage             | sessionStorage | indexDB                  |
| ------------ | ------------------------------------------ | ------------------------ | -------------- | ------------------------ |
| 数据生命周期 | 一般由服务器生成，可以设置过期时间         | 除非被清理，否则一直存在 | 页面关闭就清理 | 除非被清理，否则一直存在 |
| 数据存储大小 | 4K                                         | 5M                       | 5M             | 无限                     |
| 与服务端通信 | 每次都会携带在 header 中，对于请求性能影响 | 不参与                   | 不参与         | 不参与                   |

从上表可以看到，`cookie` 已经不建议用于存储。如果没有大量数据存储需求的话，可以使用 `localStorage` 和 `sessionStorage` 。对于不怎么改变的数据尽量使用 `localStorage` 存储，否则可以用 `sessionStorage` 存储。

对于 `cookie` 来说，我们还需要注意安全性。

value 如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识

http-only 不能通过 JS 访问 Cookie，减少 XSS 攻击

secure 只能在协议为 HTTPS 的请求中携带

same-site 规定浏览器不能在跨域请求中携带 Cookie，减少 CSRF 攻击

### Service Worker

Service Worker 是运行在浏览器背后的**独立线程**，一般可以用来实现缓存功能。使用 Service Worker 的话，传输协议必须为 **HTTPS**。因为 Service Worker 中涉及到请求拦截，所以必须使用 HTTPS 协议来保障安全。



---

# 浏览器缓存机制

> 该知识点属于性能优化领域

缓存可以说是性能优化中**简单高效**的一种优化方式了，它可以**显著减少网络传输所带来的损耗**。

对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存可以帮助我们在第一和第三步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。

## 缓存位置

从缓存位置上来说分为四种，并且各自有**优先级**，当依次查找缓存且都没有命中的时候，才会去请求网络

1. Service Worker

2. Memory Cache

3. Disk Cache

4. Push Cache

5. 网络请求

### Service Worker

Service Worker 的缓存与浏览器其他内建的缓存机制不同，它可以让我们**自由控制**缓存哪些文件、如何匹配缓存、如何读取缓存，并且**缓存是持续性的**。

当 Service Worker 没有命中缓存的时候，我们需要去调用 `fetch` 函数获取数据。也就是说，如果我们没有在 Service Worker 命中缓存的话，会根据缓存查找优先级去查找数据。

### Memory Cache

Memory Cache 也就是内存中的缓存，读取内存中的数据肯定比磁盘快。**但是内存缓存虽然读取高效，可是缓存持续性很短，会随着进程的释放而释放。** 一旦我们关闭 Tab 页面，内存中的缓存也就被释放了。

当我们访问过页面以后，再次刷新页面，可以发现很多数据都来自于内存缓存。

那么既然内存缓存这么高效，我们是不是能让数据都存放在内存中呢？

先说结论，这是**不可能**的。首先计算机中的内存一定比硬盘容量小得多，操作系统需要精打细算内存的使用，所以能让我们使用的内存必然不多。内存中其实可以存储大部分的文件，比如说 JSS、HTML、CSS、图片等等。但是浏览器会把哪些文件丢进内存这个过程就很**玄学**了，我查阅了很多资料都没有一个定论。

当然，我通过一些实践和猜测也得出了一些结论：

- 对于大文件来说，大概率是不存储在内存中的，反之优先
- 当前系统内存使用率高的话，文件优先存储进硬盘

### Disk Cache

Disk Cache 也就是存储在硬盘中的缓存，读取速度慢点，但是什么都能存储到磁盘中，比之 Memory Cache **胜在容量和存储时效性上。**

在所有浏览器缓存中，Disk Cache 覆盖面基本是最大的。它会根据 HTTP Herder 中的字段判断哪些资源需要缓存，哪些资源可以不请求直接使用，哪些资源已经过期需要重新请求。**并且即使在跨站点的情况下，相同地址的资源一旦被硬盘缓存下来，就不会再次去请求数据。**

### Push Cache

Push Cache 是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。**并且缓存时间也很短暂，只在会话（Session）中存在，一旦会话结束就被释放。**

### 网络请求

如果所有缓存都没有命中的话，那么只能发起请求来获取资源了。

那么为了性能上的考虑，大部分的接口都应该选择好缓存策略，接下来我们就来学习缓存策略这部分的内容。



## 缓存策略

通常浏览器缓存策略分为两种：**强缓存**和**协商缓存**，并且缓存策略都是通过设置 HTTP Header 来实现的。

### 强缓存

强缓存可以通过设置两种 HTTP Header 实现：`Expires` 和 `Cache-Control` 。强缓存表示在缓存期间不需要请求，`state code` 为 200。

#### Expires

```
Expires: Wed, 22 Oct 2018 08:41:00 GMT
```

`Expires` 是 HTTP/1 的产物，表示资源会在 `Wed, 22 Oct 2018 08:41:00 GMT` 后过期，需要再次请求。并且 `Expires` **受限于本地时间**，如果修改了本地时间，可能会造成缓存失效。

#### Cache-control

```
Cache-control: max-age=30
```

`Cache-Control` 出现于 HTTP/1.1，**优先级高于 Expires** 。该属性值表示资源会在 30 秒后过期，需要再次请求。

`Cache-Control` **可以在请求头或者响应头中设置**，并且可以组合使用多种指令



### 协商缓存

如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 HTTP Header 实现：`Last-Modified` 和 `ETag` 。

当浏览器发起请求验证资源时，如果资源没有做改变，那么服务端就会返回 304 状态码，并且更新浏览器缓存有效期。

####  Last-Modified 和 If-Modified-Since

`Last-Modified` 表示本地文件最后修改日期，`If-Modified-Since` 会将 `Last-Modified` 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来，否则返回 304 状态码。

但是 `Last-Modified` 存在一些弊端：

- 如果本地打开缓存文件，即使没有对文件进行修改，但还是会造成 `Last-Modified` 被修改，服务端不能命中缓存导致发送相同的资源
- 因为 `Last-Modified` 只能以秒计时，如果在不可感知的时间内修改完成文件，那么服务端会认为资源还是命中了，不会返回正确的资源

因为以上这些弊端，所以在 HTTP / 1.1 出现了 `ETag` 。

#### ETag 和 If-None-Match

`ETag` 类似于文件指纹，`If-None-Match` 会将当前 `ETag` 发送给服务器，询问该资源 `ETag` 是否变动，有变动的话就将新的资源发送回来。并且 `ETag` 优先级比 `Last-Modified` 高。

以上就是缓存策略的所有内容了，看到这里，不知道你是否存在这样一个疑问。**如果什么缓存策略都没设置，那么浏览器会怎么处理？**

对于这种情况，浏览器会采用一个启发式的算法，通常会取响应头中的 `Date` 减去 `Last-Modified` 值的 10% 作为缓存时间。

## 实际场景应用缓存策略

单纯了解理论而不付诸于实践是没有意义的，接下来通过几个场景学习下如何使用这些理论。

### 频繁变动的资源

对于频繁变动的资源，首先需要使用 `Cache-Control: no-cache` 使浏览器每次都请求服务器，然后配合 `ETag` 或者 `Last-Modified` 来验证资源是否有效。这样的做法虽然不能节省请求数量，但是能显著减少响应数据大小。

### 代码文件

这里特指除了 HTML 外的代码文件，因为 HTML 文件一般不缓存或者缓存时间很短。

一般来说，现在都会使用工具来打包代码，那么我们就可以对文件名进行哈希处理，只有当代码修改后才会生成新的文件名。基于此，我们就可以给代码文件设置缓存有效期一年 `Cache-Control: max-age=31536000`，这样只有当 HTML 文件中引入的文件名发生了改变才会去下载最新的代码文件，否则就一直使用缓存。

浏览器缓存文章：[https://github.com/ljianshu/Blog/issues/23](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fljianshu%2FBlog%2Fissues%2F23)



---

# 浏览器渲染原理

 JS 有一个 JS 引擎，那么执行渲染也有一个渲染引擎。同样，渲染引擎在不同的浏览器中也不是都相同的。比如在 Firefox 中叫做 **Gecko**，在 Chrome 和 Safari 中都是基于 **WebKit** 开发的。

## 浏览器接收到 HTML 文件并转换为 DOM 树

过程：字节数据——字符串——Token——Node——DOM



## 将 CSS 文件转换为 CSSOM 树

过程：字节数据——字符串——Token——Node——CSSOM

我们应该尽可能的避免写**过于具体**的 CSS 选择器，比如**div** > **a** > **span** {}，然后对于 HTML 来说也尽量少的添加无意义标签，保证**层级扁平**。



## 生成渲染树

当我们生成 DOM 树和 CSSOM 树以后，就需要将这两棵树组合为渲染树。

在这一过程中，不是简单的将两者合并就行了。渲染树只会包括**需要显示的节点**和这些节点的样式信息，如果某个节点是 `display: none` 的，那么就不会在渲染树中显示。

当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流），然后调用 GPU 绘制，合成图层，显示在屏幕上。对于这一部分的内容因为过于底层，还涉及到了硬件相关的知识，这里就不再继续展开内容了。



## 为什么操作 DOM 慢

因为 DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。当我们通过 JS 操作 DOM 的时候，其实这个操作涉及到了两个线程之间的通信，那么势必会带来一些性能上的损耗。操作 DOM 次数一多，也就等同于一直在进行线程之间的通信，并且操作 DOM 可能还会带来重绘回流的情况，所以也就导致了性能上的问题。

> 经典面试题：插入几万个 DOM，如何实现页面不卡顿？

对于这道题目来说，首先我们肯定不能一次性把几万个 DOM 全部插入，这样肯定会造成卡顿，所以解决问题的重点应该是如何分批次部分渲染 DOM。大部分人应该可以想到通过 `requestAnimationFrame` 的方式去循环的插入 DOM，其实还有种方式去解决这个问题：**虚拟滚动**（virtualized scroller）。

[虚拟滚动的轮子是如何造成的？](https://link.juejin.im/?target=https%3A%2F%2Fjuejin.im%2Fpost%2F5ae05bd66fb9a07aa631724b)

**这种技术的原理就是只渲染可视区域内的内容，非可见区域的那就完全不渲染了，当用户在滚动的时候就实时去替换渲染的内容。**

从上图中我们可以发现，即使列表很长，但是渲染的 DOM 元素永远只有那么几个，当我们滚动页面的时候就会实时去更新 DOM，这个技术就能顺利解决这道经典面试题。



## 什么情况阻塞渲染

首先渲染的前提是生成渲染树，所以 HTML 和 CSS 肯定会阻塞渲染。如果你想渲染的越快，你越应该降低一开始需要渲染的文件**大小**，并且**扁平层级，优化选择器**。

然后当浏览器在解析到 `script` 标签时，会暂停构建 DOM，完成后才会从暂停的地方重新开始。也就是说，如果你想首屏渲染的越快，就越不应该在首屏就加载 JS 文件，这也是都建议将 `script` 标签放在 `body` 标签底部的原因。

当然在当下，并不是说 `script` 标签必须放在底部，因为你可以给 `script` 标签添加 `defer` 或者 `async` 属性。

当 `script` 标签加上 `defer` 属性以后，表示该 JS 文件会并行下载，但是会放到 HTML 解析完成后顺序执行，所以对于这种情况你可以把 `script` 标签放在任意位置。

对于没有任何依赖的 JS 文件可以加上 `async` 属性。

async还是会阻塞渲染的， async与defer一样，下载不阻塞html解析，但async是js谁下载完谁就立即执行，会阻塞html解析，defer是html解析完成后才按顺序执行下载的js 。



## 重绘（Repaint）和回流（Reflow）

重绘和回流会在我们设置节点样式时频繁出现，同时也会很大程度上影响性能。

- 重绘是当节点需要更改外观而不会影响布局的，比如改变 `color` 就叫称为重绘
- 回流是布局或者几何属性需要改变就称为回流。

回流**必定**会发生重绘，重绘**不一定**会引发回流。回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列回流。

以下几个动作可能会导致性能问题：

- 改变 `window` 大小
- 改变字体
- 添加或删除样式
- 文字改变
- 定位或者浮动
- 盒模型

并且很多人不知道的是，重绘和回流其实也和 Eventloop 有关。

1. 当 Eventloop 执行完 Microtasks 后，会判断 `document` 是否需要更新，因为浏览器是 60Hz 的刷新率，每 16.6ms 才会更新一次。
2. 然后判断是否有 `resize` 或者 `scroll` 事件，有的话会去触发事件，所以 `resize` 和 `scroll` 事件也是至少 16ms 才会触发一次，并且自带节流功能。
3. 判断是否触发了 media query
4. 更新动画并且发送事件
5. 判断是否有全屏操作事件
6. 执行 `requestAnimationFrame` 回调
7. 执行 `IntersectionObserver` 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
8. 更新界面
9. 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 `requestIdleCallback` 回调。

### 减少重绘和回流

- 使用 `transform` 替代 `top`

- 使用 `visibility` 替换 `display: none` ，因为前者只会引起重绘，后者会引发回流（改变了布局）

- 不要把节点的属性值放在一个循环里当成循环里的变量
- 不要使用 `table` 布局，可能很小的一个小改动会造成整个 `table` 的重新布局
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 `requestAnimationFrame`
- CSS 选择符**从右往左**匹配查找，避免节点层级过多

- 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 `video` 标签来说，浏览器会自动将该节点变为图层。

  设置节点为图层的方式有很多，我们可以通过以下几个常用属性可以生成新图层：

  - `will-change`
  - `video`、`iframe` 标签



## 思考

> 在不考虑缓存和优化网络协议的前提下，考虑可以通过哪些方式来最快的渲染页面，也就是常说的关键渲染路径，这部分也是性能优化中的一块内容。

怎么测量到底有没有加快渲染速度：当发生 `DOMContentLoaded` 事件后，就会生成渲染树，生成渲染树就可以进行渲染了，这一过程更大程度上和硬件有关系了。

**提示如何加速：**

1. 从文件大小考虑
2. 从 `script` 标签使用上来考虑
3. 从 CSS、HTML 的代码书写上来考虑
4. 从需要下载的内容是否需要在首屏使用上来考虑

答案：

1. 减少文件大小，尽量压缩。
2. script标签异步加载。
3. css不要写多层级选择器，html减少无意义标签，扁平化，避免多层无意义嵌套。
4. 首页内容尽量优化，减少不必要加载或延后加载。
5. 对首页布局样式无影响的js延后加载。



# 安全防范知识点

## XSS

> 什么是 XSS 攻击？如何防范 XSS 攻击？什么是 CSP？

### 什么是XSS攻击？

XSS（Cross-Site Scripting，又称跨站脚本攻击）是一种代码注入攻击，攻击者是通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可以获取用户的敏感信息，比如cookie,sessionID等 ，进而危害数据安全。

### 攻击来源分为三类

#### 1. 存储型XSS

- 攻击步骤：攻击者将恶意代码提交到目标网站的数据库中，用户打开网站是，网站服务端将恶意代码从数据库中取出，拼接在HTML中返回浏览器，之后用户浏览器收到响应后解析执行混入其中的恶意代码，恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户行为，调用目标网站接口执行攻击者指定的操作。
- 常见于带有用户保存数据的网站功能，比如论坛发帖、商品评价、用户私信等等。

#### 2. 反射型XSS

- 攻击步骤：攻击者构造出特殊的URL，其中包含恶意代码。当用户打开带有恶意代码的URL时，网站服务端将恶意代码从URL中取出，拼接在HTML中返回浏览器，之后用户浏览器收到响应后解析执行混入其中的恶意代码，恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户行为，调用目标网站接口执行攻击者指定的操作。
- 常见于通过 URL 传递参数的功能，如网站搜索、跳转等。由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击。
- 反射型 XSS 跟存储型 XSS 的区别是：存储型 XSS 的恶意代码存在数据库里，反射型 XSS 的恶意代码存在 URL 里。

#### 3. DOM型XSS

- 攻击步骤：攻击者构造出特殊的URL，其中包含恶意代码，用户打开带有恶意代码的URL，用户浏览器打开带有恶意代码的URL，之后用户浏览器收到响应后解析执行，前端JS取出URL中的恶意代码并执行，恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户行为，调用目标网站接口执行攻击者指定的操作。
- DOM 型 XSS 跟前两种 XSS 的区别：DOM 型 XSS 攻击中，取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞。

### 如何防御

防止 HTML 中出现注入；防止 JavaScript 执行时，执行恶意代码。

1. 预防存储型和反射型 XSS 攻击：

- 改成纯前端渲染，把代码和数据分隔开。
- 对 HTML 做充分转义。

2. 预防 DOM 型 XSS 攻击：

- 在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等。
- 如果用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患。

3. 其他XSS攻击防范：

- Content Security Policy（CSP）
- 输入内容长度控制，增加XSS攻击的难度。
- HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie。
- 验证码：防止脚本冒充用户提交危险操作。



## CSRF

> 什么是 CSRF 攻击？如何防范 CSRF 攻击？

CSRF (Cross—Site Request Forgery)跨站请求伪造。原理就是攻击者构造出一个后端请求地址，诱导用户点击或者通过某些途径自动发起请求。如果用户是在登录状态下的话，后端就以为是用户在操作，从而进行相应的逻辑。

可以这样来理解：
攻击者盗用了你的身份，以你的名义发送恶意请求，对服务器来说这个请求是完全合法的，但是却完成了攻击者所期望的一个操作，比如以你的名义发送邮件、发消息，盗取你的账号，添加系统管理员，甚至于购买商品、虚拟货币转账等。

### 攻击原理

CSRF攻击攻击原理及过程如下：

1. 用户C打开浏览器，访问受信任网站A，输入用户名和密码请求登录网站A；
2.  在用户信息通过验证后，网站A产生Cookie信息并返回给浏览器，此时用户登录网站A成功，可以正常发送请求到网站A；
3. 用户未退出网站A之前，在同一浏览器中，打开一个TAB页访问网站B；
4. 网站B接收到用户请求后，返回一些攻击性代码，并发出一个请求要求访问第三方站点A；
5. 浏览器在接收到这些攻击性代码后，根据网站B的请求，在用户不知情的情况下携带Cookie信息，向网站A发出请求。网站A并不知道该请求其实是由B发起的，所以会根据用户C的Cookie信息以C的权限处理该请求，导致来自网站B的恶意代码被执行。 

### 检测CSRF漏洞

检测CSRF漏洞是一项比较繁琐的工作，最简单的方法就是抓取一个正常请求的数据包，去掉Referer字段后再重新提交，如果该提交还有效，那么基本上可以确定存在CSRF漏洞。

### 如何防御

防范 CSRF 攻击可以遵循以下几种规则：

1. Get 请求不对数据进行修改
2. 不让第三方网站访问到用户 Cookie
3. 阻止第三方网站请求接口
4. 请求时附带验证信息，比如验证码或者 Token

#### SameSite

可以对 Cookie 设置 `SameSite` 属性。该属性表示 Cookie 不随着跨域请求发送，可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。

#### 验证 Referer

**对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。**

HTTP Referer是header的一部分，当浏览器向web服务器发送请求时，一般会带上Referer信息告诉服务器是从哪个页面链接过来的，服务器籍此可以获得一些信息用于处理。可以通过检查请求的来源来防御CSRF攻击。正常请求的referer具有一定规律，如在提交表单的referer必定是在该页面发起的请求。所以**通过检查http包头referer的值是不是这个页面，来判断是不是CSRF攻击**。

但在某些情况下如从https跳转到http，浏览器处于安全考虑，不会发送referer，服务器就无法进行check了。若与该网站同域的其他网站有XSS漏洞，那么攻击者可以在其他网站注入恶意脚本，受害者进入了此类同域的网址，也会遭受攻击。出于以上原因，无法完全依赖Referer Check作为防御CSRF的主要手段。但是可以通过Referer Check来监控CSRF攻击的发生。

#### Anti CSRF Token

目前比较完善的解决方案是加入Anti-CSRF-Token。即发送请求时在HTTP 请求中以参数的形式加入一个随机产生的token，并在服务器建立一个拦截器来验证这个token。服务器读取浏览器当前域cookie中这个token值，会进行校验该请求当中的token和cookie当中的token值是否都存在且相等，才认为这是合法的请求。否则认为这次请求是违法的，拒绝该次服务。

**这种方法相比Referer检查要安全很多**，token可以在用户登陆后产生并放于session或cookie中，然后在每次请求时服务器把token从session或cookie中拿出，与本次请求中的token 进行比对。由于token的存在，攻击者无法再构造出一个完整的URL实施CSRF攻击。但在处理多个页面共存问题时，当某个页面消耗掉token后，其他页面的表单保存的还是被消耗掉的那个token，其他页面的表单提交时会出现token错误。

#### 验证码

应用程序和用户进行交互过程中，特别是账户交易这种核心步骤，强制用户输入验证码，才能完成最终请求。在通常情况下，验证码够很好地遏制CSRF攻击。**但增加验证码降低了用户的体验，网站不能给所有的操作都加上验证码**。所以只能将验证码作为一种辅助手段，在关键业务点设置验证码。



## 点击劫持

> 什么是点击劫持？如何防范点击劫持？

点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 `iframe` 嵌套的方式嵌入自己的网页中，并将 `iframe` 设置为透明，在页面中透出一个按钮诱导用户点击。

### 如何防御

### 服务端：

#### X-FRAME-OPTIONS

`X-FRAME-OPTIONS` 是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应头 就是为了防御用 `iframe` 嵌套的点击劫持攻击。

该响应头有三个值可选，分别是

- `DENY`，表示页面不允许通过 `iframe` 的方式展示
- `SAMEORIGIN`，表示页面可以在相同域名下通过 `iframe` 的方式展示
- `ALLOW-FROM`，表示页面可以在指定来源的 `iframe` 中展示

如果浏览器使用了这个安全机制，在网站发现可疑行为时，会提示用户正在浏览 网页存在安全隐患，并建议用户在新窗口中打开。这样攻击者就无法通过 iframe 隐藏目标的网页。

#### 使用 FrameBusting 代码
使用 JavaScript 脚本阻止恶意网站载入网页。如果检测到网页被非法网页载入，就执行自动跳转功能。Frame Busting代码是一种有效防御网站被攻击者恶意载入的方法，网站开发人员使用Frame Busting代码阻止页面被非法载入。 

#### 使用认证码认证用户 

点击劫持漏洞通过伪造网站界面进行攻击，网站开发人员可以通过认证码识别用户，确定是用户发出的点击命令才执行相应操作。识别用户的方法中最有效的方法是认证码认证。例如，在网站上广泛存在的发帖认证码，要求用户输入图形中的字符，输入某些图形的特征等。



### 客户端

#### 升级浏览器 

最新版本的浏览器提供很多防御点击劫持漏洞的安全机制，对于普通的互联网用户，经常更新修复浏览器的安全漏洞，能够最有效的防止恶意攻击。

####  NoScript 扩展 

对于Firefox的用户，使用 NoScript 扩展能够在一定程度上检测和阻止点击劫持攻击。利用 NoScript 中 ClearClick 组件能够检测和警告潜在的点击劫持攻击，自动检测页面中可能不安全的页面。



## 中间人攻击

> 什么是中间人攻击？如何防范中间人攻击？

中间人攻击是攻击方同时与服务端和客户端建立起了连接，并让对方认为连接是安全的，但是实际上整个通信过程都被攻击者控制了。攻击者不仅能获得双方的通信信息，还能修改通信信息。

通常来说不建议使用公共的 Wi-Fi，因为很可能就会发生中间人攻击的情况。如果你在通信的过程中涉及到了某些敏感信息，就完全暴露给攻击方了。

当然防御中间人攻击其实并不难，只需要增加一个安全通道来传输信息。HTTPS 就可以用来防御中间人攻击，但是并不是说使用了 HTTPS 就可以高枕无忧了，因为如果你没有完全关闭 HTTP 访问的话，攻击方可以通过某些方式将 HTTPS 降级为 HTTP 从而实现中间人攻击。

推荐阅读 ：[常见六大Web安全攻防解析](<https://github.com/ljianshu/Blog/issues/56>)



# 从 V8 中看 JS 性能优化

>  该知识点属于性能优化领域

## 测试性能工具

chrome浏览器提供的**Audits**、 **Performance**



## JS性能优化

推荐阅读文章

[[译] JavaScript 引擎基础：Shapes 和 Inline Caches](<https://hijiangtao.github.io/2018/06/17/Shapes-ICs/>)

[WebAssembly 系列（二）JavaScript Just-in-time (JIT) 工作原理](<https://www.w3ctech.com/topic/2026>)

JIT 是什么呢？它是使 JavaScript 运行更快的一种手段，通过监视代码的运行状态，把 `hot` 代码（重复执行多次的代码）进行优化。通过这种方式，可以使 JavaScript 应用的性能提升很多倍。

为了使执行速度变快，JIT 会增加很多多余的开销，这些开销包括：

- 优化和去优化开销
- 监视器记录信息对内存的开销
- 发生去优化情况时恢复信息的记录对内存的开销
- 对基线版本和优化后版本记录的内存开销



# 性能优化琐碎事

> 该知识点属于性能优化领域。

## 图片优化

### 计算图片大小

对于一张 100 * 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 **RGBA** 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1个字节），所以该图片大小大概为 39KB（10000 * 1 * 4 / 1024）。

但是在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。

了解了如何计算图片大小的知识，那么对于如何优化图片，想必大家已经有 2 个思路了：

- **减少像素点**
- **减少每个像素点能够显示的颜色**



### 图片加载优化

1. 不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。
2. 对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。
3. 小图使用 base64 格式
4. 将多个图标文件整合到一张图片中（雪碧图）
5. 选择正确的图片格式：
   - 对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好
   - 小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替
   - 照片使用 JPEG



## DNS 预解析

DNS 解析也是需要时间的，可以通过预解析的方式来预先获得域名所对应的 IP。

```
<link rel="dns-prefetch" href="//yuchengkai.cn">
```



## 防抖

节流：用户工作时，我工作一段时间了，休息一会儿再接着工作(一段时间内只触发一次，用户动作不停，会间断的多次触发)；
防抖：用户不工作一段时间了，我开始工作了(间隔一段时间才触发一次，用户动作不停就一直不触发)

推荐阅读：[函数防抖与函数节流 By司徒正美](https://zhuanlan.zhihu.com/p/38313717)

[前端战五渣学JavaScript——防抖、节流和rAF](https://zhuanlan.zhihu.com/p/64946941>)

考虑一个场景，有一个按钮点击会触发网络请求，但是我们并不希望每次点击都发起网络请求，而是当用户点击按钮一段时间后没有再次点击的情况才去发起网络请求，对于这种情况我们就可以使用防抖。

理解了防抖的用途，我们就来实现下这个函数

```
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null) 
                clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));
```



## 节流

考虑一个场景，滚动事件中会发起网络请求，但是我们并不希望用户在滚动过程中一直发起请求，而是隔一段时间发起一次，对于这种情况我们就可以使用节流。

理解了节流的用途，我们就来实现下这个函数

```
var throttle = function(func, delay) {
            var prev = Date.now();
            return function() {
                var context = this;
                var args = arguments;
                var now = Date.now();
                if (now - prev >= delay) {
                    func.apply(context, args);
                    prev = Date.now();
                }
            }
        }
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));
```





## 预加载

在开发中，可能会遇到这样的情况。有些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。

预加载其实是声明式的 `fetch` ，强制浏览器请求资源，并且不会阻塞 `onload` 事件，可以使用以下代码开启预加载

```
<link rel="preload" href="http://example.com">
```

预加载可以一定程度上降低首屏的加载时间，因为可以将一些不影响首屏但重要的文件延后加载，唯一缺点就是兼容性不好。



## 预渲染

可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染

```
<link rel="prerender" href="http://example.com"> 
```

预渲染虽然可以提高页面的加载速度，但是要确保该页面大概率会被用户在之后打开，否则就是白白浪费资源去渲染。



## 懒执行

懒执行就是将某些逻辑延迟到使用时再计算。该技术可以用于首屏优化，对于某些耗时逻辑并不需要在首屏就使用的，就可以使用懒执行。懒执行需要唤醒，一般可以通过定时器或者事件的调用来唤醒。



## 懒加载

懒加载就是将不关键的资源延后加载。

懒加载的原理就是只加载自定义区域（通常是可视区域，但也可以是即将进入可视区域）内需要加载的东西。对于图片来说，先设置图片标签的 `src` 属性为一张占位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，就将自定义属性替换为 `src` 属性，这样图片就会去下载资源，实现了图片懒加载。

懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等等。



## CDN

CDN 的原理是尽可能的在各个地方分布机房缓存数据，这样即使我们的根服务器远在国外，在国内的用户也可以通过国内的机房迅速加载资源。

因此，我们可以将静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。并且对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie，平白消耗流量。



# Webpack 性能优化

Webpack这部分，如何写配置文件，可以去官网学习。

## 减少 Webpack 打包时间

### 优化 Loader

对于 Loader 来说，影响打包效率首当其冲必属 Babel 了。因为 Babel 会将代码转为字符串生成 AST，然后对 AST 继续进行转变最后再生成新的代码，项目越大，**转换代码越多，效率就越低**。当然了，我们是有办法优化的。

首先我们可以**优化 Loader 的文件搜索范围**

```
module.exports = {
  module: {
    rules: [
      {
        // js 文件才使用 babel
        test: /\.js$/,
        loader: 'babel-loader',
        // 只在 src 文件夹下查找
        include: [resolve('src')],
        // 不会去查找的路径
        exclude: /node_modules/
      }
    ]
  }
}
```

对于 Babel 来说，我们肯定是希望只作用在 JS 代码上的，然后 `node_modules` 中使用的代码都是编译过的，所以我们也完全没有必要再去处理一遍。

当然这样做还不够，我们还可以将 Babel 编译过的文件**缓存**起来，下次只需要编译更改过的代码文件即可，这样可以大幅度加快打包时间

```
loader: 'babel-loader?cacheDirectory=true'
```



### HappyPack

受限于 Node 是单线程运行的，所以 Webpack 在打包的过程中也是单线程的，特别是在执行 Loader 的时候，长时间编译的任务很多，这样就会导致等待的情况。

**HappyPack 可以将 Loader 的同步执行转换为并行的**，这样就能充分利用系统资源来加快打包效率了

```
module: {
  loaders: [
    {
      test: /\.js$/,
      include: [resolve('src')],
      exclude: /node_modules/,
      // id 后面的内容对应下面
      loader: 'happypack/loader?id=happybabel'
    }
  ]
},
plugins: [
  new HappyPack({
    id: 'happybabel',
    loaders: ['babel-loader?cacheDirectory'],
    // 开启 4 个线程
    threads: 4
  })
]
```



### DllPlugin

**DllPlugin 可以将特定的类库提前打包然后引入**。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。

接下来我们就来学习如何使用 DllPlugin

```
// 单独配置在一个文件中
// webpack.dll.conf.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    // 想统一打包的类库
    vendor: ['react']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]-[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      // name 必须和 output.library 一致
      name: '[name]-[hash]',
      // 该属性需要与 DllReferencePlugin 中一致
      context: __dirname,
      path: path.join(__dirname, 'dist', '[name]-manifest.json')
    })
  ]
}
```

然后我们需要执行这个配置文件生成依赖文件，接下来我们需要使用 `DllReferencePlugin` 将依赖文件引入项目中

```
// webpack.conf.js
module.exports = {
  // ...省略其他配置
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      // manifest 就是之前打包出来的 json 文件
      manifest: require('./dist/vendor-manifest.json'),
    })
  ]
}
```



### 代码压缩

在 Webpack3 中，我们一般使用 `UglifyJS` 来压缩代码，但是这个是单线程运行的，为了加快效率，我们可以使用 `webpack-parallel-uglify-plugin` 来并行运行 `UglifyJS`，从而提高效率。

在 Webpack4 中，我们就不需要以上这些操作了，只需要将 `mode` 设置为 `production` 就可以默认开启以上功能。代码压缩也是我们必做的性能优化方案，当然我们不止可以压缩 JS 代码，还可以压缩 HTML、CSS 代码，并且在压缩 JS 代码的过程中，我们还可以通过配置实现比如删除 `console.log` 这类代码的功能。



### 一些小的优化点

我们还可以通过一些小的优化点来加快打包速度

- `resolve.extensions`：用来表明文件后缀列表，默认查找顺序是 `['.js', '.json']`，如果你的导入文件没有添加后缀就会按照这个顺序查找文件。我们应该尽可能减少后缀列表长度，然后将出现频率高的后缀排在前面
- `resolve.alias`：可以通过别名的方式来映射一个路径，能让 Webpack 更快找到路径
- `module.noParse`：如果你确定一个文件下没有其他依赖，就可以使用该属性让 Webpack 不扫描该文件，这种方式对于大型的类库很有帮助



## 减少 Webpack 打包后的文件体积

### 按需加载

想必大家在开发 SPA 项目的时候，项目中都会存在十几甚至更多的路由页面。如果我们将这些页面全部打包进一个 JS 文件的话，虽然将多个请求合并了，但是同样也加载了很多并不需要的代码，耗费了更长的时间。那么为了首页能更快地呈现给用户，我们肯定是希望首页能加载的文件体积越小越好，**这时候我们就可以使用按需加载，将每个路由页面单独打包为一个文件**。当然不仅仅路由可以按需加载，对于 `loadash` 这种大型类库同样可以使用这个功能。

按需加载的代码实现这里就不详细展开了，因为鉴于用的框架不同，实现起来都是不一样的。当然了，虽然他们的用法可能不同，但是底层的机制都是一样的。都是当使用的时候再去下载对应文件，返回一个 `Promise`，当 `Promise` 成功以后去执行回调。



### Scope Hoisting

**Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去。**

比如我们希望打包两个文件

```
// test.js
export const a = 1
// index.js
import { a } from './test.js'
```

对于这种情况，我们打包出来的代码会类似这样

```
[
  /* 0 */
  function (module, exports, require) {
    //...
  },
  /* 1 */
  function (module, exports, require) {
    //...
  }
]
```

但是如果我们使用 Scope Hoisting 的话，代码就会尽可能的合并到一个函数中去，也就变成了这样的类似代码

```
[
  /* 0 */
  function (module, exports, require) {
    //...
  }
]
```

这样的打包方式生成的代码明显比之前的少多了。如果在 Webpack4 中你希望开启这个功能，只需要启用 `optimization.concatenateModules` 就可以了。

```
module.exports = {
  optimization: {
    concatenateModules: true
  }
}
```



### Tree Shaking

**Tree Shaking 可以实现删除项目中未被引用的代码**，比如

```
// test.js
export const a = 1
export const b = 2
// index.js
import { a } from './test.js'
```

对于以上情况，`test` 文件中的变量 `b` 如果没有在项目中使用到的话，就不会被打包到文件中。

如果你使用 Webpack 4 的话，开启生产环境就会自动启动这个优化功能。



### 开启gzip压缩



# React 和 Vue 两大框架

## MVVM

> 什么是 MVVM？比之 MVC 有什么区别？

先说下 View 和 Model：

- View 很简单，就是用户看到的视图
- Model 同样很简单，一般就是本地数据和数据库中的数据

基本上，我们写的产品就是通过接口从数据库中读取数据，然后将数据经过处理展现到用户看到的视图上。如何将数据展示到视图上，然后又如何将用户的输入写入到数据中，不同的人就产生了不同的看法，从此出现了很多种架构设计。

传统的 MVC 架构通常是使用控制器更新模型，视图从模型中获取数据去渲染。当用户有输入时，会通过控制器去更新模型，并且通知视图进行更新。

![mvc](mvvm1.png)



但是 MVC 有一个巨大的缺陷就是**控制器承担的责任太大**了，随着项目愈加复杂，控制器中的代码会越来越**臃肿**，导致出现不利于**维护**的情况。

在 MVVM 架构中，引入了 **ViewModel** 的概念。ViewModel 只关心数据和业务的处理，不关心 View 如何处理数据，在这种情况下，View 和 Model 都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可复用的逻辑放在一个 ViewModel 中，让多个 View 复用这个 ViewModel。

![mvc](mvvm2.png)

以 Vue 框架来举例，ViewModel 就是组件的实例。View 就是模板，Model 的话在引入 Vuex 的情况下是完全可以和组件分离的。

除了以上三个部分，其实在 MVVM 中还引入了一个隐式的 Binder 层，实现了 View 和 ViewModel 的绑定。

![mvc](mvvm3.png)

同样以 Vue 框架来举例，这个**隐式**的 Binder 层就是 Vue 通过解析模板中的插值和指令从而实现 View 与 ViewModel 的绑定。

对于 MVVM 来说，其实最重要的并不是通过双向绑定或者其他的方式将 View 与 ViewModel 绑定起来，**而是通过 ViewModel 将视图中的状态和用户的行为分离出一个抽象，这才是 MVVM 的精髓**。



## Virtual DOM

> 什么是 Virtual DOM？为什么 Virtual DOM 比原生 DOM 快？

相较于 DOM 来说，操作 JS 对象会快很多，并且我们也可以通过 JS 来模拟 DOM。

那么既然 DOM 可以通过 JS 对象来模拟，反之也可以通过 JS 对象来渲染出对应的 DOM。

难点在于如何判断新旧两个 JS 对象的**最小差异**并且实现**局部更新** DOM。

首先 DOM 是一个多叉树的结构，如果需要完整的对比两颗树的差异，那么需要的时间复杂度会是 O(n ^ 3)，这个复杂度肯定是不能接受的。于是 React 团队优化了算法，实现了 O(n) 的复杂度来对比差异。 实现 O(n) 复杂度的关键就是只对比同层的节点，而不是跨层对比，这也是考虑到在实际业务中很少会去跨层的移动 DOM 元素。 所以判断差异的算法就分为了两步

- 首先从上至下，从左往右遍历对象，也就是树的深度遍历，这一步中会给每个节点添加索引，便于最后渲染差异
- 一旦节点有子元素，就去判断子元素是否有不同

在第一步算法中我们需要判断新旧节点的 `tagName` 是否相同，如果不相同的话就代表节点被替换了。如果没有更改 `tagName` 的话，就需要判断是否有子元素，有的话就进行第二步算法。

在第二步算法中，我们需要判断原本的列表中是否有节点被移除，在新的列表中需要判断是否有新的节点加入，还需要判断节点是否有移动。

那么在实际的算法中，我们如何去识别改动的是哪个节点呢？这就引入了 `key` 这个属性，想必大家在 Vue 或者 React 的列表中都用过这个属性。这个属性是用来给每一个节点打标志的，用于判断是否是同一个节点。

当然在判断以上差异的过程中，我们还需要判断节点的属性是否有变化等等。

当我们判断出以上的差异后，就可以把这些差异记录下来。当对比完两棵树以后，就可以通过差异去局部更新 DOM，实现性能的最优化。

Virtual DOM 提高性能是其中一个优势，其实**最大的优势**还是在于：

1. 将 Virtual DOM 作为一个兼容层，让我们还能对接非 Web 端的系统，实现跨端开发。
2. 同样的，通过 Virtual DOM 我们可以渲染到其他的平台，比如实现 SSR、同构渲染等等。
3. 实现组件的高度抽象化



## 路由原理

> 前端路由原理？两种实现方式有什么区别？

前端路由实现起来其实很简单，本质就是**监听 URL 的变化**，然后匹配路由规则，显示相应的页面，并且无须刷新页面。目前前端使用的路由就只有两种实现方式

- Hash 模式
- History 模式



### Hash 模式

`www.test.com/#/` 就是 Hash URL，当 `#` 后面的哈希值发生变化时，可以通过 `hashchange` 事件来监听到 URL 的变化，从而进行跳转页面，并且无论哈希值如何变化，服务端接收到的 URL 请求永远是 `www.test.com`。

```
window.addEventListener('hashchange', () => {
  // ... 具体逻辑
})
```

Hash 模式相对来说更简单，并且兼容性也更好。

### History 模式

History 模式是 HTML5 新推出的功能，主要使用 `history.pushState` 和 `history.replaceState` 改变 URL。

通过 History 模式改变 URL 同样不会引起页面的刷新，只会更新浏览器的历史记录。

```
// 新增历史记录
history.pushState(stateObject, title, URL)
// 替换当前历史记录
history.replaceState(stateObject, title, URL)
```

当用户做出浏览器动作时，比如点击后退按钮时会触发 `popState` 事件

```
window.addEventListener('popstate', e => {
  // e.state 就是 pushState(stateObject) 中的 stateObject
  console.log(e.state)
})
```

### 两种模式对比

- Hash 模式只可以更改 `#` 后面的内容，History 模式可以通过 API 设置任意的同源 URL
- History 模式可以通过 API 添加任意类型的数据到历史记录中，Hash 模式只能更改哈希值，也就是字符串
- Hash 模式无需后端配置，并且兼容性好。History 模式在用户手动输入地址或者刷新页面的时候会发起 URL 请求，后端需要配置 `index.html` 页面用于匹配不到静态资源的时候



## Vue 和 React 之间的区别

Vue 的表单可以使用 `v-model` 支持双向绑定，相比于 React 来说开发上更加方便，当然了 `v-model` 其实就是个语法糖，本质上和 React 写表单的方式没什么区别。

改变数据方式不同，Vue 修改状态相比来说要简单许多，React 需要使用 `setState` 来改变状态，并且使用这个 API 也有一些坑点。并且 Vue 的底层使用了依赖追踪，页面更新渲染已经是最优的了，但是 React 还是需要用户手动去优化这方面的问题。

React 16以后，有些钩子函数会执行多次，这是因为引入 Fiber 的原因，这在后续的章节中会讲到。

React 需要使用 JSX，有一定的上手成本，并且需要一整套的工具链支持，但是完全可以通过 JS 来控制页面，更加的灵活。Vue 使用了模板语法，相比于 JSX 来说没有那么灵活，但是完全可以脱离工具链，通过直接编写 `render` 函数就能在浏览器中运行。

在生态上来说，两者其实没多大的差距，当然 React 的用户是远远高于 Vue 的。

在上手成本上来说，Vue 一开始的定位就是尽可能的降低前端开发的门槛，然而 React 更多的是去改变用户去接受它的概念和思想，相较于 Vue 来说上手成本略高。



推荐阅读：

MVVM:

[MVC、MVP 和 MVVM 对比笔记](https://segmentfault.com/a/1190000018675102)

vitural DOM:

[https://www.zhihu.com/question/61078310/answer/361261031](https://link.juejin.im/?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F61078310%2Fanswer%2F361261031)
[https://blog.csdn.net/xukongjing1/article/details/81587549](https://link.juejin.im/?target=https%3A%2F%2Fblog.csdn.net%2Fxukongjing1%2Farticle%2Fdetails%2F81587549)
[https://www.zhihu.com/question/61064119/answer/183717717](https://link.juejin.im/?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F61064119%2Fanswer%2F183717717)
[https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/1](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2FAdvanced-Frontend%2FDaily-Interview-Question%2Fissues%2F1)
[https://github.com/livoras/blog/issues/13](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Flivoras%2Fblog%2Fissues%2F13)
[https://www.zhihu.com/question/280408565](https://link.juejin.im/?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F280408565)
[https://www.jb51.net/article/160001.htm](https://link.juejin.im/?target=https%3A%2F%2Fwww.jb51.net%2Farticle%2F160001.htm)



# Vue 常考基础知识点

## 生命周期钩子函数（8 个生命周期、keep-alive）

keep-alive 独有的生命周期，分别为 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数

## 组件通信

- 父子组件通信(几种新方式了解下)
- 兄弟组件通信（查找父组件中的子组件）
- 跨多层级组件通信（provide / inject）
- 任意组件（Vuex 或者 Event Bus）

## extend 能做什么

作用是扩展组件生成一个构造器，通常会与 \$mount 一起使用。

## mixin 和 mixins 区别

- mixin 用于全局混入，会影响到每个组件实例，通常插件都是这样做初始化的。
- mixins 应该是我们最常使用的扩展组件的方式了。如果多个组件中有相同的业务逻辑，就可以将这些逻辑剥离出来，通过 mixins 混入代码，比如上拉下拉加载数据这种逻辑等等。

## computed 和 watch 区别

- computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。
- watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
- 所以一般来说需要依赖别的属性来动态获得值的时候可以使用 computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 watch

## keep-alive 组件有什么作用

- 如果你需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件。

- 对于 keep-alive 组件来说，它拥有两个独有的生命周期钩子函数，分别为 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。

## v-show 与 v-if 区别

一个是初始渲染内存消耗，一个是切换内存消耗。

## 组件中 data 什么时候可以使用对象

- 组件复用时所有组件实例都会共享 data，如果 data 是对象的话，就会造成一个组件修改 data 以后会影响到其他所有组件，所以需要将 data 写成函数，每次用到就调用一次函数获得新的数据。

- 当我们使用 new Vue() 的方式的时候，无论我们将 data 设置为对象还是函数都是可以的，因为 new Vue() 的方式是生成一个根组件，该组件不会复用，也就不存在共享 data 的情况了。



# Vue 常考进阶知识点

## 响应式原理

在组件挂载时，会先对所有需要的属性调用 Object.defineProperty()，然后实例化 Watcher，传入组件更新的回调。在实例化过程中，会对模板中的属性进行求值，触发依赖收集。

## Object.defineProperty 的缺陷

## 编译过程

## NextTick 原理分析

可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。



# 监控

## 页面埋点

一般起码会监控以下几个数据：

- PV / UV
- 停留时长
- 流量来源
- 用户交互

对于这几类统计，一般的实现思路大致可以分为两种，分别为手写埋点和无埋点的方式。

第一种方式也是大家最常用的方式，可以自主选择需要监控的数据然后在相应的地方写入代码。这种方式的灵活性很大，但是唯一的缺点就是工作量较大，每个需要监控的地方都得插入代码。

另一种无埋点的方式基本不需要开发者手写埋点了，而是统计所有的事件并且定时上报。这种方式虽然没有前一种方式繁琐了，但是因为统计的是所有事件，所以还需要后期过滤出需要的数据。



## 性能监控

对于性能监控来说，我们可以直接使用浏览器自带的 [Performance API](https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FPerformance) 来实现这个功能。

对于性能监控来说，其实我们只需要调用 `performance.getEntriesByType('navigation')` 这行代码就行了。



## 异常监控

### 代码报错

对于代码运行错误，通常的办法是使用 `window.onerror` 拦截报错。该方法能拦截到大部分的详细报错信息，但是也有例外

- 对于跨域的代码运行错误会显示 `Script error.` 对于这种情况我们需要给 `script` 标签添加 `crossorigin` 属性
- 对于某些浏览器可能不会显示调用栈信息，这种情况可以通过 `arguments.callee.caller` 来做栈递归

对于异步代码来说，可以使用 `catch` 的方式捕获错误。比如 `Promise` 可以直接使用 `catch` 函数，`async await` 可以使用 `try catch`。



### 接口异常

相对来说简单许多，可以列举出出错的状态码。一旦出现此类的状态码就可以立即上报出错。接口异常上报可以让开发人员迅速知道有哪些接口出现了大面积的报错，以便迅速修复问题。



# UDP

>  UDP 与 TCP 的区别是什么？

首先 UDP 协议是面向无连接的，也就是说不需要在正式传递数据之前先连接起双方。然后 UDP 协议只是数据报文的搬运工，不保证有序且不丢失的传递到对端，并且UDP 协议也没有任何控制流量的算法，总的来说 UDP 相较于 TCP 更加的轻便。

TCP 基本是和 UDP 反着来，建立连接断开连接都需要先需要进行握手。在传输数据的过程中，通过各种算法保证数据的可靠性，当然带来的问题就是相比 UDP 来说不那么的高效。

## 面向无连接

首先 UDP 是不需要和 TCP 一样在发送数据前进行三次握手建立连接的，想发数据就可以开始发送了。

并且也只是数据报文的搬运工，不会对数据报文进行任何拆分和拼接操作。

具体来说就是：

- 在发送端，应用层将数据传递给传输层的 UDP 协议，UDP 只会给数据增加一个 UDP 头标识下是 UDP 协议，然后就传递给网络层了
- 在接收端，网络层将数据传递给传输层，UDP 只去除 IP 报文头就传递给应用层，不会任何拼接操作



## 不可靠性

首先不可靠性体现在无连接上，通信都不需要建立连接，想发就发，这样的情况肯定不可靠。

并且收到什么数据就传递什么数据，并且也不会备份数据，发送数据也不会关心对方是否已经正确接收到数据了。

再者网络环境时好时坏，但是 UDP 因为没有拥塞控制，一直会以恒定的速度发送数据。即使网络条件不好，也不会对发送速率进行调整。这样实现的弊端就是在网络条件不好的情况下可能会导致丢包，但是优点也很明显，在某些实时性要求高的场景（比如电话会议）就需要使用 UDP 而不是 TCP。



## 高效

虽然 UDP 协议不是那么的可靠，但是正是因为它不是那么的可靠，所以也就没有 TCP 那么复杂了，需要保证数据不丢失且有序到达。

因此 UDP 的头部开销小，只有八字节，相比 TCP 的至少二十字节要少得多，在传输数据报文时是很高效的。

![img](udp.PNG)

UDP 头部包含了以下几个数据

- 两个十六位的端口号，分别为源端口（可选字段）和目标端口
- 整个数据报文的长度
- 整个数据报文的检验和（IPv4 可选 字段），该字段用于发现头部信息和数据中的错误



## 传输方式

UDP 不止支持一对一的传输方式，同样支持一对多，多对多，多对一的方式，也就是说 UDP 提供了单播，多播，广播的功能。



## 适合使用的场景

在很多实时性要求高的地方都可以看到 UDP 的身影。比如视频、直播、实时游戏等。



# TCP

## 头部

![img](tcp.PNG)

对于 TCP 头部来说，以下几个字段是很重要的

- Sequence number，这个序号保证了 TCP 传输的报文都是有序的，对端可以通过序号顺序的拼接报文
- Acknowledgement Number，这个序号表示数据接收端期望接收的下一个字节的编号是多少，同时也表示上一个序号的数据已经收到
- Window Size，窗口大小，表示还能接收多少字节的数据，用于流量控制
- 标识符
  - URG=1：该字段为一表示本数据报的数据部分包含紧急信息，是一个高优先级数据报文，此时紧急指针有效。紧急数据一定位于当前数据包数据部分的最前面，紧急指针标明了紧急数据的尾部。
  - ACK=1：该字段为一表示确认号字段有效。此外，TCP 还规定在连接建立后传送的所有报文段都必须把 ACK 置为一。
  - PSH=1：该字段为一表示接收端应该立即将数据 push 给应用层，而不是等到缓冲区满后再提交。
  - RST=1：该字段为一表示当前 TCP 连接出现严重问题，可能需要重新建立 TCP 连接，也可以用于拒绝非法的报文段和拒绝连接请求。
  - SYN=1：当SYN=1，ACK=0时，表示当前报文段是一个连接请求报文。当SYN=1，ACK=1时，表示当前报文段是一个同意建立连接的应答报文。
  - FIN=1：该字段为一表示此报文段是一个释放连接的请求报文。