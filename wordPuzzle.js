// Phil Tenteromano

// given 2d array of letters and a word
// return if the word can be found vertically

const puzzle = [
  ["A", "X", "L", "K", "G"],
  ["B", "K", "T", "I", "Y"],
  ["S", "I", "I", "P", "L"],
  ["L", "N", "M", "S", "A"],
  ["P", "B", "E", "F", "D"]
];

function verticalCrossword(puzzle, word) {
  let index = 0;
  let checkStr = "";
  // can't start to check if the word hasn't been started and there are not enough letters left
  let maxStartWord = puzzle.length - word.length;
  let breaking = false;

  // check every column in a row
  for (let r = 0; r <= maxStartWord; r++) {
    for (let c = 0; c < puzzle[r].length; c++) {
      // if the first letter is found, go down that column
      if (word.charAt(index) === puzzle[r][c]) {
        // start at the next row - letters must be sequential
        for (let v = r; v < puzzle.length; v++) {
          if (word.charAt(index) === puzzle[v][c]) {
            checkStr += puzzle[v][c];
            index++;
          } else if (checkStr === word) return true;
          else {
            console.log("breaking..");
            breaking = true;
            break;
          } //return false;

          // we have to check if a word ends with the end of column
          if (checkStr === word) return true;
        }
        // todo - continue checking if word isnt completed
        if (breaking) console.log("fix this", puzzle[r][c]);
      }
    }
  }
  return false;
}

const words = ["ABS", "KIN", "TIME", "PINS", "notin"];

for (let i = 0; i < words.length; i++) {
  console.log(
    `${words[i]} in the puzzle? - `,
    verticalCrossword(puzzle, words[i])
  );
}
