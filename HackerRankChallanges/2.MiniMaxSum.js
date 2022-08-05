// Mini Max Sum

function miniMaxSum(arr) {
  // .reduce method is used to find sum of an array.
  let sum = arr.reduce((acc, curVal) => {
    return acc + curVal;
  });

  // finding minimum and maximum in an array using min and max methods.
  let min = sum - Math.max(...arr);
  let max = sum - Math.min(...arr);
  console.log(min, "", max);
}
miniMaxSum([1, 2, 3, 4, 5]);
