// This is my first challenge on HackerRank.

function plusMinus(arr) {
  // First take initial values of the numbers to be calculated zero.
  let n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < n; i++) {
    // Check if number is positive or negative or zero.
    if (n > 0) {
      positive++;
    } else if (n < 0) {
      negative++;
    } else {
      zero++;
    }
    // If number is positive, negative or zero, increment the respective counter.
  }
  // Divide the counters by the length of the array to get the percentage.
  let pos = positive / n;
  let neg = negative / n;
  let zer = zero / n;
  // To print the percentage, we need to convert the number to string.  || \n is used to print on new line.
  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
