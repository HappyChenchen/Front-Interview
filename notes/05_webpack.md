

## 原理：

### **核心概念**

JavaScript 的 **模块打包工具****打包功能****文件处理机制**

- **Entry**: 入口文件，Webpack 会从该文件开始进行分析与编译；
- **Output**: 出口路径，打包后创建 bundler 的文件路径以及文件名；
- **Module**: 模块，在 Webpack 中任何文件都可以作为一个模块，会根据配置的不同的 Loader 进行加载和打包；
- **Chunk**: 代码块，可以根据配置，将所有模块代码合并成一个或多个代码块，以便按需加载，提高性能；
- **Loader**: 模块加载器，进行各种文件类型的加载与转换；
- **Plugin**: 拓展插件，可以通过 Webpack 相应的事件钩子，介入到打包过程中的任意环节，从而对代码按需修改；



### **工作流程** (加载 - 编译 - 输出)

1、读取配置文件，按命令 **初始化** 配置参数，创建 Compiler 对象；

2、调用插件的 apply 方法 **挂载插件** 监听，然后从入口文件开始执行编译；

3、按文件类型，调用相应的 Loader 对模块进行 **编译**，并在合适的时机点触发对应的事件，调用 Plugin 执行，最后再根据模块 **依赖查找** 到所依赖的模块，递归执行第三步；

4、将编译后的所有代码包装成一个个代码块 (Chuck)， 并按依赖和配置确定 **输出内容**。这个步骤，仍然可以通过 Plugin 进行文件的修改;

5、最后，根据 Output 把文件内容一一写入到指定的文件夹中，完成整个过程；



### **总结**:

- 模块机制: webpack 自己实现了一套模拟模块的机制，将其包裹于业务代码的外部，从而提供了一套模块机制；
- 文件编译: webpack 规定了一套编译规则，通过 Loader 和 Plugin，以管道的形式对文件字符串进行处理；



## Loader

### 概念：

Webpack 是基于 Node，因此 Webpack 其实是只能识别 js 模块，比如 css / html / 图片等类型的文件并无法加载，因此就需要一个对 **不同格式文件转换器**。其实 Loader 做的事，也并不难理解: **对 Webpack 传入的字符串进行按需修改**。

通常是需要将代码进行分析，构建 **AST (抽象语法树)**， 遍历进行定向的修改后，再重新生成新的代码字符串。如我们常用的 Babel-loader 会执行以下步骤:

- babylon 将 ES6/ES7 代码解析成 AST
- babel-traverse 对 AST 进行遍历转译，得到新的 AST
- 新 AST 通过 babel-generator 转换成 ES5

### **Loader 特性**:

- **链式传递**，按照配置时相反的顺序链式执行；
- 基于 Node 环境，拥有 **较高权限**，比如文件的增删查改；
- 可同步也可异步；

### **常用 Loader**:

- file-loader: 加载文件资源，如 字体 / 图片 等，具有移动/复制/命名等功能；
- url-loader: 通常用于加载图片，可以将小图片直接转换为 Date Url，减少请求；
- babel-loader: 加载 js / jsx 文件， 将 ES6 / ES7 代码转换成 ES5，抹平兼容性问题；
- ts-loader: 加载 ts / tsx 文件，编译 TypeScript；
- style-loader: 将 css 代码以`<style>`标签的形式插入到 html 中；
- css-loader: 分析`@import`和`url()`，引用 css 文件与对应的资源；
- postcss-loader: 用于 css 的兼容性处理，具有众多功能，例如 **添加前缀，单位转换** 等；
- less-loader / sass-loader: css预处理器，在 css 中新增了许多语法，提高了开发效率；

### **编写原则**:

- **单一原则**: 每个 Loader 只做一件事；
- **链式调用**: Webpack 会按顺序链式调用每个 Loader；
- **统一原则**: 遵循 Webpack 制定的设计规则和结构，输入与输出均为字符串，各个 Loader 完全独立，即插即用；



## Plugin

### 概念：

插件系统是 Webpack 成功的一个关键性因素。在编译的整个生命周期中，Webpack 会触发许多事件钩子，Plugin 可以监听这些事件，根据需求在相应的时间点对打包内容进行定向的修改。

