function add() {
  var args = [].slice.call(arguments);
  var fn = function() {
    var newArgs = args.concat([].slice.call(arguments));
    return add.apply(null, newArgs);
  };
  fn.toString = function() {
    return args.reduce(function(a, b) {
      return a + b;
    });
  };
  return fn;
}
console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2, 3)(4)); // 10
