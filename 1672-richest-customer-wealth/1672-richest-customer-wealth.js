/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max.apply(null, accounts.map(account => {
        return account.reduce((p,c) => p+c, 0)
    }))
};