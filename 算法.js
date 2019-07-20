//快排
function quick(arr) {
  if (arr.length <= 1) {
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
function delacb(str) {
  let strAr = str.split("");
  for (let i = 0; i < strAr.length; i++) {
    if (strAr[i] == "b") {
      strAr.splice(i, 1);
      if (i >= 1) {
        i--;
      }
    } else if (strAr[i] == "a" && strAr[i + 1] == "c") {
      strAr.splice(i, 2);
      if (i >= 1) {
        i--;
      }
    }
  }
  return strAr.join("");
}

console.log(quick([1, 2, 3, 4, 5, 7, 32, 12, 21, 2132]));

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
