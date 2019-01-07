// Phil Tenteromano

// given 2d array of letters and a word
// return if the word can be found vertically

const puzzle = [
  ["A", "X", "L", "K", "S"],
  ["B", "K", "T", "I", "T"],
  ["S", "I", "I", "P", "A"],
  ["L", "N", "M", "S", "R"],
  ["P", "B", "E", "F", "T"]
];

// check entire crossword
function crossword(puzzle, word) {
  verticalCrossword(puzzle, word);
  horizontalCrossword(puzzle, word);
  diagnolCrossword(puzzle, word);
}

function verticalCrossword(puzzle, word) {
  let index = 0;
  let checkStr = "";
  // can't start to check if the word hasn't been started and there are not enough letters left
  let maxStartWord = puzzle.length - word.length + 1;

  // check every column in a row
  for (let r = 0; r < maxStartWord; r++) {
    for (let c = 0; c < puzzle[r].length; c++) {
      // if the first letter is found, go down that column
      if (word.charAt(index) === puzzle[r][c]) {
        // start at the next row - letters must be sequential
        for (let v = r; v < puzzle.length; v++) {
          if (word.charAt(index) === puzzle[v][c]) {
            checkStr += puzzle[v][c];
            index++;
          } else if (checkStr === word) {
            return true;
          } else {
            // reset the string and try again
            checkStr = "";
            index = 0;
            break;
          }

          // we have to check if a word ends with the end of column
          if (checkStr === word) {
            return true;
          }
        }
        // todo - continue checking if word isnt completed
      }
    }
  }

  return false;
}

// KIN is an example of restarting the word (it finds KIP, breaks loop and continues looking)
const words = ["ABS", "KIN", "TIME", "START", "False"];

for (let i = 0; i < words.length; i++) {
  console.log(
    `${words[i]} in the puzzle? - `,
    verticalCrossword(puzzle, words[i])
  );
}
