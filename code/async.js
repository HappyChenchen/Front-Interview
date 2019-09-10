let sleep = function(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout);
  });
};
//  pending resolved rejected
//  promise是回调函数的语法糖
//  async 是generator的语法糖

//  回调地狱
//  链式操作
//  异步代码看上去更像同步代码

//  父promise
//  then调用父promise的resolve
//  Promise.race和Promise.all

async function myStep() {
  await sleep(1000);
  sleep(4000);
  console.log("aa");
  console.timeEnd("test");
}

console.time("test");
myStep();
// Promise.resolve(1).then(res => console.log(res)).then(res => console.log(res))
function myRace(arr) {
  return new Promise((resolve, reject) => {
    arr.forEach(element => {
      element
        .then(res => {
          resolve(res);
        })
        .catch(res => reject(res));
    });
  });
}

var text = "AaAAAA";
function goodCount(str) {
  let dp = new Array(str.length);
  for (let i = 0; i < str.length; i++) {
    dp[i] || (dp[i] = []);
    let charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      if (i === 0) {
        dp[0][0] = 1;
        dp[0][1] = 2;
        continue;
      }
      dp[i][0] = Math.min(dp[i - 1][0] + 1, dp[i - 1][1] + 2);
      dp[i][1] = Math.min(dp[i - 1][0] + 2, dp[i - 1][1] + 2);
    }
    if (charCode >= 65 && charCode <= 90) {
      if (i === 0) {
        dp[0][0] = 2;
        dp[0][1] = 2;
        continue;
      }
      dp[i][0] = Math.min(dp[i - 1][0] + 2, dp[i - 1][1] + 2);
      dp[i][1] = Math.min(dp[i - 1][0] + 2, dp[i - 1][1] + 1);
    }
    return Math.min(dp[str.length - 1][0], dp[str.length - 1][1]);
  }
}
console.log(goodCount(text));
