// //快排
// function quick(arr) {
//   if (arr.length > 1) {
//     return arr;
//   }
//   var left = [],
//     right = [];
//   var index = Math.floor(arr.length / 2);
//   var num = arr.splice(index, 1);
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < num) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quick(left).concat(num, quick(right));
// }

// //字符串中删除ac和b
// function deleteACB(str) {
//   var arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "b") {
//       arr.splice(i, 1);
//       if (i >= 1) {
//         i--;
//       }
//     } else if (arr[i] == "a" && arr[i + 1] == "c") {
//       arr.splice(i, 2);
//       if (i >= 1) {
//         i--;
//       }
//     }
//   }
//   return arr.join("");
// }

// //前序、中序还原二叉树
// function reConStructBinaryTree(pre, vin) {
//   if (pre.length < 1) {
//     return null;
//   }
//   var head = new TreeNode(pre[0]);
//   var index = vin.indexOf(pre[0]);
//   head.left = reConStructBinaryTree(
//     pre.slice(1, 1 + index),
//     vin.slice(0, index)
//   );
//   head.right = reConStructBinaryTree(
//     pre.slice(1 + index),
//     vin.slice(index + 1)
//   );
//   return head;
// }

// //数组的交集、差集、并集、重复并、补集
// function intersect(a, b) {
//   return a.filter(i => {
//     b.includes(i);
//   });
// }

// function exclude(a, b) {
//   return a.filter(i => {
//     !b.includes(i);
//   });
// }

// function union(a, b) {
//   return exclude(a, b).concat(b);
// }

// function unionAll(a, b) {
//   return a.concat(b);
// }

// function xor(a, b) {
//   return exclude(a, b).concat(exclude(b, a));
// }

// //reduce
// function reduce(callback, initValue) {
//   var per = initValue,
//     k = 0,
//     length = this.length;
//   if (typeof initValue === "undefined") {
//     pre = this[0];
//     k = 1;
//   }
//   if (typeof callback === "function") {
//     for (k; k < length; k++) {
//       this.hasOwnProperty(k) &&
//         (previous = callback(previous, this[k], k, this));
//     }
//   }
//   return previous;
// }

// //用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
// function func(v, r = "") {
//   v += "";
//   if (v.length < 1) return r;
//   r += v.slice(v.length - 1);
//   v = v.slice(0, v.length - 1);
//   return func(v, r);
// }
// // console.log(func(1234));
// // "4321"

// //将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
// // var old_arr = [
// //   [1, 2, 2],
// //   [3, 4, 5, 5],
// //   [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
// //   10
// // ];

// // // 数组拍平
// // var level_arr = old_arr.flat(4);

// // //数组去重
// // var Distinct = Array.from(new Set(level_arr));

// // // 排序
// // var sort = Distinct.sort((a, b) => a - b);

// // console.log("new arr", sort);

// function isPrimeNumber(v) {
//   //判断是否为质数
//   var s = Math.floor(Math.sqrt(v));
//   for (var i = s; i > 1; i--)
//     if (v % i == 0) return false;
//   return true;
// }

// function getPrimeNumber(min, max) {
//   //获取指定范围内的质数集合
//   let rst = [];
//   for (let i = Math.max(2, min); i < max; i++) {
//     if (isPrimeNumber(i)) rst.push(i);
//   }
//   if (rst.length == 0) {
//     return 0;
//   } else {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = 0; i < rst.length; i++) {
//       let baiwei = parseInt(rst[i] / 100);
//       let shiwei = parseInt((rst[i] % 100) / 10);
//       let gewei = parseInt(rst[i] % 10);
//       sum1 += shiwei;
//       sum2 += gewei;
//     }
//     if (sum1 < sum2) {
//       return sum1;
//     } else {
//       return sum2;
//     }
//   }
// }

// // console.log(getPrimeNumber(2,20))

// function getNum(str) {
//   let dp = new Array(str.length);
//   for (let i = 0; i < str.length; i++) {
//     dp[i] || (dp[i] = []);
//     let charCode = str.charCodeAt(i);
//     // 小写字母
//     if (charCode >= 97 && charCode <= 122) {
//       if (i === 0) {
//         dp[0][0] = 1;
//         dp[0][1] = 2;
//         continue;
//       }
//       dp[i][0] = Math.min(dp[i - 1][0] + 1, dp[i - 1][1] + 2);
//       dp[i][1] = Math.min(dp[i - 1][0] + 2, dp[i - 1][1] + 2);
//     }
//     // 大写字母
//     if (charCode >= 65 && charCode <= 90) {
//       if (i === 0) {
//         dp[0][0] = 2;
//         dp[0][1] = 2;
//         continue;
//       }
//       dp[i][0] = Math.min(dp[i - 1][0] + 2, dp[i - 1][1] + 2);
//       dp[i][1] = Math.min(dp[i - 1][0] + 2, dp[i - 1][1] + 1);
//     }
//   }
//   return Math.min(dp[str.length - 1][0], dp[str.length - 1][1]);
// }

