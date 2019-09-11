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
let name='outer'
function getXOR() {
  console.log(name)
  let name='inner'
}
name='uoda'
getXOR();

console.log(Number.MAX_VALUE>0,Number.MIN_VALUE<0)

let map = []
let n = +readline()
map.push(readline().split(' ').map(str => Number(str)).filter(num => num!==0))
for(let i=0; i < map.length; i++) {
    let line = map[i]
    let newLine = []    
    let j = 0
    while (j < line.length) {
        if (line[j] === line[j+1]) {
            newLine.push(line[j] * 2)
            j = j+2
        } else {
            newLine.push(line[j])
            j++
        }
    }
    map[i] = newLine
}

map.forEach(line => {
    while (line.length < n) {
        line.push(0)
    } 
    print(line.join(' '))
})

if (arr.length <= 1) {
  return 0
}
let min = arr[0]
let minIndex = 0
let count = 0
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
      min = arr[i]
      minIndex = i
  }
}
if(minIndex === 0) {
  return getCount(arr.slice(1))
} else {
  let res = arr.slice(1)
  res[minIndex - 1] = arr[0]
  return 1 + getCount(res)
}
