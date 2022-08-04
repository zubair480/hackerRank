// This is my first challenge on HackerRank.

function plusMinus(arr) {
  let n = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < n; i++) {
    if (n > 0) {
      positive++;
    } else if (n < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  let pos = positive / n;
  let neg = negative / n;
  let zer = zero / n;

  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
