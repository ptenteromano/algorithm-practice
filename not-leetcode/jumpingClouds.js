// Phil Tenteromano

// given a game, can only jump from one cloud to the very next (+1) or +2 away.
// Some clouds are bad clouds, cannot jump to them
// given a binary array of good and bad clouds (bad === 1)
// return minimum # of jumps to win game
// first and last cloud are always good

// O(n) where n is number of clouds in the game
function jumpingOnClouds(c) {
  let jumps = 0;
  const finish = c.length - 1;

  const checkDone = (pos) => pos === finish;

  let bigJ;
  let lilJ;

  for (let i = 0; i < c.length; i++) {
    bigJ = i + 2;
    lilJ = i + 1;

    if (c[bigJ] === 0) {
      jumps += 1;
      if (checkDone(bigJ)) return jumps;
      i += 1; // increment only one (for loop will increment more)
    } else if (c[lilJ] === 0) {
      jumps += 1;
      if (checkDone(lilJ)) return jumps;
    }
  }
}

//                 1     2     3     4     5     6
const Clouds = [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0];

console.log(jumpingOnClouds(Clouds)); // 6 jumps

// another version where where jump value is given
// energy starts at 100, each k jump is -1 energy
// if land on a bad cloud, -2 extra energy
// if the end of the clouds is reached, jump back home to 0 index

function jumpingOnCloudsWithEnergy(c, k) {
  let energy = 100;
  let index = 0;
  let finished = false;

  while (!finished) {
    if (index + k >= c.length) index = 0;
    else index += k;

    energy -= 1;
    if (c[index] === 1) energy -= 2;

    if (index === 0) finished = true;
  }

  return energy;
}

console.log(jumpingOnCloudsWithEnergy(Clouds, 2)); // 86 energy leftover
// -3, -3, -3, -1, -3, -1 = -14
// 100 = 14 = 86
