/*
Complete the function isBalanced in the editor below. It must return a string: YES if the sequence is balanced or NO if it is not.
isBalanced has the following parameter(s):
*/


function isBalanced(string){
  let expectedEndings = []
  for (var i=0;i<string.length;i++){
    let char = string[i]
    // add the opposite to the stack
    switch(char){
      case "(":
        expectedEndings.push(")")
        break
      case "{":
        expectedEndings.push("}")
        break
      case "[":
        expectedEndings.push("]")
        break
      default:
        let lastEnding = expectedEndings.pop()
        if (lastEnding!=char){
          return false
        }
    }
      
  }
  return expectedEndings.length == 0
}

//console.log(isBalanced("{[(])}")) //no
console.log(isBalanced("{[()]}")) // yes