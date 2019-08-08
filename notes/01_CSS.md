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

* BFC:

  - 生成 BFC 的条件是
    - float 为 left|right
    - overflow 为 hidden|auto|scroll
    - display 为 table-cell|table-caption|inline-block|inline-flex|flex
    - position 为 absolute|fixed
    - 根元素
  - 作用：为元素生成一个块级上下文，将元素包裹起来不受外部的影响
    - 清除浮动
    - 防止文字环绕、自适应两栏布局
    - 阻止垂直外边距重叠

* 行内元素与块级元素

  - display:block
    - 元素标签:div,p,h1~h6,li,ol,ul,table,tr,td
    - 可以设置高度和宽度，能同时设置水平和垂直的 margin 和 padding
  - display:inline
    - 元素标签:img,b,strong,em,input,a,span,small
    - 不能设置高度和宽度，只能设置水平的 margin 和 padding
    - 行内元素的间隙需要通过 margin-right 的负值、letter-spacing 来调整

* CSS 选择器

  - important 10000
  - style 内联样式 1000
  - id 选择器 100
  - class 选择器 10
  - 属性选择器 10
  - 伪类选择器 10
  - 标签选择器 1
  - 伪元素选择器 1
  - 通配符 0

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

## 响应式布局
