/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    items.forEach(item => {
        if(ruleKey === 'type') {
            if(item[0] === ruleValue) {
                count++;
            }
        } else  if(ruleKey === 'color') {
            if(item[1] === ruleValue) {
                count++;
            }
        } else {
            if(item[2] === ruleValue) {
                count++;
            }
        }
    });
    return count;
};