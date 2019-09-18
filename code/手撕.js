//call
function myCall(context) {
  var context = context || window;
  context.fn = this;
  let args = arguments.slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}

//apply
function myApply(context) {
  var context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}

//bind
function mybind(context) {
  let _this = this;
  let args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    } else {
      return _this.apply(context, args.concat(...arguments));
    }
  };
}

//new
function objectFactory(fun) {
  return function () {
    let obj = {
      _proto_: fun.prototype
    };
    fun.call(obj, ...arguments);
    return obj;
  };
}

//原型继承
function Parent() {
  this.name = "111";
}

function Child() {
  Parent.call(this);
  this.sex = "boy";
}
//由于 Object.create()这个 api 的特性，父类的原型对象会继承在子类的原型对象的原型对象上，实现了子类原型对象与父类原型对象的隔离，这时再给子类的原型对象的 constructor 属性赋值。为什么直接在第四种方式的后面直接赋值呢？因为这是子类与父类的原型对象指向同一个对象，修改属性会同时修改子类与父类的原型对象。
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

/**
        圣杯模式原型继承封装
        @param Target 需要继承的子类
        @param Origin 被继承的父类 
        */
function inherit(Target, Origin) {
  //创建中间层构造函数
  function Buffer() {}
  //把被继承父类的原型付给中间层构造函数
  Buffer.prototype = Origin.prototype;
  //把实例化的中间层构造函数生成的对象付给需要继承的目标类
  Target.prototype = new Buffer();
  //目标类构造函数指向还原
  Target.prototype.constructor = Target;
  //定义目标类从哪继承
  Target.prototype.super_class = Origin;
}

//闭包

//防抖
function debounce(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(fn.apply(context, args), delay);
  };
}

//节流
function throttle(fn, delay) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev > delay) {
      fn.apply(context, args);
      prev = Date.now();
    }
  };
}

//函数柯里化

//浅拷贝
let copy1 = {
  ...{
    x: 1
  }
};
let copy2 = Object.assign({}, {
  x: 1
});

//深拷贝

// JSON.parse(JSON.stringify(obj));

function deepclone(obj) {
  let copy = obj instanceof Array ? [] : {};
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === "object" ? deepclone(obj[i]) : obj[i];
    }
  }
  return copy;
}

//instanceof

//typeof

//Promise

//双向数据绑定

//懒加载

//手写实现AJAX

//Promise.all

//最大不重复字串

//回文
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let resultCount = 0;
    let results = new Array(promises.length);
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(
        value => {
          resultCount++;
          results[i] = value;
          if (resultCount === promises.length) {
            return resolve(results);
          }
        },
        error => {
          reject(error);
        }
      );
    }
  });
}

//图片url,坐标，裁剪宽高度，图片格式（png等）
function getUrlBase64(url, x, y, width, height, form) {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image;
  img.crossOrigin = 'Anonymous';
  img.src = url;
  img.onload = function () {
    canvas.height = height;
    canvas.width = width;
    ctx.drawImage(img, x, y, width, height);
    var dataURL = canvas.toDataURL("image/" + form);
    console.log(dataURL);
  };
}

console.log(getUrlBase64('https://www.baidu.com/img/bd_logo1.png', 120, 130, 240, 350, 'png'))