// function sort(arr) {
//   let obj = {};
//   let res = [];
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let firstName = arr[i].split(" ")[0];
//     if (!obj[firstName]) {
//       obj[firstName] = 1;
//     } else {
//       obj[firstName]++;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let firstName = arr[i].split(" ")[0];
//     if (!res[obj[firstName]]) {
//       res[obj[firstName]] = [arr[i]];
//     } else {
//       res[obj[firstName]].push(arr[i]);
//     }
//   }
//   res.reverse().forEach(arr => {
//     result = result.concat(arr);
//   });
//   return result;
// }

// // console.log(getNum("AaAAAA"));

// // // console.log(getNum('AaAAAA'))

// function flatArr(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(...flatArr(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   result = [...new Set(result)];
//   return result;
// }

// // console.log(flatArr([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10]));

// //美团二面准备、最长回文字符串
// function isHuiwen(str) {
//   return (
//     str ==
//     str
//       .split("")
//       .reverse()
//       .join("")
//   );
// }

// console.log(longestPalindrome2("adadccc"));

// //暴力 时间复杂度为O(n^3)，空间复杂度为O(1)。
// function longestPalindrome1(s) {
//   let n = s.length;
//   let res = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//       let str = s.slice(i, j);
//       let f = str.split("").reverse().join("");
//       if (str == f) {
//         res = str.length > res.length ? str : res;
//       }
//     }
//   }
//   return res;
// }

// //dp 时间复杂度为O(n^2)，空间复杂度为O(n^2)。
// function longestPalindrome2(s) {
//   let dp = [];
//   for (let i = 0; i < s.length; i++) {
//     dp[i] = [];
//   }
//   let max = -1, str = "";
//   for (let k = 0; k < s.length; k++) {
//     // k为所遍历的子串长度 - 1，即左下标到右下标的距离
//     for (let i = 0; i + k < s.length; i++) {
//       let j = i + k;
//       // i为子串开始的左下标，j为子串开始的右下标
//       if (k == 0) {
//         dp[i][j] = true;// 当子串长度为1时，必定是回文
//       } else if (k <= 2) {
//         // 当子串长度为2时，两字符相同则符合回文，长度为3，首位字符相同则符合回文
//         if (s[i] == s[j]) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = false;
//         }
//       } else {
//         // 当子串长度超过3，取决于去掉头尾之后的子串是否回文并且首位字符是否相同
//         if (dp[i + 1][j - 1] && s[i] == s[j]) {
//           dp[i][j] = true;
//         } else {
//           dp[i][j] = false;
//         }
//       }
//       console.log(i + "" + j + dp[i][j])
//       if (dp[i][j] && k > max) {
//         max = k;
//         str = s.substring(i, j + 1);
//       }
//     }
//   }
//   return str;
// }

// //二叉树前序遍历
// //https://blog.csdn.net/liusaint1992/article/details/80310918
// function Node(ele, left, right, parent) {
//   this.ele = ele;
//   this.left = left;
//   this.right = right;
//   this.parent = parent;
//   this.show = function () {
//     return this.ele;
//   }
// }

// var node4 = { left: null, right: null, val: 4 };
// var node5 = { left: null, right: null, val: 5 };
// var node6 = { left: null, right: null, val: 6 };
// var node7 = { left: null, right: null, val: 7 };
// var node3 = { left: node6, right: node7, val: 3 };
// var node2 = { left: node4, right: node5, val: 2 };
// var node1 = { left: node2, right: node3, val: 1 };


// function preorderTraversal(root, res) {
//   if (!root) {
//     return;
//   }
//   res.push(root.val)
//   if (root.left) {
//     preorderTraversal(root.left, res);
//   }
//   if (root.right) {
//     preorderTraversal(root.right, res);
//   }
//   return res;
// }