### **常用 Plugin**:

- UglifyJsPlugin: 压缩、混淆代码；
- CommonsChunkPlugin: 代码分割；
- ProvidePlugin: 自动加载模块；
- html-webpack-plugin: 加载 html 文件，并引入 css / js 文件；
- extract-text-webpack-plugin / mini-css-extract-plugin: 抽离样式，生成 css 文件；
- DefinePlugin: 定义全局变量；
- optimize-css-assets-webpack-plugin: CSS 代码去重；
- webpack-bundle-analyzer: 代码分析；
- compression-webpack-plugin: 使用 gzip 压缩 js 和 css；
- happypack: 使用多进程，加速代码构建；
- EnvironmentPlugin: 定义环境变量；



## 编译优化

- **代码优化**:
  - **无用代码消除**，是许多编程语言都具有的优化手段，这个过程称为 DCE (dead code elimination)，即 **删除不可能执行的代码**；
  - **摇树优化** (Tree-shaking)，这是一种形象比喻。我们把打包后的代码比喻成一棵树，这里其实表示的就是，通过工具 "摇" 我们打包后的 js 代码，将没有使用到的无用代码 "摇" 下来 (删除)。即 消除那些被 **引用了但未被使用** 的模块代码。
- **code-spliting**: **代码分割** 技术，将代码分割成多份进行 **懒加载** 或 **异步加载**，避免打包成一份后导致体积过大，影响页面的首屏加载；
- **scope hoisting**: **作用域提升**，将分散的模块划分到同一个作用域中，避免了代码的重复引入，有效减少打包后的代码体积和运行时的内存损耗；

**编译性能优化**:

- 升级至 **最新** 版本的 webpack，能有效提升编译性能；
- 使用 dev-server / 模块热替换 (HMR) 提升开发体验； 
  - 监听文件变动 **忽略 node_modules** 目录能有效提高监听时的编译效率；
- 缩小编译范围: 
  - modules: 指定模块路径，减少递归搜索；
  - mainFields: 指定入口文件描述字段，减少搜索；
  - noParse: 避免对非模块化文件的加载；
  - includes/exclude: 指定搜索范围/排除不必要的搜索范围；
  - alias: 缓存目录，避免重复寻址；
- babel-loader: 
  - 忽略`node_moudles`，避免编译第三方库中已经被编译过的代码；
  - 使用`cacheDirectory`，可以缓存编译结果，避免多次重复编译；
- 多进程并发: 
  - webpack-parallel-uglify-plugin: 可多进程并发压缩 js 文件，提高压缩速度；
  - HappyPack: 多进程并发文件的 Loader 解析；
- 第三方库模块缓存: 
  - DLLPlugin 和 DLLReferencePlugin 可以提前进行打包并缓存，避免每次都重新编译；
- 使用分析: 
  - Webpack Analyse / webpack-bundle-analyzer 对打包后的文件进行分析，寻找可优化的地方；
  - 配置`profile：true`，对各个编译阶段耗时进行监控，寻找耗时最多的地方；
- source-map: 
  - 开发: `cheap-module-eval-source-map`；
  - 生产: `hidden-source-map`；







## webpack 的优势

1.  webpack 是以 commonJS 的形式来书写脚本，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。

2.  能被模块化的不仅仅是 JS 了。

3.  开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转 base64 等。

4.  扩展性强，插件机制完善



## 什么是 loader，什么是 plugin

loader 用于加载某些资源文件。因为 webpack 本身只能打包 common.js 规范的 js 文件，对于其他资源如 css，img 等，是没有办法加载的，这时就需要对应的 loader 将资源转化，从而进行加载。

plugin 用于扩展 webpack 的功能。不同于 loader，plugin 的功能更加丰富，比如压缩打包，优化，不只局限于资源的加载。



## 什么是 bundle，什么是 chunk，什么是 module

- **bundle：** 是由 webpack 打包出来的文件
- **chunk：** 是指 webpack 在进行模块依赖分析的时候，代码分割出来的代码块
- **module：** 是开发中的单个模块



