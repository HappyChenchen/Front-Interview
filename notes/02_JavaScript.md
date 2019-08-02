- - -

## JS数据类型判断

- 基本类型：undefined、null，boolean，string，number，symbol

  - 值是不可变的
  - 存放在栈区
  - 值的比较：== 和===

- 引用类型：object,array,regexp,function,date

  - 值是可变的
  - 同时保存在栈内存和堆内存
  - 比较是引用的比较

- 数据类型判断：
  - typeof:
    typeof返回一个表示数据类型的字符串，返回结果包括：number、boolean、string、symbol、object、undefined、function等7种数据类型，但不能判断null、array等
  
  - instanceof 是用来判断A是否为B的实例，表达式为：A instanceof B，instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
  
    缺点：字面量和实例创建出来的基本类型判断不一致；不能检测null、undefined；在类的原型继承中，我们最后检测出来的结果未必准确。
  
  - constructor：constructor检测 Object与instanceof不一样，还可以处理基本数据类型的检测。但是无法检测null、undefined，而且对函数的constructor不准确，把类的原型进行重写，在重写的过程中很有可能出现把之前的constructor给覆盖了。
  
  - Object.prototype.toString.call()：**最准确最常用的方式**，会转换为[object Array]、[object Date]这种形式。



## JS--类型转换

- toString()
  - iNum.toString(2) 
  - null undefined 这个方法有报错
- String()
  - null undefined 这个方法不报错，直接转成字符串
  - 对象就返回"[object Object]"，数组转成"1,2,3"
- Number()
  - 纯数字字符串——数组
  - 非数字字符串——NaN
  - 空串、空字符串——0
  - 布尔值——true:1/false:0
  - undefined——NaN
  - null——0
  - 接受进制数
  - 对象——NaN，除了单个数值的数组转为数字
- parseInt() & parseFloat()
  - parseInt('42 cats') // 42
  - parseInt("   ");   //NaN
- Boolean
  - 只有空字符串("")、null、undefined、+0、-0 和 NaN 转为布尔型是 false，其他的都是 true
- 除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。一元运算符也会把运算子转成数值。



**在转换不同的数据类型时，相等操作符遵循下列基本规则：**

1. 如果有一个操作数是布尔值，则在比较相等之前，将其转换为数值；
2. 如果一个操作数是字符串，另一个操作数是数值，在比较之前先将字符串转换为数值；
3. 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf() 方法，用得到的基本类型值按照前面的规则进行比较；
4. 如果有一个操作数是 NaN，无论另一个操作数是什么，相等操作符都返回 false；
5. 如果两个操作数都是对象，则比较它们是不是同一个对象。如果指向同一个对象，则相等操作符返回 true；
6. 在比较相等之前，不能将 null 和 undefined 转成其他值。
7. null 和 undefined 是相等的。

**+操作符**

- js在进行加法运算的时候， 会先推测两个操作数是不是number。 
- 如果是，则直接相加得出结果。 
  如果其中有一个操作数为string，则将另一个操作数隐式的转换为string，然后进行字符串拼接得出结果。 
  如果操作数为对象或者是数组这种复杂的数据类型，那么就将两个操作数都转换为字符串，进行拼接 。
- 如果操作数是像boolean这种的简单数据类型，那么就将操作数转换为number相加得出结果



## this

判断this指向：

- 对于直接调用的函数来说，this是window
- 对于被对象调用的函数来说，谁调用了它，谁就是this
- 构造函数模式中，类中出现的this.xxx中的this，是类的一个实例
- call、apply、bind中的this是第一个参数
- 箭头函数没有自己的this，this取决于他外层函数的this



## 执行上下文

- JavaScript执行在单线程上，所有的代码都是排队执行。
- 一开始浏览器执行全局的代码时，首先创建全局的执行上下文，压入执行栈的顶部。
- 每当进入一个函数的执行就会创建函数的执行上下文，并且把它压入执行栈的顶部。当前函数执行完成后，当前函数的执行上下文出栈，并等待垃圾回收。
- 浏览器的JS执行引擎总是访问栈顶的执行上下文。
- 全局上下文只有唯一的一个，它在浏览器关闭时出栈。



## JS运行机制

### EventLoop

- 所有同步任务都在主线程上执行，形成一个执行栈。
- 主线程之外，还存在一个"任务队列"。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
- 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
- 主线程不断重复上面的第三步。

### 宏任务和微任务

异步任务分为宏任务和微任务，**宏任务队列可以有多个，微任务队列只有一个**。

- 宏任务包括：**script(全局任务)**, setTimeout, setInterval, setImmediate, I/O, UI rendering。
- 微任务包括: new Promise().then(回调), process.nextTick, MutationObserver(html5新特性)

**当某个宏任务队列的中的任务全部执行完以后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，就查看是否有其他宏任务队列**。



## 作用域

- 就是变量作用的范围，查找变量是顺着作用域链来的，在当前作用域搜索，如果没有则在上级搜寻，逐级上升直至查找到全局作用域
- 私有作用域：函数执行的过程中创造的作用域叫私有作用域，其中的变量包含形参、私有作用域中声明的变量
  - 函数执行的过程
    - 为形参赋值
    - 预解释私有作用域中的变量
    - 执行函数中的代码
