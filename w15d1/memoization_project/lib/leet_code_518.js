// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// first get all possible combinations, nonrepeating means leave out bigger coins

function coinCombos(amount, coins) {
    let memo = Array(amount + 1).fill(0);

    // bottom is 1;
    memo[0] = 1;

    // iterate through all coins,
    for (let coin of coins){
        // iterate through all amounts
        for (let i = 0; i <= amount; i++) {
            if (i >= c) {
                memo[i] += memo[i - coin];
            }
        }
    }

    return memo[amount];
}