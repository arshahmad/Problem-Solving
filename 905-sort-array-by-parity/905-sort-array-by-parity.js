/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const e = nums.filter(num => num%2 === 0).sort((a,b) => a-b);
    const o = nums.filter(num => num%2 !==0).sort((a,b) => a-b);
    return e.concat(o);
};