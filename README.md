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
- [Vue 常考基础知识点](#vue-常考基础知识点)
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

<!-- /TOC -->

### JS 基础知识点（一）

#### 原始（Primitive）类型

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

#### 对象（Object）类型

> 对象类型和原始类型的不同之处？函数参数是对象会发生什么问题？

对象类型和原始类型不同的是，原始类型存储的是值，对象类型存储的是地址（指针）。

#### typeof vs instanceof

> typeof 是否能正确判断类型？instanceof 能正确判断对象的原理是什么？

##### typeof

- typeof 对于原始类型来说，除了 null 都可以显示正确的类型

- typeof 对于对象来说，除了函数都会显示 object，所以说 typeof 并不能准确判断变量到底是什么类型

##### instanceof

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

#### 类型转换(记忆)

> 该知识点常在笔试题中见到，熟悉了转换规则就不惧怕此类题目了。

##### 转换为布尔值、字符、数字

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

##### 转 Boolean

除了 undefined， null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象。

##### 对象转原始类型

对象在转换类型的时候，会调用内置的 [[ToPrimitive]] 函数，对于该函数来说，算法逻辑一般来说如下：

- 如果已经是原始类型了，那就不需要转换了
- 如果需要转字符串类型就调用 x.toString()，转换为基础类型的话就返回转换的值。不是字符串类型的话就先调用 valueOf，结果不是基础类型的话再调用 toString
- 调用 x.valueOf()，如果转换为基础类型，就返回转换的值
- 如果都没有返回原始类型，就会报错

##### 四则运算符

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

#### this

> 如何正确判断 this？箭头函数的 this 是什么？

##### 案例：

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

##### 箭头函数中的 `this`

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

##### 改变上下文的 API

apply、call、bind 这些 API 的`this` 取决于第一个参数，如果第一个参数为空，那么就是 `window`。

如果对一个函数进行多次 `bind`，`this` 永远由第一次 `bind` 决定。

##### this 的规则

![chp101](C:\Users\ChenYun\Desktop\笔记\chp101.png)

### JS 基础知识点（二）

#### == vs ===

> 涉及面试题：== 和 === 有什么区别？

##### ==（记忆）

1. 首先会判断两者类型是否**相同**。相同的话就是比大小了
2. 类型不相同的话，那么就会进行类型转换
3. 会先判断是否在对比 `null` 和 `undefined`，是的话就会返回 `true`
4. 判断两者类型是否为 `string` 和 `number`，是的话就会将字符串转换为 `number`
5. 判断其中一方是否为 `boolean`，是的话就会把 `boolean` 转为 `number` 再进行判断
6. 判断其中一方是否为 `object` 且另一方为 `string`、`number` 或者 `symbol`，是的话就会把 `object` 转为原始类型再进行判断

##### ===

判断两者类型和值是否相同

#### 闭包

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

#### 深浅拷贝

> 什么是浅拷贝？如何实现浅拷贝？什么是深拷贝？如何实现深拷贝？

对象类型在赋值的过程中其实是复制了地址，从而会导致改变了一方其他也都被改变的情况。

##### 浅拷贝

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

##### 深拷贝（记忆）

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

#### 原型

> 如何理解原型？如何理解原型链？

##### 原型

1. 每个 JS 对象都有 `__proto__` 属性，这个属性指向了原型。
2. 原型也是一个对象，并且这个对象中包含了很多函数，所以我们可以得出一个结论：对于 `obj` 来说，可以通过 `__proto__` 找到一个原型对象，在该对象中定义了很多函数让我们来使用。
3. `__proto__` 还有一个`constructor` 属性，其中还有一个 `prototype` 属性，并且这个属性对应的值和先前我们在 `__proto__` 中看到的一模一样。
4. 所以我们又可以得出一个结论：原型的 `constructor` 属性指向构造函数，构造函数又通过 `prototype` 属性指回原型，但是并不是所有函数都具有这个属性，`Function.prototype.bind()` 就没有这个属性。

##### 原型链

原型链就是多个对象通过 `__proto__` 的方式连接了起来。

对象的 `__proto__` 属性指向原型， `__proto__` 将对象和原型连接起来组成了原型链。

### ES6 知识点

#### var、let 及 const 区别

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

#### 原型继承和 Class 继承

> 原型如何实现继承？Class 如何实现继承？Class 本质是什么？

##### class

其实在 JS 中并不存在类，`class` 只是语法糖，本质还是函数。

```
class Person {}
Person instanceof Function // true
```

##### 组合继承

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

##### 寄生组合继承

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

##### Class 继承

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

#### 模块化

> 为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？

使用模块化可以给我们带来以下好处：

- 解决命名冲突
- 提供复用性
- 提高代码可维护性

##### 立即执行函数

在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。

```
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```

##### AMD 和 CMD

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

##### CommonJS

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

###### require:(再看一下)

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

#### ES Module

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

#### Proxy(再看一下)

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

#### map, filter, reduce(再看一下)

> map, filter, reduce 各自有什么作用？

##### map

`map` 作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后放入到新的数组中。

`map` 的回调函数接受三个参数，分别是当前索引元素，索引，原数组

```
[1, 2, 3].map(v => v + 1) // -> [2, 3, 4]
```

##### filter

`filter` 的作用也是生成一个新数组，在遍历数组的时候将返回值为 `true` 的元素放入新数组，我们可以利用这个函数删除一些不需要的元素。

`filter` 的回调函数接受三个参数，分别是当前索引元素，索引，原数组

```
let array = [1, 2, 4, 6]
let newArray = array.filter(item => item !== 6)
console.log(newArray) // [1, 2, 4]
```

##### reduce

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

##### 数组常用方法分析

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

### JS 异步编程（需要补充看）

#### 并发（concurrency）和并行（parallelism）区别

> 并发与并行的区别？

异步和这小节的知识点其实并不是一个概念，但是这两个名词确实是很多人都常会混淆的知识点。其实混淆的原因可能只是两个名词在中文上的相似，在英文上来说完全是不同的单词。

并发是宏观概念，我分别有任务 A 和任务 B，在一段时间内通过任务间的切换完成了这两个任务，这种情况就可以称之为并发。

并行是微观概念，假设 CPU 中存在两个核心，那么我就可以同时完成任务 A、B。同时完成多个任务的情况就可以称之为并行。

#### 回调函数（Callback）

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

#### Generator(需要补充)

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

#### Promise(再看一下)

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

#### async 及 await(需要补充)

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

#### 常用定时器函数

> setTimeout、setInterval、requestAnimationFrame 各有什么特点？

##### setTimeout

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

##### setInterval

这个函数作用和 `setTimeout` 基本一致，只是该函数是每隔一段时间执行一次回调函数。

通常来说不建议使用 `setInterval`。第一，它和 `setTimeout` 一样，不能保证在预期的时间执行任务。第二，它存在执行累积的问题。

##### requestAnimationFrame

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

### 手写 Promise

首先：

[Promise/A+ 规范](https://promisesaplus.com/)

[Promise/A+ 规范（译）](https://link.juejin.im/?target=http%3A%2F%2Fwww.ituring.com.cn%2Farticle%2F66566)

[史上最最最详细的手写 Promise 教程](https://juejin.im/post/5b2f02cd5188252b937548ab)

### Vue 常考基础知识点

#### 生命周期钩子函数（8 个生命周期、keep-alive）

keep-alive 独有的生命周期，分别为 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数

#### 组件通信

- 父子组件通信(几种新方式了解下)
- 兄弟组件通信（查找父组件中的子组件）
- 跨多层级组件通信（provide / inject）
- 任意组件（Vuex 或者 Event Bus）

#### extend 能做什么

作用是扩展组件生成一个构造器，通常会与 \$mount 一起使用。

#### mixin 和 mixins 区别

- mixin 用于全局混入，会影响到每个组件实例，通常插件都是这样做初始化的。
- mixins 应该是我们最常使用的扩展组件的方式了。如果多个组件中有相同的业务逻辑，就可以将这些逻辑剥离出来，通过 mixins 混入代码，比如上拉下拉加载数据这种逻辑等等。

#### computed 和 watch 区别

- computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。
- watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。
- 所以一般来说需要依赖别的属性来动态获得值的时候可以使用 computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 watch

#### keep-alive 组件有什么作用

- 如果你需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件。

- 对于 keep-alive 组件来说，它拥有两个独有的生命周期钩子函数，分别为 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。

#### v-show 与 v-if 区别

一个是初始渲染内存消耗，一个是切换内存消耗。

#### 组件中 data 什么时候可以使用对象

- 组件复用时所有组件实例都会共享 data，如果 data 是对象的话，就会造成一个组件修改 data 以后会影响到其他所有组件，所以需要将 data 写成函数，每次用到就调用一次函数获得新的数据。

- 当我们使用 new Vue() 的方式的时候，无论我们将 data 设置为对象还是函数都是可以的，因为 new Vue() 的方式是生成一个根组件，该组件不会复用，也就不存在共享 data 的情况了。

### Vue 常考进阶知识点

### 响应式原理

在组件挂载时，会先对所有需要的属性调用 Object.defineProperty()，然后实例化 Watcher，传入组件更新的回调。在实例化过程中，会对模板中的属性进行求值，触发依赖收集。

#### Object.defineProperty 的缺陷

#### 编译过程

#### NextTick 原理分析

可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。

### 监控

- 页面埋点
- 性能监控
  可以直接使用浏览器自带的 Performance API 来实现这个功能。
- 只需要调用 performance.getEntriesByType('navigation')
- 异常监控
