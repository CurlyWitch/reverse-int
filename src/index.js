module.exports = function reverse (n) {
  n = Math.abs(n);
  let stringN = String(n);
  let splitStr = stringN.split("");
  let reverseArray = splitStr.reverse();
  let joinArray = reverseArray.join("");
  let result = +joinArray;
  return result;
}
