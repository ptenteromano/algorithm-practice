const testMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

class Matrix {
  constructor(numRow, numCol) {
    // this.mat = new Array(numRow).fill(new Array(numCol));
    this.mat = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
  }

  size() {
    return [this.mat.length, this.mat[0].length];
  }

  directions() {
    return [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
  }

  setSeenMat() {
    const [rows, cols] = this.size();
    return new Array(rows).fill(0).map(() => new Array(cols).fill(false));
  }

  traversalDfs() {
    const mat = this.mat;
    const seen = this.setSeenMat();

    const results = [mat[0][0]];
    seen[0][0] = true;
    let row = 0,
      col = 0,
      done = false;

    while (!done) {
      done = true;
      for (let dir of this.directions()) {
        let [r, c] = dir;
        if (
          mat[row + r] === undefined ||
          mat[row + r][col + c] === undefined ||
          seen[row + r][col + c]
        )
          continue;
        row += r;
        col += c;
        seen[row][col] = true;
        results.push(mat[row][col]);
        done = false;
        break;
      }
    }

    return results;
  }

  traverseBfs() {
    const mat = this.mat;
    const seen = this.setSeenMat();

    const results = [mat[0][0]];
    seen[0][0] = true;
    let row = 0,
      col = 0;
    const queue = [[row, col]];

    while (queue.length) {
      [row, col] = queue.shift();

      for (let dir of this.directions()) {
        let [r, c] = dir;

        if (
          mat[row + r] === undefined ||
          mat[row + r][col + c] === undefined ||
          seen[row + r][col + c]
        )
          continue;
        seen[row + r][col + c] = true;
        results.push(mat[row + r][col + c]);
        queue.push([row + r, col + c]);
      }
    }

    return results;
  }
}

mat = new Matrix();
dfs = mat.traversalDfs();
bfs = mat.traverseBfs();

console.log({ dfs, bfs });
