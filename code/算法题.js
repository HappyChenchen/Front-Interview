//快排
function quick(arr) {
  if (arr.length > 1) {
    return arr;
  }
  var left = [],
    right = [];
  var index = Math.floor(arr.length / 2);
  var num = arr.splice(index, 1);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick(left).concat(num, quick(right));
}

//字符串中删除ac和b
function deleteACB(str) {
  var arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "b") {
      arr.splice(i, 1);
      if (i >= 1) {
        i--;
      }
    } else if (arr[i] == "a" && arr[i + 1] == "c") {
      arr.splice(i, 2);
      if (i >= 1) {
        i--;
      }
    }
  }
  return arr.join("");
}

//前序、中序还原二叉树
function reConStructBinaryTree(pre, vin) {
  if (pre.length < 1) {
    return null;
  }
  var head = new TreeNode(pre[0]);
  var index = vin.indexOf(pre[0]);
  head.left = reConStructBinaryTree(
    pre.slice(1, 1 + index),
    vin.slice(0, index)
  );
  head.right = reConStructBinaryTree(
    pre.slice(1 + index),
    vin.slice(index + 1)
  );
  return head;
}

//数组的交集、差集、并集、重复并、补集
function intersect(a, b) {
  return a.filter(i => {
    b.includes(i);
  });
}

function exclude(a, b) {
  return a.filter(i => {
    !b.includes(i);
  });
}

function union(a, b) {
  return exclude(a, b).concat(b);
}

function unionAll(a, b) {
  return a.concat(b);
}

function xor(a, b) {
  return exclude(a, b).concat(exclude(b, a));
}

//reduce
function reduce(callback, initValue) {
  var per = initValue,
    k = 0,
    length = this.length;
  if (typeof initValue === "undefined") {
    pre = this[0];
    k = 1;
  }
  if (typeof callback === "function") {
    for (k; k < length; k++) {
      this.hasOwnProperty(k) &&
        (previous = callback(previous, this[k], k, this));
    }
  }
  return previous;
}

//用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
function func(v, r = "") {
  v += "";
  if (v.length < 1) return r;
  r += v.slice(v.length - 1);
  v = v.slice(0, v.length - 1);
  return func(v, r);
}
console.log(func(1234));
// "4321"

//将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
var old_arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10
];

// // 数组拍平
// var level_arr = old_arr.flat(4);

// //数组去重
// var Distinct = Array.from(new Set(level_arr));

// // 排序
// var sort = Distinct.sort((a, b) => a - b);

// console.log("new arr", sort);

console.log(...new Set(old_arr));
