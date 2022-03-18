// Phil Tenteromano

// given 5 lanes and a number of horses factorable by 5
// count how many races it takes to get the top 3 horses total

// there is both a brute force and an optimized

const horses = [[], [], [], [], []];
const numHorses = 25; // 25 horses
const numLanes = 5;

// set unique 'power' values for horses - testing arbitrary hierarchy
// 5 arrays of 5 horses
let k = 0;
for (let i = 0; i < numHorses; i++) {
  let num = Math.floor(Math.random() * 10000);
  while (horses[k].includes(num)) {
    num = Math.floor(Math.random() * 10000);
  }
  horses[k].push(num);
  if (horses[k].length === numLanes) {
    k++;
  }
}

// optimized function
function horseRaceOptimized(horses, numHorses, numLanes) {
  const topInEach = [0, 0, 0, 0, 0];
  let finalRace = [];
  const top3 = [];
  let raceCount = 0;

  for (let i = 0; i < Math.floor(numHorses / numLanes); i++) {
    // the first "5 races" - horses[0...4]
    horses[i].sort((a, b) => b - a);
    raceCount++;
    for (let k = 0; k < numLanes; k++) {
      // get best in bracket
      if (topInEach[i] < horses[i][k]) {
        topInEach[i] = horses[i][k];
      }
    }
  }
  // race #6 - sort the best from each bracket
  topInEach.sort((a, b) => b - a);
  raceCount++;

  // fill in the contenders for race #7
  for (let i = 0; i < numHorses / numLanes; i++) {
    let index = topInEach.indexOf(horses[i][0]);
    if (index === 0) {
      finalRace = finalRace.concat(horses[i].slice(1, 3)); // take 1,2 from best bracket
    } else if (index === 1) {
      finalRace = finalRace.concat(horses[i].slice(0, 2)); // take 0,1 from 2nd best bracket
    } else if (index === 2) {
      finalRace = finalRace.concat(horses[i]); // we only want the best of the 3rd bracket
    }
  }

  // race # 7 - take the top 2
  finalRace.sort((a, b) => b - a);
  raceCount++;

  // insert into the top 3
  top3.push(topInEach[0]); // we have the #1 guy
  top3.push(finalRace[0], finalRace[1]); // the 1st & 2nd guy in the lst race are #2, #3

  console.log("The best 3 horses: ", top3);

  return raceCount;
}

console.log(
  "Optimized races: ",
  horseRaceOptimized(horses, numHorses, numLanes)
);
console.log(horses); // for debugging

// console.log("-------");
// BRUTE FORCE -- ignore for now
// writing this out to be most verbose about 5 lanes racing 5 horses === 1 race
function horseRaceBruteForce(horses2d) {
  // reorganize 2d array into 1d array
  let horses = [];
  for (let h = 0; h < horses2d.length; h++) {
    horses = horses.concat(horses2d[h]);
  }

  const top3 = [0, 0, 0];
  let raceCount = 0;

  const filterTop = (top) => {
    top.sort((a, b) => b - a);
    while (top.length > 3) top.pop();
  };

  // first race
  for (let k = 0; k < numLanes; k++) {
    if (!top3.includes(horses[k])) {
      if (horses[k] > top3[0] || horses[k] > top3[1] || horses[k] > top3[2]) {
        top3.push(horses[k]);
      }
    }
  }
  raceCount++;
  console.log;
  // sort and trim top3
  filterTop(top3);

  // remaining 10 races
  let i = numLanes; // start with the 6th horse
  let fillIns;
  while (i < numHorses) {
    fillIns = 0;
    // fill in 2 into the race, sort and elimate bottom 2
    while (fillIns < 2) {
      top3.push(horses[i]);
      fillIns++;
      i++;
    }

    if (fillIns === 2) {
      filterTop(top3);
      raceCount++;
    }
  }

  console.log("Brute force best 3: ", top3);
  return raceCount;
  // debugging
  // const newH = [horses, horses[1], horses[2], horses[3], horses[4]].sort(
  //   (a, b) => a > b
  // );

  // console.log(newH);
}

console.log("Brute force race count: ", horseRaceBruteForce(horses));
