function encryption(s) {
  const removeSpace = s.split(" ").join("");
  const L = removeSpace.length;
  const sqr = Math.sqrt(L);
  let rows = Math.floor(sqr);
  let cols = Math.ceil(sqr);

  if (rows * cols < L) {
    rows < cols ? rows++ : cols++;
  }

  let i = 0;
  const mat = [];

  while (i < rows) {
    const row = removeSpace.slice(i * cols, i * cols + cols).split("");
    mat.push(row);
    i++;
  }

  const arrayColumn = (arr, n) => arr.map((x) => x[n]);

  let str = "";
  for (let i = 0; i < cols; i++) {
    str += arrayColumn(mat, i).join("");
    str += " ";
  }

  str = str.trim();

  return str;
}

const s = "chillout";

console.log(encryption(s));
