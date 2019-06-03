// npm test spec wants a class
// passes all 9 test cases

class Squares {
  constructor(n) {
    const numArr = [];

    while (n > 0) {
      numArr.push(n);
      --n;
    }

    this.squareOfSum = this.squareTheSum(numArr);
    this.sumOfSquares = this.sumTheSquares(numArr);
    this.difference = Math.abs(this.squareOfSum - this.sumOfSquares);
  }

  // Sum and them square - O(n)
  squareTheSum(arr) {
    return arr.reduce((total, num) => total + num, 0) ** 2;
  }

  // Square and then add - O(n) (multiplication is not hard)
  sumTheSquares(arr) {
    return arr.reduce((total, num) => total + num ** 2, 0);
  }
}

exports.Squares = Squares;
