/*
Given weights and values of n items, put these items in a knapsack of
 capacity W to get the maximum total value in the knapsack.
*/
let val= [60, 100, 120]; 
let wt = [10, 20, 30]; 

// there's a DP solution for this too

function knapSack(capacity,  n){

  if (n<0 || capacity == 0){
    return 0
  }

  // if the weight of the nth item is more than capacity, we def don't want to add it in
  if (wt[n]> capacity){
    return knapSack(capacity, n-1) // moves on to the next n
  }

  else {
    return Math.max(
      
      // nth item included
      val[n] + knapSack(capacity-wt[n],n-1),


      //nth item not included
      knapSack(capacity,n-1)


    )
  }



}




// Returns the maximum value that can be put in a knapsack of capacity W 
// int knapSack(int W, int wt[], int val[], int n) 
// { 
//    // Base Case 
//    if (n == 0 || W == 0) 
//        return 0; 
  
//    // If weight of the nth item is more than Knapsack capacity W, then 
//    // this item cannot be included in the optimal solution 
//    if (wt[n-1] > W) 
//        return knapSack(W, wt, val, n-1); 
  
//    // Return the maximum of two cases:  
//    // (1) nth item included  
//    // (2) not included 
//    else return max( val[n-1] + knapSack(W-wt[n-1], wt, val, n-1), 
//                     knapSack(W, wt, val, n-1) 
//                   ); 
// } 


// Start out with n at the end, work backwards
let ans = knapSack(50, wt.length-1)

console.log(ans)
