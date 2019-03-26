/**
 * 
 * You are given coins of different denominations and a total amount of money amount. 
 * Write a function to compute the fewest number of coins that you need to make up that amount. 
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * 
 * 
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  coins = coins.sort((a,b) => {return a-b})
  // use the highest coin until we can't anymore,
  // then use next highest 
  return coinHelper(coins,amount,0,0)
  
};

function coinHelper(coins,targetAmount,coinsUsed,currAmount){
  if (currAmount == targetAmount) return coinsUsed
  if (coins.length == 0 ) return -1
  
  let lastCoinAmount = coins[coins.length-1]
  // add the highest coin assuming it's not over.
  if (currAmount+lastCoinAmount<=targetAmount){
      coinsUsed++
      currAmount+=lastCoinAmount
      return coinHelper(coins,targetAmount,coinsUsed,currAmount)
  }
  // the last coin is too high
  coins.pop()
  return coinHelper(coins,targetAmount,coinsUsed,currAmount)
  
}
let ans = coinChange([1,2,5,10],18)
console.log(ans)