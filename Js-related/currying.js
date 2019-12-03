
// curry => 闭包  重新生成函数改变this指向
Function.prototype.testBind = function(ctx) {
  var _this = this
  var args = Array.prototype.slice.call(arguments, 1) //取参
  return function() {
    var args1 = Array.prototype.slice.call(arguments, 0) //取参
    return _this.apply(ctx, [...args, ...args1])
  }
}
x = 20;
var y = 30;

// test
var obj = {
  x: 18,
  y: 19
}

function sum(s) {
  
  const s1 = this.x + s

  return s1 
}


var bindtest = sum.testBind(obj)

var bindtest1 = sum.testBind(global, 6)
const ss1 = bindtest(5)
console.log(ss1,bindtest1(7));


function add1(a,d){
  return a+d;
};

const curry = (fn, ...arg) => {
  let all = arg;
  return (...rest) => {
      all.push(...rest);
      return fn.apply(null, all);
  }
}
let add2 = curry(add1, 2)
console.log(add2(8));    //10
add2 = curry(add1);
console.log(add2(2,8)); //10

// 实现一个add方法，使计算结果能够满足如下预期：浏览器环境
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

function add(...args) { 
  let newArgs = args || []

  function inner(..._args) {
    newArgs = [..._args, ...newArgs ]
  
    return inner
  
  }

  inner.valueOf = function() {
    return newArgs.reduce((pre, current)=>pre+=current, 0);
  }
  return inner
}



var demo = add(1)(2)(3)
console.log(demo, 'sxx')
