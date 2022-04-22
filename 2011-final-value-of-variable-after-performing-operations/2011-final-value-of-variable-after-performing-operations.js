/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X=0;
    const result = operations.map((o) => {
      
      if(o === '--X') {
          X=X-1
      } else if(o === 'X--') {
         X=X-1
      } else {
        X=X+1;
      }
      return X;
    })
    return result[operations.length-1];
    
};