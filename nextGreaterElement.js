// given an array, find the next greater element for each

function nge(input){
  let stack = []
  stack.push(input[0])
  let ans = {}

  for (var i=1;i<input.length;i++){
    // push to stack while you are less then the value in the stack
    let val = input[i]

    while (stack.length !=0 && val>stack.last()){
      ans[stack.last()]=val // This value is greater than the top, so we push it
      stack.pop()
    }
    stack.push(input[i])

  }


  return ans
}

Array.prototype.last = function(){
  if (this.length == 0) return -1
  return this[this.length-1]
}


let inputArray = [2,5,1,3,7] // -> 5,7,3,7,none
console.log(nge(inputArray))