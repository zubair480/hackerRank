// Super Digit

function superDigit(n, k) {
  n = n.split("").reduce((a, b) => +a + +b) * k + "";
  //   First find the sum of number n and multiply it by the value of k
  return n.length > 1 ? superDigit(n, 1) : n.charAt(0);
  //   If the length of n is greater than 1, we call the function again with the value of n and 1.
}
console.log(superDigit("1246546546543", 15));
