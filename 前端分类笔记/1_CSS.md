## 题目：

[50道CSS基础面试题（附答案）](https://link.juejin.im/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000013325778)

[《50道CSS基础面试题（附答案）》中的答案真的就只是答案吗？](https://link.juejin.im/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000013860482)

[CSS 面试题总结](https://link.juejin.im/?target=https%3A%2F%2Ffunteas.com%2Ftopic%2F5ada8eac230d1e5e25e45b89)

[front-end-interview-handbook](https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fyangshun%2Ffront-end-interview-handbook%2Fblob%2Fmaster%2FTranslations%2FChinese%2Fquestions%2Fcss-questions.md)

## 

## css

- position

  - relative:相对定位，相对于自身进行定位，不会脱离文档流，可以通过top等设置元素的位置
  - absolute:绝对定位，相对于除static之外的元素进行定位，一般与父元素的relative配合进行定位，会脱离本身的文档流，可以通过top等设置元素的位置
  - fixed:绝对定位，相对于浏览器绝对定位，通常适用于一些固定在浏览器屏幕不动的元素进行定位
  - static:没有值，默认定位，出现在正常的文档流中
  - inherit:继承父元素的定位方式

- float:浮动定位

  - 脱离文档流，元素会变成inline-block，会导致高度塌陷，造成布局混乱

  - 清除浮动

    - 给所有元素都加上float标签，显然是不现实的

    - 给浮动的父元素加上overflow：hidden

    - 给影响的元素加上clear:both来清除浮动

    - 给浮动元素后添加空元素，style设为clear：both来清除浮动

    - 给浮动元素使用伪元素after清除浮动

      ```
      .clearFloat{
        zoom:1
      }
      .clearFloat{
        content:'.';
        height:0;
        display:block;
        clear:both;
        visibility:hidden;
      }
      ```

- BFC:

  - 生成BFC的条件是
    - display:inline-block
    - float
    - position绝对定位
    - overflow:hidden,auto,scroll
  - 作用：为元素生成一个块级上下文，将元素包裹起来不受外部的影响
    - 清除浮动
    - 防止文字环绕

- 行内元素与块级元素

  - display:block
    - 元素标签:div,p,h1~h6,li,ol,ul,table,tr,td
    - 可以设置高度和宽度，能同时设置水平和垂直的margin和padding
  - display:inline
    - 元素标签:img,b,strong,em,input,a,span,small
    - 不能设置高度和宽度，只能设置水平的margin和padding
    - 行内元素的间隙需要通过margin-right的负值、letter-spacing来调整

- CSS选择器

  - important 10000
  - style内联样式 1000
  - id选择器 100
  - class选择器 10
  - 属性选择器 10
  - 伪类选择器 10
  - 标签选择器 1
  - 伪元素选择器 1
  - 通配符 0

- CSS3的特性

  - box-sizing: border-box;content-box
  - box-shadow盒子阴影
  - animation: myanimation 2s infinite;@keyframes
  - flex布局
  - 多媒体查询

- HTML

  - html5
    - audio，vedio
    - canvas，svg
    - article，header, footer, section, nav, aside
    - localStorage, SessionStorage