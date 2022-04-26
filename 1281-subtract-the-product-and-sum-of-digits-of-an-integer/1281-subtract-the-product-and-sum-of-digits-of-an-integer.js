/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const s = n.toString().split('').reduce((p,c) => Number(p)+Number(c), 0);
    const m = n.toString().split('').reduce((p,c) => Number(p)*Number(c), 1);
    return m-s;
};