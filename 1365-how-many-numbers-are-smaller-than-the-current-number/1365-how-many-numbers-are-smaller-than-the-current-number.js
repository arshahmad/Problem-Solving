/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const s = [...nums].sort((a, b) => a - b);

return nums.map((value) => s.indexOf(value));
};