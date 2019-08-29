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
// console.log(func(1234));
// "4321"

//将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
// var old_arr = [
//   [1, 2, 2],
//   [3, 4, 5, 5],
//   [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
//   10
// ];

// // 数组拍平
// var level_arr = old_arr.flat(4);

// //数组去重
// var Distinct = Array.from(new Set(level_arr));

// // 排序
// var sort = Distinct.sort((a, b) => a - b);

// console.log("new arr", sort);

function isPrimeNumber(v) {//判断是否为质数
  var s = Math.floor(Math.sqrt(v));
  for (var i = s; i > 1; i--) if (v % i == 0) return false;
  return true;
}
function getPrimeNumber(min, max) {//获取指定范围内的质数集合
  let rst = [];
  for (let i = Math.max(2, min) ; i < max; i++) {
    if (isPrimeNumber(i)) rst.push(i);
  }
  if(rst.length==0){
    return 0
  }else{
    let sum1=0;
    let sum2=0;
    for(let i=0;i<rst.length;i++){
      let baiwei=parseInt(rst[i]/100); 
      let shiwei=parseInt((rst[i]%100)/10); 
      let gewei=parseInt(rst[i]%10); 
      sum1+=shiwei;
      sum2+=gewei;
    }
    if(sum1<sum2){
      return sum1;
    }else{
      return sum2;
    }
  }
}

// console.log(getPrimeNumber(2,20))


function getNum (str) {
  let dp = new Array(str.length)
  for (let i = 0; i<str.length; i++) {
      dp[i] || (dp[i] = [])
      let charCode = str.charCodeAt(i)
      // 小写字母
      if (charCode >= 97 && charCode <= 122) {
          if (i === 0) {
              dp[0][0] = 1
              dp[0][1] = 2
              continue
          }
          dp[i][0] = Math.min(dp[i-1][0] + 1, dp[i-1][1] + 2)
          dp[i][1] = Math.min(dp[i-1][0] + 2, dp[i-1][1] + 2)
      }
      // 大写字母
      if (charCode >= 65 && charCode <= 90) {
          if (i === 0) {
              dp[0][0] = 2
              dp[0][1] = 2
              continue
          }
          dp[i][0] = Math.min(dp[i-1][0] + 2, dp[i-1][1] + 2)
          dp[i][1] = Math.min(dp[i-1][0] + 2, dp[i-1][1] + 1)
      }
  }
  return Math.min(dp[str.length-1][0], dp[str.length-1][1])
}

function sort (arr) {
  let obj = {}
  let res = []
  let result = []
  for (let i = 0; i<arr.length; i++) {
      let firstName = arr[i].split(" ")[0]
      if (!obj[firstName]) {
          obj[firstName] = 1
      } else {
          obj[firstName]++
      }
  }
  for (let i = 0; i<arr.length; i++) {
      let firstName = arr[i].split(" ")[0]
      if (!res[obj[firstName]]) {
          res[obj[firstName]] = [arr[i]]
      } else {
          res[obj[firstName]].push(arr[i])
      }
  }
  res.reverse().forEach(arr => {
      result = result.concat(arr)
  })
  return result
}


// console.log(getNum('AaAAAA'))



function flatArr(arr){
  let result=[];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result= result.concat(...flatArr(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  result=[...new Set(result)]
  return result;
}



console.log(flatArr([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]));