## webpack 和 gulp 的区别？

**webpack：**
webpack 是一个模块打包器，强调的是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源都看成是模块，通过 loader 和 plugin 对资源进行处理。
**gulp：**
gulp 是一个前端自动化构建工具，强调的是前端开发的工作流程，可以通过配置一系列的 task，第一 task 处理的事情（如代码压缩，合并，编译以及浏览器实时更新等）。然后定义这些执行顺序，来让 glup 执行这些 task，从而构建项目的整个开发流程。自动化构建工具并不能把所有的模块打包到一起，也不能构建不同模块之间的依赖关系。



## 什么是模热更新？有什么优点？

模块热更新是 webpack 的一个功能，它可以使得代码修改之后，不用刷新浏览器就可以更新。在应用过程中替换添加删出模块，无需重新加载整个页面，是高级版的自动刷新浏览器。
**优点：**
只更新变更内容，以节省宝贵的开发时间。调整样式更加快速，几乎相当于在浏览器中更改样式



## webpack-dev-server 和 http 服务器的区别

webpack-dev-server 使用内存来存储 webpack 开发环境下的打包文件，并且可以使用模块热更新，比传统的 http 服务对开发更加有效。



## 什么是长缓存？在 webpack 中如何做到长缓存优化？

浏览器在用户访问页面的时候，为了加快加载速度，会对用户访问的静态资源进行存储，但是每一次代码升级或者更新，都需要浏览器去下载新的代码，最方便和最简单的更新方式就是引入新的文件名称。

在 webpack 中，可以在 output 给出输出的文件制定 chunkhash，并且分离经常更新的代码和框架代码，通过 NameModulesPlugin 或者 HashedModulesPlugin 使再次打包文件名不变。



## 什么是 Tree-sharking?CSS 可以 Tree-shaking 吗?

Tree-shaking 是指在打包中去除那些引入了，但是在代码中没有被用到的那些死代码。在 webpack 中 Tree-shaking 是通过 uglifyJSPlugin 来 Tree-shakingJS。Css 需要使用 Purify-CSS。



## 如何可以自动生成 webpack 配置？

webpack-cli /vue-cli /etc …脚手架工具



## webpack 打包

在生产环境中，webpack 执行的时候 build.js 文件太大，每次请求都会消耗很大的流量，如果修改代码，代码不会更新，浏览器记录了缓存，如果同名文件不会发起请求，走缓存；

使用 readfileSync 读取 package.json 文件中的版本号，把获取的 version（版本号）加入到 output 出口文件 build.js 中，以版本号管理升级的问题，版本一升级所有的资源，都直接重新来，浪费很多不必要的流量，如果文件发生改变那么从新请求 index.html 内的引用也要发生改变；

以 chunkhash 来解决缓存后修改代码的问题，在每个文件的处理中都可以获取其数字签名，文件内容发生改变，chunkhash 也发生改变，index,html 中的 chunkhash 文件名也发生改名，产生系统升级，不走缓存；

如果更改 css 或者 js 或者第三方包,都会触发重新牺牲流量去请求新的 build.js，使用 webpack 的插件 extract-text-webpack-plugin，在插件中通过 contenthash 将 css 分离，css 的更改和 js 的更改互不影响，只要发生改动就能绕过缓存完成升级；

如果修改 js，会影响所有的 js（里面的内容包括自己写的和第三方包），使用 webpack 插件 CommonsChunkPlugin 分离第三方库，把自己的 js 和第三方包分离，各走各的，第三方包走 vendor；

改动 main.js 代码会导致重新生成 vendor,使用 manifest 记录到依赖清单，每次只要改动 vorder 或者 main 都会重新生成关联清单，vendor 不会被 main.js 所影响，main.js 也不会被 vendor 所影响;

假如不走缓存的话，那么 vendor 和 main 的文件还是特别大，使用 webpack 插件 uglifyjs-webpack-plugin，来压缩 js，因为用了 ES6，所以使用 yarn 下载，压缩之后 js 文件就小了差不多 50%;

