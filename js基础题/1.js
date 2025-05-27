const obj = {
  name: "share",
  sayHi: () => {
    console.log(this.name);
  },
  sayHi2: function () {
    return () => {
      console.log(this);
    };
  },
};
var fn3 = obj.sayHi2();
obj.sayHi();
obj.sayHi2()();
fn3(); //指向obj，箭头函数的this和普通函数不一样，普通函数是谁调用了的，this就指向谁，箭头函数的this是在定义的时候由外部所在的词法作用域来决定的

const obj1 = {
  name: "share",
  sayHi: () => {
    console.log(this.name);
  },
  sayHi2: function () {
    return function () {
      console.log(this);
    };
  },
};
var fn3 = obj1.sayHi2();
obj1.sayHi2()();
fn3();

// 函数柯里化
function currying(fn, ...args) {
  return function (...rest) {
    const allArgs = args.concat(rest);
    if (allArgs.length >= fn.length) {
      return fn.apply(this, allArgs);
    } else {
      return currying(fn, ...allArgs);
    }
  };
}

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(sum.length);

console.log(currying(sum)(1)(2)(3)(4, 5));
console.log(currying(sum, 1, 2)(3)(4)(5));
console.log(currying(sum, 1)(2, 3)(4, 5));
