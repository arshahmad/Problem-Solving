/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
  let result = 0;
  let r = 0;
  let l = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") r++;
    if (s[i] === "L") l++;
    if (r === l) result++;
  }
  return result;
};