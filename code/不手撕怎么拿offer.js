//万年不变快排
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1);
  var left = [];
  var right = [];
  arr.forEach(element => {
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  });
  return quickSort(left).concat(pivot, right);
}

//从小到大
function BubbleSort(arr) {
  var i, j, temp;
  var flag = true; //flag进行标记
  for (i = 0; i < arr.length - 1 && flag; i++) {
    //若flag为false则退出循环
    flag = false; //初始化为false
    for (j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        //j为从前往后循环
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        flag = true; //如果有数据交换则为true
      }
    }
  }
  return arr;
}

function sat() {
  console.log(name);
  console.log(age);
  var name = 'hhh';
  let age = 12;
}

// setTimeout(function () {
//   console.log(1)
//   },0)

//   new Promise(function(resolve){
//     console.log(2);
//     resolve();
//     console.log(3);
//   }).then(function(){
//     console.log(4);
//   })


// (function(){
//   try{
//     console.log(a);
//     var a='a';
//     console.log(a);
//     b();
//     c();
//     function b(){
//       console.log("b");
//     }
//     var c=function(){
//       console.log("c");
//     }
//     console.log("d")
//   }catch(error){
//     console.log(error)
//   }
// })();

function findNum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  var mean = sum / arr.length;
  var minMinus = arr[0] - mean;
  if (minMinus < 0) {
    minMinus = minMinus * (-1);
  }
  var resNum = arr[0];
  for (let j = 0; j < arr.length; j++) {
    let cur = arr[j] - mean;
    if (cur < 0) {
      cur = cur * (-1);
    }
    if (cur < minMinus) {
      minMinus = cur;
      resNum = arr[j];
    }
  }
  return resNum;
}

function getUrlParam(sUrl, sKey) {
  var result = [];
  sUrl.replace(/\??(\w+)=(\w+)&?/g, function (a, k, v) {
    result.push(v);
  });
  return result;
}

// console.log(getUrlParam("http://www.nowcoder.com?name=leihuo&age=20&age=30"))

// function convertToData(url, canvasdata, cropdata, callback) {
//   var cropw = cropdata.width; // 剪切的宽
//   var croph = cropdata.height; // 剪切的宽
//   var imgw = canvasdata.width; // 图片缩放或则放大后的高
//   var imgh = canvasdata.height; // 图片缩放或则放大后的高

//   var poleft = canvasdata.left - cropdata.left; // canvas定位图片的左边位置
//   var potop = canvasdata.top - cropdata.top; // canvas定位图片的上边位置

//   var canvas = document.createElement("canvas");
//   var ctx = canvas.getContext('2d');

//   canvas.width = cropw;
//   canvas.height = croph;

//   var img = new Image();
//   img.src = url;

//   img.onload = function() {
//       this.width = imgw;
//       this.height = imgh;
//       // 这里主要是懂得canvas与图片的裁剪之间的关系位置
//       ctx.drawImage(this, poleft, potop, this.width, this.height);
//       var base64 = canvas.toDataURL('image/jpg', 1); // 这里的“1”是指的是处理图片的清晰度（0-1）之间，当然越小图片越模糊，处理后的图片大小也就越小
//       callback && callback(base64) // 回调base64字符串
//   }
function makeInterval(time) {
  var timer = setInterval(function () {
    if (time == 0) {
      clearTimeout(timer)
    }
    console.log(time)
    time--;
  }, 1000)
}

function makeTimeout(time) {
  for (let i = time; i > 0; i--) {
    setTimeout(function () {
      console.log(i)
    }, 1000)
  }
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function flattenDepth(array,depth=1) {
  let result = []
  array.forEach(item => {
    if (Array.isArray(item)&&depth>0) {
      result.push(...(flattenDepth(item,--depth)))
    } else {
      result.push(item)
    }
  })
  let res=[...new Set(result)]
  res.sort((a,b)=>{return a-b})
  return res
}

console.log(flattenDepth([1,[2,[3,[4]],5]]))
console.log(flattenDepth([1,[2,[3,[4]],5]],2))
console.log(flattenDepth([1,[2,[3,[4]],5]],3))