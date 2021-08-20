// Exponential runtime
const longestPalindrome = function(str, seen = {}, currMax = "") {
  if (!str.length || currMax.length >= str.length) return currMax;
  if (seen[str]) return currMax;

  const isPalimdrone = str === str.split("").reverse().join("");
  seen[str] = isPalimdrone;
  if (isPalimdrone && str.length > currMax.length) return str;

  currMax = longestPalindrome(str.slice(1, str.length), seen, currMax);
  currMax = longestPalindrome(str.slice(0, str.length-1), seen, currMax);

  return currMax;
};


const test = "babad"
const test1 = "cbbd"
const test2 = "a"
const test3 = "ac"
const test4 = "babaddtattarrattatddetartrateedredividerb";

// console.log(longestPalindrome(test));
// console.log(longestPalindrome(test1));
// console.log(longestPalindrome(test2));
// console.log(longestPalindrome(test3));
console.log(longestPalindrome(test4));
