/*

Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n. Determine the maximum value obtainable by cutting up the rod and selling the pieces. For example, if length of the rod is 8 and the values of different pieces are given as following, then the maximum obtainable value is 22 (by cutting in two pieces of lengths 2 and 6)
*/

let prices = [3  , 5,   8 ,  9 , 10,  17 , 17 , 20]


// fillin values as we visit
let vals = [0]

// n is initial length
function cutRodPrice(n){
  // for each place you can cut it, cut it there and determine the max price with that cut
  // base case
  if (n<=0){
    return 0
  }
  // want to return the max of a cut at any given place, 
  // which is cost of cut plus max of rest of rod

  // i is cut index
  // using dynamic programming
  // store the values starting at 0, then we can just use previous values 
  for (var i=1;i<=n;i++){
    let maxVal = 0  // reset max value at a given index
    for (var j=0;j<i;j++){
      // the max Value for a given i
      maxVal = Math.max(maxVal, prices[j] + vals[i-j-1])
    }
    vals[i]= maxVal
  }

  return vals[n]





}

console.log(cutRodPrice(8))