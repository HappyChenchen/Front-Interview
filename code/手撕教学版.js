//reduce
if (typeof Array.prototype.reduce != "function") {
  Array.prototype.reduce = function(callback, initialValue) {
    var previous = initialValue,
      k = 0,
      length = this.length;
    if (typeof initialValue === "undefined") {
      previous = this[0];
      k = 1;
    }

    if (typeof callback === "function") {
      for (k; k < length; k++) {
        this.hasOwnProperty(k) &&
          (previous = callback(previous, this[k], k, this));
      }
    }
    return previous;
  };
}

//节流
function throttle(fn, delay) {
  let last = Date.now();
  return function() {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - last >= delay) {
      fn.apply(context, args);
      last = Date.now();
    }
  };
}

//防抖
function debounce(fn, delay) {
  var timer = null;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}

//手写递归深拷贝
//定义检测数据类型的功能函数
function checkedType(target) {
  console.log(Object.prototype.toString.call(target));
  return Object.prototype.toString.call(target).slice(8, -1);
}
//实现深度克隆---对象/数组
function clone(target) {
  //判断拷贝的数据类型
  //初始化变量result 成为最终克隆的数据
  let result,
    targetType = checkedType(target);
  if (targetType === "Object") {
    result = {};
  } else if (targetType === "Array") {
    result = [];
  } else {
    return target;
  }
  //遍历目标数据
  for (let i in target) {
    //获取遍历数据结构的每一项值。
    let value = target[i];
    //判断目标结构里的每一值是否存在对象/数组
    if (checkedType(value) === "Object" || checkedType(value) === "Array") {
      //对象/数组里嵌套了对象/数组
      //继续遍历获取到value值
      result[i] = clone(value);
    } else {
      //获取到value值是基本的数据类型或者是函数。
      result[i] = value;
    }
  }
  return result;
}

//实现一个 call 函数
Function.prototype.mycall = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  context = context || window;
  context.fn = this;
  //这里的这个this就是使用call的那个函数。因为是写在函数的原型上的，所以当一个具体的函数调用这个方法的时候，this就指向这个函数本身。本质上是给传入的这个对象先添加一个属性fn，这个属性的值就是调用call的那个函数。
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};

//实现一个 apply 函数
Function.prototype.myapply = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

// 实现一个bind函数
Function.prototype.mybind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let _this = this;
  let arg = [...arguments].slice(1);
  return function F() {
    //这里的判断是为了处理绑定的函数被用于new操作来创建新的对象，此时的this是指向新new出来的对象。不再是调用bind的那个函数了。
    if (this instanceof F) {
      return new _this(...arg, ...arguments);
    } else {
      return _this.apply(context, arg.concat(...arguments));
    }
  };
};

class Mypromise {
  constructor(fn) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    let resolve = value => {
      if (this.state == "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
    };
    let reject = value => {
      if (this.state == "pending") {
        this.state = "rejected";
        this.value = value;
      }
    };

    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    switch (this.state) {
      case "fulfilled":
        onFulfilled();
        break;
      case "rejected":
        onRejected();
        break;
      default:
    }
  }
}

//二分
function binary_search1(arr, key) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = parseInt((high + low) / 2);
    if (key == arr[mid]) {
      return mid;
    } else if (key > arr[mid]) {
      low = mid + 1;
    } else if (key < arr[mid]) {
      high = mid - 1;
    }
  }
  return -1;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];
var result = binary_search1(arr, 100);
console.log(result); // 9 返回目标元素的索引值

//二分 非递归
function binary_search2(arr, low, high, key) {
  if (low > high) {
    return -1;
  }
  var mid = parseInt((low + high) / 2);
  if (arr[mid] == key) {
    return mid;
  } else if (arr[mid] > key) {
    high = mid - 1;
    return binary_search2(arr, low, high, key);
  } else {
    low = mid + 1;
    return binary_search2(arr, low, high, key);
  }
}
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86];
var result2 = binary_search2(arr, 0, 13, 10);
console.log(result2); // 9 返回目标元素的索引值

//冒泡：
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var swap = arr[j + 1];
        a[j + 1] = a[j];
        a[j] = swap;
      }
    }
  }
}

//快排
function quick(arr) {
  var left = [];
  var right = [];
  if (arr.length < 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  var current = arr.splice(mid, 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick(left).concat(current, quick(right));
}

//typeof
function myTypeOf(obj){
  if(obj===null)return String(obj);
  return typeof obj==='object'?Object.prototype.toString.call(obj).slice(8,-1):typeof obj;
}
console.log(myTypeOf(undefined))


//curring
function myCurry(fn,...args){
  let length=fn.length;
  return function (...args2) { 
    let newArgs=args1.concat(args2);
    let context=this;
    if(newArgs.length<length){
      return myCurry(...args);
    }else{
      return fn.apply(context,newArgs);
    }
  }
}

const testArr = [
  {
  parentID: 0,
  nodeID: 1
  },
  {
  parentID: 1,
  nodeID: 2
  },
  {
  parentID: 1,
  nodeID: 3
  },
  {
  parentID: 2,
  nodeID: 4
  },
  {
  parentID: 2,
  nodeID: 5
  },
  ]
  
function processArr(arr, parent) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].parentID == parent) {
            let obj = {"parentID": arr[i].parentID,"nodeID": arr[i].nodeID};
            let nextChild=[];
            nextChild = processArr(arr, arr[i].nodeID);
            obj.children = nextChild;
            result.push(obj);
        }
    }
    return result;
}

// console.dir(processArr(testArr,0),{depth:null})

function deepclone(obj){
  let copy =obj instanceof Array?[]:{}
  for(let i in obj){
    if(obj.hasOwnProperty(i)){
      copy[i]=typeof obj[i]==='object'?deepclone(obj[i]):obj[i]
    }
  }
  return copy;
}

