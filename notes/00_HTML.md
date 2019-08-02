
## HTML与H5的区别

1. 旧版本的html依赖浏览器的插件，比如flash。
2. h5不再基于SGML，所以文档声明类型只有一种。
3. h5消除了过时冗余的元素，例如font,center等。
4. h5新增了很多语义化元素，比如article、header、figure等，还有新功能video、canvas等。好处是结构清晰，可读性更强；促进无障碍访问；改善SEO。
5.  h5指定了很多新的全局属性和元素属性，比如全局属性draggable、contenteditable等，比如元素属性accept、placeholder等。

 

## 浏览器渲染模式

三种：怪异模式、接近标准模式、标准模式

怪异模式：

- 触发IE盒模型；font-size不会被继承；
- 颜色必须#十六进制；
- 元素左右外边距自动，但并不水平居中；
- 内容超出容器，会拉伸而不是溢出；

 

## HTML元素分类

**块级元素：**

address、center、h123456、hr、p、pre、blockquote、marquee、ul、ol、dl、table、form、div

- 总是从新的一行开始
- 高度、宽度都是可控的
- 宽度没有设置时，默认为100%
- 块级元素中可以包含块级元素和行内元素

**行内元素：**

span、a、br、b、strong、img 、sup、sub、i、em、del、u、input、textarea、select

- 和其他元素在一行中；
- 高度、宽度以及内外边距都是不可控的
- 宽高就是内容的高度，不可以改变
- 行内元素只能行内元素，不能包含块级元素

 

## 嵌入JS

**内联：**

会延迟css等资源下载

**外部：**

defer——延迟脚本执行，直到文档解析完成，无序

asysc——尽快执行脚本，不会阻塞文档解析，有序

**元素属性：**

onclick()，javascript:alert('test')

 

## meta元素

- charset  字符编码
- name 描述信息 author、viewport等
- http-equiv 模拟首部 content-type、default-style、refresh(重载、重定向）
- content

 

## 超链接：

href： _self   _blank   _parent  _to



## iframe:

缺点：

- 浏览器对同一域名的并发请求是有限制的；
- 阻塞父窗口的Load事件；
- script元素放在iframe之前，会阻塞iframe中资源的请求。
- 容易制造点击劫持。



 
