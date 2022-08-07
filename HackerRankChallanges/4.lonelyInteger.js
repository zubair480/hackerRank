// Lonely Integer

function lonelyInteger(arr) {
  // We simply use the XOR operator to find the lonely integer
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}

console.log(lonelyInteger([1, 1, 2, 3, 3]));
