/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSum = [];
    runningSum[0] = nums[0];
    for(i=1; i<nums.length; i++) {
        runningSum[i] = nums[i] + runningSum[i-1]
    }
    
    return runningSum;
    
};