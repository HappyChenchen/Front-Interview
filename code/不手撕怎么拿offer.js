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


function insidePolygon(points, testPoint){  
  var x = testPoint[0], y = testPoint[1]; 
  var inside = false;  
  for (var i = 0, j = points.length - 1; i < points.length; j = i++) {  
      var xi = points[i][0], yi = points[i][1];  
      var xj = points[j][0], yj = points[j][1];  
     
      var intersect = ((yi > y) != (yj > y))  
              && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);  
              console.log(intersect)
      if (intersect) inside = !inside;  
  }  
  return inside;  
}
console.log(insidePolygon([[0,0],[2,0],[1,2],[0,2]],[1,1.5]))
console.log(insidePolygon([[2,1],[0,0],[2,0],[1,1],[1,2],[0,2]],[1,1.5]))