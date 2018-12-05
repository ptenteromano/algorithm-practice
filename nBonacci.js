// each of its first N elements are equal to 1
// nBon = m-n + m-(n-1) +... + m-(n==1)
// when m <= n, return 1
// O(n^m)
function nBonacci(n, m) {
  if (m <= 1 || m <= n) return 1;

  let num = 0;
  let i = n;
  while (i >= 1) {
    num += nBonacci(n, m - i);
    i--;
  }
  return num;
}

console.log(nBonacci(3, 11)); // 193
// adding previous 3 numbers:
// 1,1,1,3,5,9,17,31,57,105,193
