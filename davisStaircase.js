//Complete the stepPerms function in the editor below. 
//It should recursively calculate and return the integer number of ways 
//Davis can climb the staircase, modulo 10000000007.


// start with 4, see if we can get pattern
/*
1 1 1 1
1 1 2
1 2 1
2 1 1
2 2
3 1
1 3

1 1 1
1 2
2 1
3

1 1
2

1
*/
let memo = {}
function stepPerms(n){
  return stepPermsHelper(n) % 10000000007
}

function stepPermsHelper(n) {
  if (memo[n]) return memo[n]
  if (n == 1) return 1
  if (n == 2) return 2
  if (n == 3) return 4
  memo[n] = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)
  return memo[n]

}


console.log(stepPerms(5))
