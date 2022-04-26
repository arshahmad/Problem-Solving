/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const r = []
    
    for(let i=0; i<nums.length; i+=2) {
        const frequency = nums[i]
        const value = nums[i+1]
        
        for(let j=0; j<frequency; j++) {
            r.push(value)
        }    
    }
    
    return r
};