当前效果比之前好了很多，但是还不是最完美的，在没有任何缓存的情况下，用户一进来主页访问消耗的流量还是很大，此时就需要用到按需加载组件，webpack 分块打包，在路由 router 中提供了一个功能，懒加载，不要需要改变任何路由配置，把所有独自默认一开始就加载的组件分块打包（除了全局下的），形成一个个封装的函数，在路由匹配需要渲染的时候才获取组件对象，在页面创建 script 标签请求回来，引入执行…



## install

webpack 是我们需要的模块打包机，webpack-dev-server 用来创建本地服务器，监听你的代码修改，并自动刷新修改后的结果。这些是有关 devServer 的配置

```
contentBase,  // 为文件提供本地服务器
port, // 监听端口，默认8080
inline, // 设置为true,源文件发生改变自动刷新页面
historyApiFallback  // 依赖HTML5 history API,如果设置为true,所有的页面跳转指向index.html
devServer:{
    contentBase: './src' // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true // 实时刷新
}
 //然后我们在根目录下创建一个'webpack.config.js'，在'package.json'添加两个命令用于本地开发和生产发布
"scripts": {
            "start": "webpack-dev-server",
            "build": "webpack"
        }
```



## entry

**entry:** 用来写入口文件，它将是整个依赖关系的根

```
var baseConfig = {
        entry: './src/index.js'
    }
```

当我们需要多个入口文件的时候，可以把 entry 写成一个对象

```
var baseConfig = {
        entry: {
            main: './src/index.js'
        }
    }
```

建议使用后面一种方法，因为他的规模会随你的项目增大而变得繁琐



## output

**output:** 即使入口文件有多个，但是只有一个输出配置

```
var path = require('path')
    var baseConfig = {
        entry: {
            main: './src/index.js'
        },
        output: {
            filename: 'main.js',
            path: path.resolve('./build')
        }
    }
    module.exports = baseConfig
```

如果你定义的入口文件有多个，那么我们需要使用占位符来确保输出文件的唯一性

```
output: {
        filename: '[name].js',
        path: path.resolve('./build')
    }
```

如今这么少的配置，就能够让你运行一个服务器并在本地使用命令 npm start 或者 npm run build 来打包我们的代码进行发布



## Loader

**loader 的作用：**
1、实现对不同格式的文件的处理，比如说将 scss 转换为 css，或者 typescript 转化为 js
2、转换这些文件，从而使其能够被添加到依赖图中
loader 是 webpack 最重要的部分之一，通过使用不同的 Loader，我们能够调用外部的脚本或者工具，实现对不同格式文件的处理，loader 需要在 webpack.config.js 里边单独用 module 进行配置，配置如下：

```
	// test: 匹配所处理文件的扩展名的正则表达式（必须）
    // loader: loader的名称（必须）
    // include/exclude: 手动添加处理的文件，屏蔽不需要处理的文件（可选）
    //  query: 为loaders提供额外的设置选项
    // ex:
        var baseConfig = {
            // ...
            module: {
                rules: [
                    {
                        test: /*匹配文件后缀名的正则*/,
                        use: [
                            loader: /*loader名字*/,
                            query: /*额外配置*/
                        ]
                    }
                ]
            }
        }
```

要是 loader 工作，我们需要一个正则表达式来标识我们要修改的文件，然后有一个数组表示
我们表示我们即将使用的 Loader,当然我们需要的 loader 需要通过 npm 进行安装。例如我们需要解析 less 的文件，那么 webpack.config.js 的配置如下：

```
var baseConfig = {
                entry: {
                    main: './src/index.js'
                },
                output: {
                    filename: '[name].js',
                    path: path.resolve('./build')
                },
                devServer: {
                    contentBase: './src',
                    historyApiFallBack: true,
                    inline: true
                },
                module: {
                    rules: [
                        {
                            test: /\.less$/,
                            use: [
                                {loader: 'style-loader'},
                                {loader: 'css-loader'},
                                {loader: 'less-loader'}
                            ],
                            exclude: /node_modules/
                        }
                    ]
                }
            }
```

这里介绍几个常用的 loader：
babel-loader： 让下一代的 js 文件转换成现代浏览器能够支持的 JS 文件。
babel 有些复杂，所以大多数都会新建一个.babelrc 进行配置

