// Phil Tenteromano

// problem taken from Hacker Rank
/* 
String repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters the infinite string.
*/

const str = "abbbaba"; // length = 7, a = 3
const count = 100; // n variable

function repeatedString(s, n) {
  // split into array and count 'a' in original string
  const countA = (str) => str.split("").filter((c) => c === "a").length;

  // how many full strings fit into 'n', * countA in str
  const floorA = Math.floor(n / s.length) * countA(s);

  // get a remainder for n / s.length
  const remainder = n % s.length;

  if (remainder === 0) return floorA;
  else {
    // substring only up to the remainder, count those A's
    const lastA = countA(s.substring(0, remainder));

    return floorA + lastA;
  }
}

console.log(repeatedString(str, count)); // 43

// Explaination:
// 100 // 7 = 14
// 14 * 3 (a's in full-string) = 42

// 100 % 7 = 2
// first 2 char of str = 'ab'
// a's in 'ab' = 1
// 42 + 1 = 43
