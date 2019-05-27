// npm test spec wants a class
// passes all 12 tests

// map->reduce methodology
class Words {
  count(string) {
    const toArr = string
      .toLowerCase()
      .replace(/[ \t\n]+/, " ")
      .trim()
      .split(" ");

    return toArr.reduce((dict, word) => {
      // pre-increment to properly add
      dict[word] = ++dict[word] || 1;
      return dict;
    }, {});
  }
}

exports.Words = Words;
