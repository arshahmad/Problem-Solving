/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b) => {
        return a-b
    })

    let t = []
    let result = []

    function backtracking(nums, t) {
        if(nums.length === 0) {
            result.push([...t])
            return
        }
        
        for(let i=0; i<nums.length; i++) {
            if(i !== 0 && nums[i] == nums[i-1]) continue
            
            t.push(nums[i])
            nums.splice(i, 1)
            backtracking(nums, t)
            nums.splice(i, 0, t.pop())
        }
    }
    backtracking(nums, t)
    return result
};