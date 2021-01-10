const validAnagram = (a, b) => {
  const arrA = a.split("").sort();
  const arrB = b.split("").sort();

  if (arrB.length !== arrA.length) return false;

  let i = 0;

  while (i < arrB.length) {
    if (arrB[i] !== arrA[i]) return false;
    i++;
  }

  return true;
};

console.log(validAnagram("cb     d", "db     c"));