css-loader,style-loader:两个建议配合使用，用来解析 css 文件，能够解释@import,url()如果需要解析 less 就在后面加一个 less-loader

file-loader: 生成的文件名就是文件内容的 MD5 哈希值并会保留所引用资源的原始扩展名

url-loader: 功能类似 file-loader,但是文件大小低于指定的限制时，可以返回一个 DataURL 事实上.
在使用 less,scss,stylus 这些的时候，npm 会提示差什么插件，差什么，安上就行了

## Plugins

plugins 和 loader 很容易搞混，都是外部引用有什么区别呢？ 事实上他们是两个完全不同的东西。这么说**loaders 负责的是处理源文件的**如 css、jsx，**一次处理一个文件**。**而 plugins 并不是直接操作单个文件，它直接对整个构建过程起作用**下面列举了一些我们常用的 plugins 和他的用法
**ExtractTextWebpackPlugin:** 它会将入口中引用 css 文件，都打包都独立的 css 文件中，而不是内嵌在 js 打包文件中。下面是他的应用

```
var ExtractTextPlugin = require('extract-text-webpack-plugin')
        var lessRules = {
            use: [
                {loader: 'css-loader'},
                {loader: 'less-loader'}
            ]
        }

        var baseConfig = {
            // ...
            module: {
                rules: [
                    // ...
                    {test: /\.less$/, use: ExtractTextPlugin.extract(lessRules)}
                ]
            },
            plugins: [
                new ExtractTextPlugin('main.css')
            ]
        }
```

**HtmlWebpackPlugin:**
作用： 依据一个简单的 index.html 模版，生成一个自动引用你打包后的 js 文件的新 index.html

```
var HTMLWebpackPlugin = require('html-webpack-plugin')
            var baseConfig = {
                // ...
                plugins: [
                    new HTMLWebpackPlugin()
                ]
            }
```

HotModuleReplacementPlugin: 它允许你在修改组件代码时，自动刷新实时预览修改后的结果注意永远不要在生产环境中使用 HMR。这儿说一下一般情况分为开发环境，测试环境，生产环境。
用法如 new webpack.HotModuleReplacementPlugin()
webapck.config.js 的全部内容:

```
const webpack = require("webpack")
        const HtmlWebpackPlugin = require("html-webpack-plugin")
        var ExtractTextPlugin = require('extract-text-webpack-plugin')
        var lessRules = {
            use: [
                {loader: 'css-loader'},
                {loader: 'less-loader'}
            ]
        }
        module.exports = {
            entry: {
                    main: './src/index.js'
                },
                output: {
                    filename: '[name].js',
                    path: path.resolve('./build')
                },
                devServer: {
                    contentBase: '/src',
                    historyApiFallback: true,
                    inline: true,
                    hot: true
                },
                module: {
                    rules: [
                        {test: /\.less$/, use: ExtractTextPlugin.extract(lessRules)}
                    ]
                },
                plugins: [
                new ExtractTextPlugin('main.css')
            ]
        }
```

## resolve

配置导入包的路径

```
 resolve : {
        alias : { //alias别名 修改vue导入的路径
            "vue$" : "vue/dist/vue.js"
        }
    }
```

## 产品阶段的构建

目前为止，在开发阶段的东西我们已经基本完成了。但是在产品阶段，还需要对资源进行别的
处理，例如压缩，优化，缓存，分离 css 和 js。首先我们来定义产品环境

```
var ENV = process.env.NODE_ENV
    var baseConfig = {
        // ...
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(ENV)
            })
        ]
    }
```

然后还需要修改我们的 script 命令

```
"scripts": {
            "start": "NODE_ENV=development webpack-dev-server",
            "build": "NODE_ENV=production webpack"
        }
```

process.env.NODE_ENV 将被一个字符串替代，它运行压缩器排除那些不可到达的开发代码分支。
当你引入那些不会进行生产的代码，下面这个代码将非常有用。

```
if (process.env.NODE_ENV === 'development') {
            console.warn('这个警告会在生产阶段消失')
        }
```

