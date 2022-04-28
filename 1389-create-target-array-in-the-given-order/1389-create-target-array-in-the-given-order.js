/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let r=[]
    for(let number of nums){
        let indx = index.shift();
        r.splice(indx,0,number)
    }
    return r;
};