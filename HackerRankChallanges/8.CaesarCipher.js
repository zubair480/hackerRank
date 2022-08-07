// caesarCipher

function caesarCipher(s, k) {
  //   s is string and k is the number

  k = k % 26;
  let lowerCaseStr = s.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = "";

  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];
    if (currentLetter == "-" || currentLetter == " ") {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + k;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (s[i] == s[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    } else newStr += alphabet[newIndex];
  }
  return newStr;
}
console.log(caesarCipher("middle-Outz", 3));