## 优化插件

**下面介绍几个插件用来优化代码**
**OccurenceOrderPlugin:** 为组件分配 ID,通过这个插件 webpack 可以分析和优先考虑使用最多 的模块，然后为他们分配最小的 ID
**UglifyJsPlugin:** 压缩代码
下面是他们的使用方法

```
var baseConfig = {
// ...
new webpack.optimize.OccurenceOrderPlugin()
new webpack.optimize.UglifyJsPlugin()
}
```

然后在我们使用 npm run build 会发现代码是压缩的

## 对 webpack 的看法

1. webpack 是一个模块打包工具，使用 webpack 管理你的模块依赖，并编译输出她们所需要的静态文件，它能够很好地管理、打包 web 开发中所用到的 html、css、js 及各种静态文件，让开发过程更加高效。
2. webpack 的两大特色：代码分割和模块处理

## 热重启

1. 热重启原理：eventsource sse，一旦服务器资源有更新，能够及时通知到客户端，从而实时的反馈到用户界面上。本质上是一个 http，通过 response 流实时推送服务器信息到客户端。链接断开后会持续出发重连。\_webpack_hmr:每隔 10s 推送一条在消息到浏览器
2. 实现：
   client：创建 new EventSource （“／message”），
   Server：需要返回类型为 text／event-stream 的响应头，发送数据以 data 开头，\n\n 结尾；
   webpack-dev-server 是一个机遇 express 的 web server，监听 8080，server 内部调用 webpack，这样的好处是提供了热加载和热替换的功能；
   webpack-hot-middleware 和 webpack-dev-middleware
3. EventSource 和 websocket 的区别：
   1. eventSource 本质仍然是 http，仅提供服务器端到浏览器端的单向文本传输，不需要心跳链接，链接断开回持续重发链接；
   2. websocket 是基于 TCP 的协议，提供双向数据传输，支持二进制，需要心跳链接，断开链接不会重链；
   3. EventSource 更简洁轻量，WebSocket 支持行更好（IE10+）。后者功能更强大一点。

## 特性

所有的资源都可以当作一个模块来处理，热替换（不用刷新整个页面），代码拆分和按需加载，拥有灵活的可扩展 plugin 库和 loader 模块加载器；

## 如何使用常用插件？

1. HtmlWebpackPlugin 的用法及多入口文件配置：作用是依据一个 html 模版，生成 html 文件，并将打包后的资源文件自动引入（title：；template：’‘，fileName：‘’，inject：js 插入位置等）；
2. webpack.optimize.commonsChunkPlugin:抽取公共模块,减小打包体积，例如：vue 的源码、jquery 的源码等：entry：vendor：[‘react’];plugin:new web pack.optimize.CommonsChunkPlugin({name:’vendor’})
3. loader：
   \1. css：解析 css 代码，在 js 中通过 require 方式引入 css 文件
   \2. style：通过 style 的方式引入 {test:/.css\$/,loader:’style-loader!css-loader’}，二者组合能将 css 代码写入到 js 文件中
4. 将样式抽取成单独的文件，extract-text-webpack-plugin（filename：‘’）：
5. url-loader：实现图片文字等的打包，有一个 option 选项 limit 属性表示，少于这个限制，则打包成 base64，大于的话，就使用 file-loader 去打包成图片；
6. postcss：实现浏览器兼容，autoprefixer
7. babel：转 es
8. hot module replacement：修改代码后，自动刷新实时预览修改后的效果。devServer：{hot:true,inline:true(实时刷新)}
9. ugliifyJsPlugin：压缩 js 代码

## 与 gulp 的比较

1. gulp 是工具链，可以配合各种插件做 js、css 压缩，less 编译等；而 webpack 能把项目中的各种 js、css 文件等打包合并成一个或者多个文件，主要用于模块化方案，
2. 侧重点不同，gulp 侧重于整个过程的控制管理（像是流水线），通过配置不同的 task，构建整个前端开发流程；webpack 则侧重于模块打包；并且 gulp 的打包功能是通过安装 gulp-webpack 来实现的
3. webpack 能够按照模块的依赖关系构建文件组织结构；