- 全局作用域：在全局声明的作用域



## 闭包

- 能够引用外部作用域变量的函数叫做闭包，形成的条件就是函数嵌套，而且内部函数引用了外部函数的局部变量。
- 闭包可能造成的问题就是内存泄漏，因为函数在执行结束之后他的私有作用域所占的内存就会被销毁，但是因为其内部的函数被引用了，所以函数作用域无法被销毁，导致内存泄漏。
- 闭包的主要作用包含几个点，它可以访问函数内部的变量，使变量的值长期保存在内存中，而且可以用来实现JS模块化。



## 原型链

- 首先说一下原型链的含义：每个构造函数都拥有一个prototype属性，这个属性指向一个原型对象，而这个原型对象拥有一个constructor属性，这个属性指向原构造函数。当我们为构造函数创造一个实例的时候，实例就会拥有一个prototype属性，该属性指向构造函数的原型对象，这样就构造了一个链式，就被称为原型链
- 原型链通常被用于实现属性和方法的继承。因为构造函数的原型中定义的方法是可以共享的。比如我们最常用的构造函数和原型组合的继承方式就是在超类构造函数中定义共享的属性，利用原型定义共享的方法，在子类中引用超类，同时将子类的原型赋予给超类的实例，这样就实现了子类对超类的继承
- 此外还可以根据原型上定义的方法是共享的这个特性，我们可以定义一些函数，或者数组共享的API，比如我们可以在JS中通过Function.prototype.bind定义一个显式绑定this指向的bind方法，来让所有函数共享



## JS操作DOM

- appendChild，insertBefore，removeChild,replaceChild
- querySelector，querySelectorAll，getElementById，getElementsByClassName，getElementsByTagName



## 事件流，阻止冒泡的方法

- 事件流包括三个阶段：事件捕获。处于目标。事件冒泡。
- 为DOM绑定事件之后，当用户触发到某元素的事件之时，则会从document开始一级一级的向下查找到对应的元素，该阶段为捕获阶段；到达目标之后则为目标阶段；触发目标的处理程序之后，则从目标一级一级的向上直到document，这个阶段为冒泡阶段。
- 一般都是使用冒泡事件流来进行事件的处理；
  - 事件冒泡的作用主要是允许多个操作被集中处理，例如一个列表的每一个字段点击都会出现相应的处理反应，则可以直接为所有字段的上一级元素绑定处理程序；
  - 但是有些程序相反需要取消冒泡机制带来的弊端，此时可以使用阻止事件冒泡的方法，
- js事件机制包括：事件绑定、事件监听、事件委托。
  - 事件绑定：
    - DOM元素绑定
    - js绑定
  - 事件监听：
    - W3C： element.addEventListener(event, function, useCapture);
      - useCapture默认是false
    - IE：element.attachEvent (event，function); 冒泡阶段执行
  - 事件委托：
    - 原理：利用冒泡，在所有需要绑定相同事件的子元素的父元素上绑定对应事件。
    - 优点：提高性能，减少事件的注册；动态添加的元素依旧绑定对应事件。
  - 阻止冒泡：
    - IE8之前，event.cancelBubble = true;
    - IE8之后，event.stopPropagation();
  - 阻止默认事件
    - IE8之前：event.returnValue = false;
    - IE8之后：event.preventDefault();



## 数组遍历方法：

数组的哪些API会改变原数组？

- 修改原数组的API有: splice/reverse/fill/copyWithin/sort/push/pop/unshift/shift
- 不修改原数组的API有:
  - slice/map/forEach/every/filter/reduce/entries/find
  - map: 遍历数组，返回回调返回值组成的新数组
  - forEach: 无法break，可以用try/catch中throw new Error来停止
  - filter: 过滤
  - some: 有一项返回true，则整体为true
  - every: 有一项返回false，则整体为false
  - join: 通过指定连接符生成字符串
  - sort(fn) / reverse: 排序与反转，改变原数组
  - concat: 连接数组，不影响原数组， 浅拷贝
  - slice(start, end): 返回截断后的新数组，不改变原数组
  - splice(start, number, value...): 返回删除元素组成的数组，value 为插入项，改变原数组
  - indexOf / lastIndexOf(value, fromIndex): 查找数组项，返回对应的下标
  - reduce / reduceRight(fn(prev, cur), defaultPrev): 两两执行，prev 为上次化简函数的return值，cur 为当前值(从第二项开始)



## 深拷贝与浅拷贝

- 浅拷贝：拷贝地址

  - Object.assign()  (当object只有一层的时候，是深拷贝)
  - Array.prototype.concat()
  - Array.prototype.slice()

- 深拷贝：创建新的内存，递归属性复制

  - JSON.parse(JSON.stringify())，这种方法虽然可以实现数组或对象深拷贝,但不能处理函数

  - 手写递归方法

  - 函数库lodash
  

