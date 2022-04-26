/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
   let a = [];
    for(i=0; i<indices.length; i++) {
        a[i] = s.charAt(indices.indexOf(i))
    }
    return a.join('');
};