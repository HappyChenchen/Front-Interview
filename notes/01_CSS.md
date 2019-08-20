## 题目：

[50 道 CSS 基础面试题（附答案）](https://link.juejin.im/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000013325778)

[《50 道 CSS 基础面试题（附答案）》中的答案真的就只是答案吗？](https://link.juejin.im/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000013860482)

[CSS 面试题总结](https://link.juejin.im/?target=https%3A%2F%2Ffunteas.com%2Ftopic%2F5ada8eac230d1e5e25e45b89)

[front-end-interview-handbook](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fyangshun%2Ffront-end-interview-handbook%2Fblob%2Fmaster%2FTranslations%2FChinese%2Fquestions%2Fcss-questions.md)



## CSS

- position

  - relative:相对定位，相对于自身进行定位，不会脱离文档流，可以通过 top 等设置元素的位置
  - absolute:绝对定位，相对于除 static 之外的元素进行定位，一般与父元素的 relative 配合进行定位，会脱离本身的文档流，可以通过 top 等设置元素的位置
  - fixed:绝对定位，相对于浏览器绝对定位，通常适用于一些固定在浏览器屏幕不动的元素进行定位
  - static:没有值，默认定位，出现在正常的文档流中
  - inherit:继承父元素的定位方式

- float:浮动定位

  - 脱离文档流，元素会变成 inline-block，会导致高度塌陷，造成布局混乱。

  - 清除浮动

    - 给浮动元素的子元素添加高度，扩展性不好。

    - 给影响的元素加上 clear:both 来清除浮动

    - 给浮动元素的父元素，使用伪元素:after 清除浮动（推荐）

      ```
      .clearFloat{
        zoom:1
      }
      .clearFloat{
        content:'.';
        height:0;
        clear: both;
        display:block;
        clear:both;
        visibility:hidden;
      }
      ```

    - 给浮动的父元素加上 overflow：hidden

    - br 标签清浮动

* 行内元素与块级元素

  - display:block
    - 元素标签:div,p,h1~h6,li,ol,ul,table,tr,td
    - 可以设置高度和宽度，能同时设置水平和垂直的 margin 和 padding
  - display:inline
    - 元素标签:img,b,strong,em,input,a,span,small
    - 不能设置高度和宽度，只能设置水平的 margin 和 padding
    - 行内元素的间隙需要通过 margin-right 的负值、letter-spacing 来调整

  

* CSS3 的特性

  - box-sizing: border-box;content-box
  - box-shadow 盒子阴影
  - animation: myanimation 2s infinite;@keyframes
  - flex 布局
  - 多媒体查询

* HTML

  - html5
    - audio，vedio
    - canvas，svg
    - article，header, footer, section, nav, aside
    - localStorage, SessionStorage

* LESS/SCSS

  - 在传统的 CSS 基础上增加了大量的新的语法，编写方式，常用的函数等
  - LESS 的基础语法基本上分为：变量、混合(Mixins)、嵌套规则、运算、函数、作用域等。
  - SCSS <https://www.kaops.com/iv/1000>



## flex

### 容器的属性

以下6个属性设置在容器上。

- flex-direction :主轴的方向（即项目的排列方向）

  ```
  flex-direction:row | row-reverse |  column | column-reverse; 
  ```

- flex-wrap：换行

  ```
  flex-wrap: nowrap | wrap | wrap-reverse;
  ```

- flex-flow：是flex-direction属性和flex-wrap属性的简写形式，默认 row nowrap。

  ```
  flex-flow:<flex-direction> || <flex-wrap>;
  ```

- justify-content：项目在主轴上的对齐方式

  ```
  justify-content:flex-start | flex-end | center | space-between |space-around;
  ```

- align-items：项目在交叉轴上如何对齐

  ```
  align-items:flex-start | flex-end | center |baseline | stretch;
  ```

- align-content：定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

  ```
  align-content:flex-start | flex-end | center | spance-between | space-around |stretch;
  }
  ```

### 项目的属性

- order：定义项目的排列顺序。数值越小，排列越靠前，默认为0.

  ```
  order:<integer>;
  ```

- flex-grow：定义项目的放大比例，默认值为0，即如果存在剩余空间，也不放大

  ```
  flex-grow:<number>;/* default 0*/
  ```

- flex-shrink：定义了项目的缩小比例，默认为1，即如果空间不足，改项目将缩小。

  ```
   flex-shrink:<number>;/* default 1 */
  ```

- flex-basis：定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

  ```
  flex-basis:<length> | auto ; /*default auto*/
  ```

- flex：flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。后面两个属性可选

  ```
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
  ```

- align-self：align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，等同于stretch。

- ```
   align-self: auto | flex-start | flex-end | center | baseline | stretch;
  ```



## 盒模型

页面渲染时，dom 元素所采用的 **布局模型**。可通过`box-sizing`进行设置。根据计算宽高的区域可分为：

- `content-box` (W3C 标准盒模型)
- `border-box` (IE 盒模型)



## BFC:

- 生成 BFC 的条件是
  - float 为 left|right
  - overflow 为 hidden|auto|scroll
  - display 为 table-cell|table-caption|inline-block|inline-flex|flex
  - position 为 absolute|fixed
  - 根元素
- 规则：
  - 属于同一个 BFC 的两个相邻 Box 垂直排列
  - 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
  - BFC 中子元素的 margin box 的左边， 与包含块 (BFC) border box的左边相接触 (子元素 absolute 除外)
  - BFC 的区域不会与 float 的元素区域重叠
  - 计算 BFC 的高度时，浮动子元素也参与计算
  - 文字层不会被浮动层覆盖，环绕于周围
- 作用：为元素生成一个块级上下文，将元素包裹起来不受外部的影响
  - 清除浮动
  - 防止文字环绕、自适应两栏布局
  - 阻止垂直外边距重叠



## 居中：

### 水平居中

- 行内元素: `text-align: center`
- 块级元素: `margin: 0 auto`
- `absolute + transform`
- `flex + justify-content: center`

### 垂直居中

- `line-height: height`
- `absolute + transform`
- `flex + align-items: center`
- `table`

### 水平垂直居中

- `absolute + transform`
- `flex + justify-content + align-items`





## CSS 选择器

- important 10000
- style 内联样式 1000
- id 选择器 100
- class 选择器 10
- 属性选择器 10
- 伪类选择器 10
- 标签选择器 1
- 伪元素选择器 1
- 通配符 0



## 去除浮动影响，防止父级高度塌陷

- 通过增加尾元素清除浮动
  - `:after / <br> : clear: both`
- 创建父级 BFC
- 父级设置高度



### link 与 @import 的区别

- `link`功能较多，可以定义 RSS，定义 Rel 等作用，而`@import`只能用于加载 css
- 当解析到`link`时，页面会同步加载所引的 css，而`@import`所引用的 css 会等到页面加载完才被加载
- `@import`需要 IE5 以上才能使用
- `link`可以使用 js 动态引入，`@import`不行



### CSS预处理器(Sass/Less/Postcss)

CSS预处理器的原理: 是将类 CSS 语言通过 **Webpack 编译** 转成浏览器可读的真正 CSS。在这层编译之上，便可以赋予 CSS 更多更强大的功能，常用功能:

- 嵌套
- 变量
- 循环语句
- 条件语句
- 自动前缀
- 单位转换
- mixin复用



## CSS动画

- `transition`: 过渡动画
  - `transition-property`: 属性
  - `transition-duration`: 间隔
  - `transition-timing-function`: 曲线
  - `transition-delay`: 延迟
  - 常用钩子: `transitionend`
- `animation / keyframes`
  - `animation-name`: 动画名称，对应`@keyframes`
  - `animation-duration`: 间隔
  - `animation-timing-function`: 曲线
  - `animation-delay`: 延迟
  - animation-iteration-count: 次数 
    - `infinite`: 循环动画
  - animation-direction: 方向 
    - `alternate`: 反向播放
  - animation-fill-mode: 静止模式 
    - `forwards`: 停止时，保留最后一帧
    - `backwards`: 停止时，回到第一帧
    - `both`: 同时运用 `forwards / backwards`
  - 常用钩子: `animationend`
- 动画属性: 尽量使用动画属性进行动画，能拥有较好的性能表现
  - `translate`
  - `scale`
  - `rotate`
  - `skew`
  - `opacity`
  - `color`