// function preorderTraversal1(root) {
//   if (!root) {
//     return;
//   }
//   var stack = [root];
//   var res = [];
//   while (stack.length > 0) {
//     //取第一个。
//     var item = stack.shift();
//     res.push(item.val);
//     if (item.right) {
//       stack.unshift(item.right);
//     }
//     if (item.left) {
//       stack.unshift(item.left);
//     }
//   }
//   return res;
// }

// console.log(preorderTraversal(node1, []));  //1 2 4 5 3 6 7 
// console.log(preorderTraversal1(node1));

// function inorderTraversal(root, res) {
//   if (!root) {
//     return;
//   }
//   if (root.left) {
//     inorderTraversal(root.left, res);
//   }
//   res.push(root.val);
//   if (root.right) {
//     inorderTraversal(root.right, res);
//   }
// }

// // inorderTraversal(node1); //4 2 5 1 6 3 7


// //先将根节点入栈，找到所有左节点入栈，直到没有左节点为止，然后出栈存入结果数组，
// //每出一个，对比该根节点的右子节点是否有左节点，若有则入栈，否则继续出栈
// function inorderTraversal1(root) {
//   var res = [];
//   //栈  
//   var s = [];
//   var p = root;
//   while (p || s.length > 0) {
//     //直至左节点为空，即没有左节点为止
//     while (p) {
//       s.push(p);
//       p = p.left;
//     }
//     //出栈，存放根节点
//     p = s.pop();
//     res.push(p.val);
//     p = p.right;
//   }
//   return res;
// }

// // console.log(inorderTraversal1(node1)); //4 2 5 1 6 3 7

// //层次遍历
// function levelOrder(root) {
//   if (!root) {
//     return
//   }
//   var checkArr = [root];
//   var result = [];
//   while (checkArr.length > 0) {
//     var newCheckArr = [];
//     for (let i = 0; i < checkArr.length; i++) {
//       var item = checkArr[i];
//       result.push(item.val);
//       if (item.left) {
//         newCheckArr.push(item.left)
//       }
//       if (item.right) {
//         newCheckArr.push(item.right)
//       }
//     }
//     checkArr = newCheckArr;
//   }
//   return result;
// }

// console.log(levelOrder(node1))

// function unique5(arr) {
//   var x = new Set(arr);
//   return [...x];
// }

// console.log(['10','1010','101010'].map(parseInt));

function getMaxSubStr(str1, str2) {
  let L=[]
  for (let i = 0; i < str1.length + 1; i++) {
      L[i] = []
      L[i][0] = 0
  }
  for (let j = 0; j < str2.length + 1; j++) {
      L[0][j] = 0
  }
  let max = -1
  let x = -1
  let y = -1
  for (let i = 1; i < str1.length + 1; i++) {
      for (let j = 1; j < str2.length + 1; j++) {
          if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
              L[i][j] = L[i - 1][j - 1] + 1
          }
          else {
              L[i][j] = 0
          }
          if (L[i][j] > max) {
              max = L[i][j]
              x = i - 1
              y = j - 1
          }
      }
  }
  let str = [];
  while (x >= 0 && y >= 0) {
      if (str1.charAt(x) == str2.charAt(y)) {
          str[--max] = str1.charAt(x)
          x--
          y--
      }
      else
          break;
  }
  let str_out = ""
  for (let i = 0; i < str.length; i++) {
      str_out += str[i]
  }
  return str_out.length
}
//   console.log(getMaxSubStr('abcd', 'abdde'));


function divide(str1, str2) {
    let arr = new Array(256).fill(0)
    for (let i = 0; i < str1.length; i++) {
        if (!arr[str1.charCodeAt(i)]) {
            arr[str1.charCodeAt(i)] = 0
        } 
        arr[str1.charCodeAt(i)]++
    }
    for (let i = 0; i < str2.length; i++) {
        if (!arr[str2.charCodeAt(i)]) {
            arr[str2.charCodeAt(i)] = 0
        } 
        arr[str2.charCodeAt(i)]--
    }
    for (let item of arr) {
        if (item) {
            return false
        }
    }
    return true
}


var levelOrderBottom = function(root) {
    var queue = [];
    var result = [];
    if (root !== null) {
      queue.push(root);
    }
    while(queue.length !== 0) {
      var level = [];
      var len = queue.length;
      for (var i = 0; i < len; i ++) {
        var currentNode = queue.shift();
        level.push(currentNode.val);
        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.right !== null) queue.push(currentNode.right);
      }
      result.push(level);
    }
    return result.reverse();
  };


console.log(levelOrderBottom([3,9,20,null,null,15,7]))