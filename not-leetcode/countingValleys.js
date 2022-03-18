// Phil Tenteromano

// start at sealevel
// walking steps either UP or DOWN
// count how many vallys are entered
// a valley is defined as:
// going below sealevel, and then come back to sealevel

// input is a string of steps - 'UDDDUDUUU'

// example of one valley:
// _/\      _
//    \    /
//     \/\/

// O(n) where n is the number of steps
function countingValleys(n, s) {
  const steps = s.split("");
  let valleys = 0;
  let sealevel = 0;
  let belowSea = false;

  // true if up, false if down
  const checkUp = (step) => step === "U";

  for (let i = 0; i < n; i++) {
    // check relation to sealevel
    if (checkUp(steps[i])) {
      sealevel += 1;
    } else sealevel -= 1;

    // check if in a valley, or just came out of one
    if (sealevel < 0) belowSea = true;
    else if (belowSea && sealevel >= 0) {
      valleys += 1;
      belowSea = false;
    }
  }

  return valleys;
}

const steps = "UDDDUUUUUDDDDDUDUUUUUU";
const n = steps.length;

console.log(countingValleys(n, steps));
