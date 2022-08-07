function diagonalDifference(arr) {
  // We will start from left to right diagonal (diagonal 1)
  // and from right to left diagonal(diagonal2)
  let diag1 = 0;
  let diag2 = 0;
  let arrLength = arr.length - 1;
  //   arrLength will help to get second diagonal
  for (let i = 0; i < arr.length; i++) {
    // As it is a two dimensional array, both array index and array value will be added
    diag1 += arr[i][i];
    // array 2 will be subtracted and one value of array as well.
    diag2 += arr[i][arrLength];
    arrLength--;
  }
  //   Math.abs() will return absolute (positive) value of the difference
  return Math.abs(diag1 - diag2);
}
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
