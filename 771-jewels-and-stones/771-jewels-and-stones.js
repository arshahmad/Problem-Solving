/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let c = 0;
  return Math.max(...stones.split('').map(stone => {
    if(jewels.includes(stone)) {
      c++;
    }
    return c;
  }))
};