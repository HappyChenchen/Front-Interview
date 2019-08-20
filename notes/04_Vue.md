## Vue 双向绑定原理，手写数据劫持

参考：<https://www.cnblogs.com/tugenhua0707/p/10306793.html>

### vue2

- vue 的双向数据绑定依赖三个主要的功能模块：

  - 观察者：利用 object.defineProperty 的 get 方法来获取当前的数据值，当属性值变化的时候会触发 set 方法来通知订阅者
  - 订阅者：维护一个订阅者列表，在观察者和指令解析器之间传递消息，收到更新通知之后，触发指令解析器
  - 指令解析器：解析指令模板，对不同的指令模板做出对应的处理，比如 v-model 模板中可以添加对 input 事件的监听，v-on 模板中添加对应事件的监听，{{}}数据模板则是将对应的数据属性添加到订阅者列表中

- 有了这三个模块之后，整个数据双向绑定的过程可以理解为这样的几个步骤：

  - 首先，在 vue 实例创建的时候，对跟组件的所有元素进行遍历解析，解析的过程中是生成虚拟文档节点进行解析的，解析的过程中对不同的指令模板做出对应的处理，同时将绑定的 data 中的属性值添加到订阅者列表中
  - 当数据变化的时候，会触发 set 方法，进而触发指令解析器，对节点的 value 值进行更新，从而更新视图
  - 当视图变化的时候，对应的事件会监听到，进而可以更新对应的数据值

  ```
  <!DOCTYPE html>
   <html>
      <head>
        <meta charset="utf-8">
        <title>标题</title>
      </head>
      <body>
        <input type="text" id="demo" />
        <div id="xxx">{{name}}</div>

        <script type="text/javascript">
          const obj = {};
          Object.defineProperty(obj, 'name', {
            set: function(value) {
              document.getElementById('xxx').innerHTML = value;
              document.getElementById('demo').value = value;
            }
          });
          document.querySelector('#demo').oninput = function(e) {
            obj.name = e.target.value;
          }
          obj.name = '';
        </script>
      </body>
  </html>
  ```

### vue3

当我们使用数组的方法或改变数组的下标是不能重新触发 Object.defineProperty 中的 set()方法的，因此就做不到实时响应了。所以使用 Object.defineProperty 存在如下缺点：

1. 监听数组的方法不能触发 Object.defineProperty 方法中的 set 操作(如果要监听到的话，需要重新编写数组的方法)。
2. 必须遍历每个对象的每个属性，如果对象嵌套很深的话，需要使用递归调用。

因此 vue3.xx 中之后就改用 Proxy 来更好的解决如上面的问题。

**Proxy 基本语法**

```
const obj = new Proxy(target, handler);
//参数说明如下：
target: 被代理对象。
handler:是一个对象，声明了代理target的一些操作。
obj: 是被代理完成之后返回的对象。
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>proxy</title>
</head>
<body>
    <h1>使用Proxy 和 Reflect 实现双向数据绑定</h1>
    <input type="text" id="input">
    <h2>您输入的内容是： <i id="txt"></i></h2>
    <script>
        //获取dom元素
        let oInput = document.getElementById("input");
        let oTxt = document.getElementById("txt");

        //初始化代理对象
        let obj = {};

        //给obj增加代理对象
        let newProxy = new Proxy(obj,{
            get: (target,key,recevier)=>{
                //console.log("get:"+ key)
                return Reflect.get(target,key,recevier);
            },
            set: (target,key,value,recevier)=>{
                //监听newProxy是否有新的变化
                if(key == "text"){
                    oTxt.innerHTML = value;
                }

                //将变化反射回原有对象
                return Reflect.set(target,key,value,recevier);
            }
        })

        //监听input输入事件
        oInput.addEventListener("keyup",(e)=>{
            //修改代理对象的值
            newProxy.text = e.target.value;
        })
    </script>
</body>
</html>
```

之所以 Vue3.0 要使用 `Proxy` 替换原本的 API 原因在于 `Proxy` 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 `Proxy` 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。



## Vue 生命周期

- vue.init()初始化创建一个实例
- beforecreate，这个时候 el 还没有挂载，data 也没有初始化，可以添加一些 loading 事件
- created，这个时候 el 还没有挂载，但是 data 已经初始化了，可以结束 loading 事件，发出 ajax 请求等
- beforemount，这个时候生成了虚拟的 dom 节点
- mounted，这个时候真实的节点已经形成，页面已经基本渲染完成
- beforeupdate,更新前的一个钩子，dom 中的数据已经改变
- updated，更新完成
- beforedestroy，销毁前的钩子，可以在这里添加销毁的确认弹框
- destroyed，完全销毁，所有的事件监听都会被解绑，生命周期结束，子实例也会被销毁，原生的 DOM 还存在，但数据已经不能够被访问



## vue-router 的原理

- vue-router 的实现依赖的是 hashChange 或 H5 的 history 模式，使得路由更新的时候，能够不重新渲染页面，更新对应的组件，具体来说：
- 首先我们在使用的时候需要 Vue.use(vueRouter),在这一步调用的是 install 方法，在这个方法中做了三件事情，第一是安装了 vue-router 插件，第二是定义`this.$router`和`this.$route`两个变量来使得每个组件都可以访问路由列表，第三是注册了 router-view 和 router-link 两个组件，其中 router-view 就是获取到路由匹配的对应组件，render 渲染，router-link 就是注册 click 事件，触发路由的更新
- 其次是我们在使用的时候需要新建一个 VueRouter 实例，在这一步中做了两件事情，其一是生成了路由的匹配表，将每个组件和对应的路由地址匹配好，第二是根据定义的模式生成对应的 history 实例
- 第三部我们在使用的时候需要新建一个 Vue 实例，这一步的 beforeCreate 钩子中混入了 vue-router 的一些操作，第一是有一个 init 方法，根据不同的模式来确定路由切换的模式，然后通过 history.listen 注册路由的变化回调，第二是利用 object.defineproperty 监听当前路由地址的变化，如果变化了的话就会触发更新机制，比如 hash 模式，就是更新 hash 值，history 模式就是通过 pushState 或 replaceState 来更新路由。更新路由之后就会触发 hash 的 onHashChange 或 history 中的 popState 触发对应的组件的更新



