/**
 * @param {number} num
 * @return {number}
 */
  var minimumSum = function(num) {
    const array = num.toString().split('')
    
    array.sort((a, b) => a - b)
    
    return Number(array[0] + array[2]) + Number(array[1] + array[3])
};