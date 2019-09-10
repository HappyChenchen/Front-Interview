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

function sat(){
  console.log(name);
  console.log(age);
  var name='hhh';
  let age=12;
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
//   console.log(5)

function getXOR(l, r) {
  let res = l
  if (l === r) {
      return 0
  }
  for (let i = l+1; i <= r; i++) {
      res ^= i
  }
  return res;
}


console.log(getXOR(2,4))