//log简化函数
function Log() {
    return console.log.apply(console, arguments)
}


//数组拍平
function flattenDepth(array, depth = 1) {
    let result = []
    array.forEach(item => {
        if (Array.isArray(item) && depth > 0) {
            result = result.concat(flattenDepth(item, --depth))
        } else {
            result.push(item)
        }
    })
    let res = [...new Set(result)]
    res.sort((a, b) => {
        return a - b
    })
    return res
}

// console.log(flattenDepth([1,[3,[3,[4]],5]]))
// console.log(flattenDepth([1,[3,[3,[4]],5]],2))
// console.log(flattenDepth([1,[3,[3,[4]],5]],3))

//字符串倒序
function reverseStr(str) {
    return str.split("").reverseStr.join('');
}

//倒计时
function makeInterval(time) {
    var timer = setInterval(function () {
        if (time == 0) {
            clearInterval(timer)
        }
        console.log(time)
        time--;
    }, 1000)
}

function makeTimeout(time) {
    for (let i = time; i >= 0; i--) {
        setTimeout(function () {
            console.log(i)
        }, 3000 * (time - i))
    }
}
// makeTimeout(3);

//快排
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1);
    var left = [];
    var right = [];
    arr.forEach(item => {
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    });
    return quickSort(left).concat(pivot, right);
}

//手写call
Function.prototype.mycall = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}

var value = 2;
var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}
// console.log(bar.mycall(obj, 'kevin', 18));

//手写apply
Function.prototype.myapply = function (context, arr) {
    var context = context || window;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn();
    } else {
        var args = [];
        for (var i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result;
}

//手写bind
//当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。
// 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
// 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
// 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
// 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
//我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。这个时候，我们可以通过一个空函数来进行中转：
Function.prototype.mybind = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () {};
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

//instanceof的原理
// 思路：A的原型存在于B的原型链上
function instanceofMy(A, B) {
    let proto = Object.getPrototypeOf(A);
    let prototype = B.prototype;
    if (proto == null || proto == undefined) {
        return false;
    } else if (proto === prototype) {
        return true;
    } else {
        return instanceofMy(Object.getPrototypeOf(proto), B)
    }
}

console.log(instanceofMy({}, Object))

// Object.create的基本实现原理
function create(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}

//new
function myNew(fun) {
    return function () {
        let obj = {
            _proto_: fun.prototype
        };
        fun.call(obj, ...arguments);
        return obj;
    }
}

function person(name, age) {
    this.name = name
    this.age = age
}

let textObj = myNew(person)('chen', 18) // {name: "chen", age: 18}


//深浅拷贝
// 1. ...实现
let copy1 = {
    ...{
        x: 1
    }
}
// 2. Object.assign实现
let copy2 = Object.assign({}, {
    x: 1
})

function deepClone(obj) {
    let res = obj instanceof Array ? [] : {};
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            res[i] = typeof obj[i] === 'Object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return res;
}


// 原型继承



//防抖
function debounce(fn, delay) {
    // 利用闭包保存定时器
    let timer = null
    return function () {
        let context = this
        let arg = arguments
        // 在规定时间内再次触发会先清除定时器后再重设定时器
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, arg)
        }, delay)
    }
}


//节流
// 思路：在规定时间内只触发一次
function throttle(fn, delay) {
    // 利用闭包保存时间
    let prev = Date.now()
    return function () {
        let context = this
        let arg = arguments
        let now = Date.now()
        if (now - prev >= delay) {
            fn.apply(context, arg)
            prev = Date.now()
        }
    }
}

//rem原始配置
function setRem() {
    let doc = document.documentElement
    let width = doc.getBoundingClientRect().width
    let rem = width / 75
    doc.style.fontSize = rem + 'px'
}
addEventListener("resize", setRem)


//手写AJAX
// 1. 简单流程
// 实例化
let xhr = new XMLHttpRequest()
// 初始化
xhr.open(method, url, async)
// 发送请求
xhr.send(data)
// 设置状态变化回调处理请求结果
xhr.onreadystatechange = () => {
    if (xhr.readyStatus === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}

//基本的Promise
class Promise {
    constructor(fn) {
        // 三个状态
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        let resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
            }
        }
        let reject = value => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = value
            }
        }
        // 自动执行函数
        try {
            fn(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    // then
    then(onFulfilled, onRejected) {
        switch (this.state) {
            case 'fulfilled':
                onFulfilled()
                break
            case 'rejected':
                onRejected()
                break
            default:
        }
    }
}

function promiseAll(promises){
	return new Promise(function(resolve,reject){
		if(!Array.isArray(promises)){
			return reject(new TypeError("argument must be anarray"))
		}
		var count=0;
		var promiseNum=promises.length;
		var resolvedValue=new Array(promiseNum);
		for(var i=0;i<promiseNum;i++){
            (function(i){
            	Promise.resolve(promises[i]).then(function(value){
            		count++;
            		resolvedValue[i]=value;
            		if(countNum===promiseNum){
            			return resolve(resolvedValue)
            		}
            	},function(reason){
            		return reject(reason)
            	})
            })(i)
        }
	})
}
 
var p1=Promise.resolve(1),
    p2=Promise.resolve(2),
    p3=Promise.resolve(3);
 
 promiseAll([p1,p2,p3]).then(function(value){
 	console.log(value)
 })

function promiseRace(promiseArr) {
    return new Promise(function (resolve, reject) {
        if(!Array.isArray(promises)){
			return reject(new TypeError("argument must be anarray"))
		}
        promiseArr.forEach((promise, index) =>{
           promise.then(resolve, reject);
        });
    });
};
