function reverseArgs(fn) {
  return function(...args) {
    return fn(...args.reverse());
  };
}

const originalFunction = (a, b) => a + b;
const reversedFunction = reverseArgs(originalFunction);

console.log(reversedFunction(1, 2)); // 2 + 1 = 3
