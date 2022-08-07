// Tower breakers

function towerBreakers(n, m) {
  // If tower height (m) is zero or even player two will win
  if (m == 0 || n % 2 == 0) {
    return 2;
    // Player one will win in all the other cases.
  } else {
    return 1;
  }
}
console.log(towerBreakers(3, 0));
