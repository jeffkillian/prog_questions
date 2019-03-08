
/*
ark and Jane are very happy after having their first child. Their son loves toys,
 so Mark wants to buy some. There are a number of different toys lying in front of him,
  tagged with their prices. Mark has only a certain amount to spend, and he
 wants to maximize the number of toys he buys with this money.

*/
function maximumToys(prices, k) {
 // sort prices
 // add up smallest prices until you go over.
  let runningTotal = 0
  let totalItems = 0
  prices.sort((a,b) => {
    return a-b
  })
  for (var j=0;j<prices.length;j++){
    let price = prices[j]
    if (runningTotal+price>k) return totalItems
    totalItems++
    runningTotal = runningTotal+price
  }

  return totalItems

}
let prices = [1, 12, 5, 111, 200, 1000, 10]
let ans = maximumToys(prices,50)
console.log(ans)