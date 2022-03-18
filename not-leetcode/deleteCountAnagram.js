// Phil Tenteromano

// count how many deletions it takes to make both strings anagrams of each other

function makeAnagram(a, b) {
  // get strings as arrays
  const s1 = a.split("");
  const s2 = b.split("");
  const mappings = {};
  let deleteCount = 0;

  // first string adds to letter mappings
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] in mappings) mappings[s1[i]]++;
    else mappings[s1[i]] = 1;
  }

  // second string decrements in mappings
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] in mappings) mappings[s2[i]]--;
    else mappings[s2[i]] = -1;
  }

  // anything other than 0 value is a deletion
  for (let key in mappings) {
    deleteCount += Math.abs(mappings[key]);
  }

  return deleteCount;
}

const string1 = "hithere";
const string2 = "hellohere";

console.log(makeAnagram(string1, string2)); // 6

// delete:
// t, e, i, o, l, l  == 6
