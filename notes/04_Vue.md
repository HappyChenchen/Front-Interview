## Vue双向绑定原理，手写数据劫持

参考：<https://www.cnblogs.com/tugenhua0707/p/10306793.html>

### vue2

- vue的双向数据绑定依赖三个主要的功能模块：

  - 观察者：利用object.defineProperty的get方法来获取当前的数据值，当属性值变化的时候会触发set方法来通知订阅者
  - 订阅者：维护一个订阅者列表，在观察者和指令解析器之间传递消息，收到更新通知之后，触发指令解析器
  - 指令解析器：解析指令模板，对不同的指令模板做出对应的处理，比如v-model模板中可以添加对input事件的监听，v-on模板中添加对应事件的监听，{{}}数据模板则是将对应的数据属性添加到订阅者列表中

- 有了这三个模块之后，整个数据双向绑定的过程可以理解为这样的几个步骤：

  - 首先，在vue实例创建的时候，对跟组件的所有元素进行遍历解析，解析的过程中是生成虚拟文档节点进行解析的，解析的过程中对不同的指令模板做出对应的处理，同时将绑定的data中的属性值添加到订阅者列表中
  - 当数据变化的时候，会触发set方法，进而触发指令解析器，对节点的value值进行更新，从而更新视图
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

当我们使用数组的方法或改变数组的下标是不能重新触发 Object.defineProperty中的set()方法的，因此就做不到实时响应了。所以使用 Object.defineProperty 存在如下缺点：

1. 监听数组的方法不能触发Object.defineProperty方法中的set操作(如果要监听到的话，需要重新编写数组的方法)。
2. 必须遍历每个对象的每个属性，如果对象嵌套很深的话，需要使用递归调用。

因此vue3.xx中之后就改用Proxy来更好的解决如上面的问题。

**Proxy基本语法**

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



## Vue生命周期

- vue.init()初始化创建一个实例
- beforecreate，这个时候el还没有挂载，data也没有初始化，可以添加一些loading事件
- created，这个时候el还没有挂载，但是data已经初始化了，可以结束loading事件，发出ajax请求等
- beforemount，这个时候生成了虚拟的dom节点
- mounted，这个时候真实的节点已经形成，页面已经基本渲染完成
- beforeupdate,更新前的一个钩子，dom中的数据已经改变
- updated，更新完成
- beforedestroy，销毁前的钩子，可以在这里添加销毁的确认弹框
- destroyed，完全销毁，所有的事件监听都会被解绑，生命周期结束，子实例也会被销毁，原生的DOM还存在，但数据已经不能够被访问



## vue-router的原理

- vue-router的实现依赖的是hashChange或H5的history模式，使得路由更新的时候，能够不重新渲染页面，更新对应的组件，具体来说：
- 首先我们在使用的时候需要Vue.use(vueRouter),在这一步调用的是install方法，在这个方法中做了三件事情，第一是安装了vue-router插件，第二是定义`this.$router`和`this.$route`两个变量来使得每个组件都可以访问路由列表，第三是注册了router-view和router-link两个组件，其中router-view就是获取到路由匹配的对应组件，render渲染，router-link就是注册click事件，触发路由的更新
- 其次是我们在使用的时候需要新建一个VueRouter实例，在这一步中做了两件事情，其一是生成了路由的匹配表，将每个组件和对应的路由地址匹配好，第二是根据定义的模式生成对应的history实例
- 第三部我们在使用的时候需要新建一个Vue实例，这一步的beforeCreate钩子中混入了vue-router的一些操作，第一是有一个init方法，根据不同的模式来确定路由切换的模式，然后通过history.listen注册路由的变化回调，第二是利用object.defineproperty监听当前路由地址的变化，如果变化了的话就会触发更新机制，比如hash模式，就是更新hash值，history模式就是通过pushState或replaceState来更新路由。更新路由之后就会触发hash的onHashChange或history中的popState触发对应的组件的更新



## vuex

[从头开始学习Vuex](https://github.com/ljianshu/Blog/issues/36#)

- 定义：对 vue 应用中多个组件的共享状态进行集中式的管理(读/写)
  - store用来存储公共的状态
  - mutation用来提交修改
  - action用来定义修改的逻辑
  - getter用来过滤数据
  
  



## Vue计算属性和侦听属性

- computed 计算属性是自动监听依赖值的变化，从而动态返回内容，监听是一个过程，在监听的值变化时，可以触发一个回调，并做一些事情。
- watch中可以执行任何逻辑，如函数节流，Ajax异步获取数据，甚至操作 DOM（不建议）
- 区别
  - watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作。
  - computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。
  - 计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。
    - computed能做的，watch都能做，反之则不行
    - 能用computed的尽量用computed



## webpack

- css-loader与style-loader
  - css-loader是加载文件中的require的css文件，而style-loader用于将文件中的css样式加载添加在js文件的head标签中



