
let memo = []
function nth_fib(n){
  if (memo[n]) return memo[n]
  if (n==0) return 0
  if (n==1) return 1
  memo[n] = nth_fib(n-1) + nth_fib(n-2)
  return memo[n]
}


 var ans =nth_fib(300)
 console.log(ans)