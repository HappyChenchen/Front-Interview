//forEach、map、filter、find、every、some、reduce，它们有个共同点：不会改变原始数组。

var numbers = [1, 2, 3, 4, 5];

//forEach: 遍历数组
var sum = 0;
numbers.forEach(number => (sum += number));
console.log(sum); //15

//map：将数组映射成另一个数组
var doubleNum = numbers.map(item => item * 2);
console.log(doubleNum); //15

var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "BMW", price: "expensive" }
];
var prices = cars.map(car => car.price);
console.log(prices); //["CHEAP", "expensive"]

// filter：从数组中找出所有符合指定条件的元素
var porducts = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" }
];
var reProducts = porducts.filter(item => item.type === "vegetable");
console.log(reProducts);

// find：返回通过测试（函数内判断）的数组的第一个元素的值,存在返回，不存在返回undefined
var users = [
  { name: "Jill" },
  { name: "Alex", id: 2 },
  { name: "Bill" },
  { name: "Alex" }
];
var first = users.find(item => item.name === "Alex");
console.log(first);

//every&some
// every：数组中是否每个元素都满足指定的条件
// some:数组中是否有元素满足指定的条件
var isEvery = numbers.every(item => item > -1);
var isSome = numbers.some(item => item > 4);
console.log(isSome);

//reduce：将数组合成一个值
//reduce() 方法接收一个方法作为累加器，数组中的每个值(从左至右) 开始合并，最终为一个值。
var nums = [10, 20, 30];
var numSum = 0;
var sumResult = nums.reduce((numSum, item, index) => numSum + item + index);
console.log(sumResult);

//set
let arr = [1, 2, 3, 3, "3"];
var s = new Set(arr);
console.log(Array.from(s)); // [ 1, 2, 3, '3' ]
