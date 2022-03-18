


class Test {
  constructor(val) {
    this.val = val;
  }

  add(val) {
    this.val += val
  }
}

const root = new Test(5);
const nextOne = new Test(12);
let a = root;
a.add(20)
console.log({root})
console.log({nextOne})
console.log({a})

a = nextOne

console.log({root})
console.log({nextOne})
console.log({a})
