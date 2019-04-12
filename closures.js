// closure examples
// simple array:

function createFlow(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

let a1 = [5, 10, 15, 20];

const nextElement = createFlow(a1);

let i = 0;
while (i < a1.length) {
  console.log(nextElement());
  i++;
}

console.log("-------------");

// closure data flow with fibonacci
function createFib() {
  let [i, k] = [1, 1];
  let first = true;
  function nextFib(x) {
    if (x) {
      [i, k] = [1, 1];
      first = true;
      return i;
    }
    if (first) {
      first = false;
      return 1;
    }
    const fib = i + k;
    k = i;
    i = fib;
    return fib;
  }
  return nextFib;
}

const fibSeq = createFib();

console.log(fibSeq());
console.log(fibSeq());
console.log(fibSeq());
console.log(fibSeq());
console.log(fibSeq());
console.log(fibSeq());
console.log(fibSeq());

while (i < 1000) {
  fibSeq();
  i++;
}

// !!! This code only executes in 0.113 seconds!!!!
console.log(fibSeq()); // a MASSIVE NUMBER

// reset it with a dummy variable
fibSeq("reset!");

console.log(fibSeq());
console.log(fibSeq());
console.log(fibSeq());
console.log(fibSeq());
