/*
You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
INF - Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.
Fill each empty room with the distance to its nearest gate. If it is impossible to reach a Gate, that room should remain filled with INF
*/

const wallsAndGates = (grid) => {
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const GATE = 0;
  const queue = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++)
      if (grid[row][col] === GATE) queue.push([row, col]);
  }

  let currentQueueBatch = queue.length;
  let distance = 1;

  while (queue.length) {
    if (currentQueueBatch <= 0) {
      currentQueueBatch = queue.length;
      distance++;
    }

    let [row, col] = queue.shift();
    currentQueueBatch--;

    for (let dir of directions) {
      let [r, c] = dir;

      if (grid[row + r] === undefined) continue;
      if (grid[row + r][col + c] === undefined) continue;
      if (grid[row + r][col + c] <= 0) continue;
      if (grid[row + r][col + c] <= distance) continue;

      queue.push([row + r, col + c]);

      grid[row + r][col + c] = Math.min(grid[row + r][col + c], distance);
    }
  }

  return grid;
};

const input = [
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
];
const expect = [
  [3, -1, 0, 1],
  [2, 2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3, 4],
];

const result = wallsAndGates(input);
console.log({ result });
let passed = true;

for (let row = 0; row < expect.length; row++) {
  for (let col = 0; col < expect[0].length; col++)
    if (result[row][col] !== expect[row][col]) {
      passed = false;
      console.log("FAILED");
    }
}
if (passed) console.log("SUCCESS");
