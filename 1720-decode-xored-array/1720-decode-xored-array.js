/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  let a=[first];
    for(i=0; i<encoded.length; i++) {
      a.push(a[i]^encoded[i]);
    }
  return a;
};
