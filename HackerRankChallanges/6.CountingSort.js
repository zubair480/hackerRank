// Counting Sort 1

function countingSort(arr) {
  // fill method is used to overwrite the array (value,start,end)
  // if start end is not defined all array is over written.
  let counts = Array(100).fill(0);
  arr.forEach((item) => {
    ++counts[item];
  });
  return counts;
}
console.log(countingSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
