/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let oddLength = 1
    let total = 0
    
    while(arr.length >= oddLength) {
        for(let i=0; i<arr.length - oddLength + 1; i++) {
            for(let j=i; j<oddLength + i; j++) {
                total += arr[j]
            }
        }
        
        oddLength += 2
    }
    
    return total
};