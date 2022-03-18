const memo = (fn) => {
  const cache = {};

  return function (...args) {
    if (cache[args]) return cache[args];
    const result = fn(...args);

    cache[args] = result;

    return result;
  };
};

const someFunc = (a, b) => a ** b;

const fib = (n) => {
  if (n < 2) return n;

  return memoFib(n - 1) + memoFib(n - 2);
};

const memoFib = memo(fib);

console.log(memoFib(1200));
