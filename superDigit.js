/*
Complete the function superDigit in the editor below. It must return the calculated super digit as an integer.

superDigit has the following parameter(s):

n: a string representation of an integer
k: an integer, the times to concatenate  to make 
*/


function superDigit(n,k){
  // base case
  if (n.length == 1) return n
  // n will be longer. Must add up all digits

  let numbers = n.split('').map(number => { return parseInt(number) })
  let ans = numbers.reduce((num,sum) => {
    return sum += num
  })
  ans = ans * k   // then multiply sum of digits by k (but only matters the first time)
  // then run that number through superDigit
  return superDigit(ans.toString(),1)
}

let solution = superDigit("9875",4)
console.log(solution)

