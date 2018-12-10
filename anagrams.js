// Phil Tenteromano
// anagram algorithm to count number of times
// a set of letters is found (exlude whitespace and case)

// anagram - a word, phrase, or name formed by rearranging the
// letters of another, such as cinema, formed from iceman.

// messy set of words
const words = [
  "ac t",
  "cat",
  "rAce",
  "care",
  "Smile",
  "dog",
  "e lVis",
  "lIv es"
];

// make copy of no whitespace, all lowercase, sorted words
function cleanAndSortWordsInArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(
      arr[i]
        .toLowerCase()
        .replace(/ +/g, "")
        .split("")
        .sort()
        .join("")
    );
  }
  return result;
}

// O(n) algorithm despite two for loops O(n+n) = O(n)
// could be done all in one loop for slightly better performance
function findAnagrams(arr) {
  const mapAnagrams = {};

  const sorted = cleanAndSortWordsInArray(arr);

  for (let i = 0; i < sorted.length; i++) {
    sorted[i] in mapAnagrams
      ? mapAnagrams[sorted[i]]++
      : (mapAnagrams[sorted[i]] = 1);
  }

  return mapAnagrams;
}

// log the map object
console.log(findAnagrams(words));

// original 'words' is still intact
console.log("\nOriginal Array: \n", words);
