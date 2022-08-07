// Grid Challenge
function gridChallenge(grid) {
  // Write your code here
  let cur = [];
  // cur is an empty array
  for (let i = 0; i < grid.length; i++) {
    let text = grid[i].split("").sort();
    // We would split each item of grid and sort it.
    cur.push(text);
    // Push sorted array in cur array
  }
  let column = cur[0].length;
  for (let j = 0; j < cur.length - 1; j++) {
    for (let z = 0; z < column; z++) {
      if (cur[j][z] > cur[j + 1][z]) {
        // if current array is bigger than next array.
        return "NO";
      }
    }
  }
  return "YES";
}
console.log(gridChallenge(["abrcd", "efgrh", "irjkl", "mnorr"]));