## vuex

[从头开始学习 Vuex](https://github.com/ljianshu/Blog/issues/36#)

- 定义：对 vue 应用中多个组件的共享状态进行集中式的管理(读/写)

  - store 用来存储公共的状态
  - mutation 用来提交修改
  - action 用来定义修改的逻辑
  - getter 用来过滤数据



## Vue 计算属性和侦听属性

- computed 计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。
- watch 中可以执行任何逻辑，如函数节流，Ajax 异步获取数据，甚至操作 DOM（不建议）
- 区别
  - watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作。
  - computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。
  - 计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。
    - computed 能做的，watch 都能做，反之则不行
    - 能用 computed 的尽量用 computed



## 虚拟 DOM

首先需要明确的是虚拟 DOM 的出现是为了有效解决 DOM 更新开销、重排、重绘这些问题。

VirtualDOM 的主要思想就是模拟 DOM 的树状结构，在内存中创建保存映射 DOM 信息的节点数据，在由于交互等因素需要视图更新时，先通过对节点数据进行 diff 后得到差异结果后，再一次性对 DOM 进行批量更新操作，这样就避免了冗余琐碎的 DOM 树操作负担，进而有效提高了性能。

### DIFF

VirtualDOM 最具价值的核心功能是如何识别并保存新旧节点数据结构之间差异的方法，也即是**diff 算法**。

算法复杂度由 DFS 深度优先遍历 O(n^3) 优化到 O(n) ，这个 n 指的节点数，优化的前提是做了假设，假设 VDOM 的变化只发生在同一层，而且变化依赖于用户指定的 key。

### diff 策略

1. **按 tree 层级 diff(level by level)**

   由于 diff 的数据结构是以 DOM 渲染为目标的模拟树状层级结构的节点数据，而在 WebUI 中很少出现 DOM 的层级结构因为交互而产生更新，因此 VirtualDOM 的 diff 策略是在新旧节点树之间按层级进行 diff 得到差异，而非传统的按深度遍历搜索，这种通过大胆假设得到的改进方案，不仅符合实际场景的需要，而且大幅降低了算法实现复杂度，从 O(n^3)提升至 O(n)。

2. **按类型进行 diff**

   无论 VirtualDOM 中的节点数据对应的是一个原生的 DOM 节点还是 vue 或者 react 中的一个组件，不同类型的节点所具有的子树节点之间结构往往差异明显，因此对不同类型的节点的子树进行 diff 的投入成本与产出比将会很高昂，为了提升 diff 效率，VirtualDOM 只对相同类型的同一个节点进行 diff，当新旧节点发生了类型的改变时，则并不进行子树的比较，直接创建新类型的 VirtualDOM，替换旧节点。

3. **列表 diff**

   当被 diff 节点处于同一层级时，通过三种节点操作新旧节点进行更新：插入，移动和删除，同时提供给用户设置 key 属性的方式调整 diff 更新中默认的排序方式，在没有 key 值的列表 diff 中，只能通过按顺序进行每个元素的对比，更新，插入与删除，在数据量较大的情况下，diff 效率低下，如果能够基于设置 key 标识进行 diff，就能够快速识别新旧列表之间的变化内容，提升 diff 效率。

### Virtual DOM 不同的实现方式

1. snabbdom 的 vnode
2. reconcilation

### 总结：

 VirtualDOM 的设计是提升前端渲染性能的有效方案，也因此提供了以数据为驱动的前端框架工具的基础，将我们从 DOM 的繁琐操作中解放出来，不同的 VirtualDOM 方案在 diff 方面基本基于三条 diff 原则，具体 diff 过程则考虑自身运行上下文中的数据结构，算法效率，组件生命周期与设计来选择 diff 实现。例如上文 snabbdom 的 updateChildren 执行中使用了两端同时对比以及根据位置顺序进行移动的更新策略，而 React 则受限于 Fiber 的单向结构采用按顺序直接替换的方式更新，但 React 优化的组件设计与 Fiber 的工作线程机制在整体渲染性能方面带来了效率提升，同时两者都提供了基于 key 值进行 diff 的策略改善方式。

## SSR

### 定义：

所谓服务端渲染，指的是把 vue 组件在服务器端渲染为组装好的 HTML 字符串，然后将它们直接发送到浏览器，最后需要将这些静态标记"激活"为客户端上完全可交互的应用程序。

### 服务端渲染的优点

1. 更好的 SEO，搜索引擎爬虫可以抓取渲染好的页面
2. 更快的内容到达时间（首屏加载更快），因为服务端只需要返回渲染好的 HTML，这部分代码量很小的，所以用户体验更好

### 服务端渲染的缺点

1. 首先就是开发成本比较高，比如某些声明周期钩子函数（如 beforeCreate、created）能同时运行在服务端和客户端，因此第三方库要做特殊处理，才能在服务器渲染应用程序中运行。
2. 由于服务端渲染要用 Nodejs 做中间层，所以部署项目时，需要处于 Node.js server 运行环境。在高流量环境下，还要做好服务器负载和缓存策略。
