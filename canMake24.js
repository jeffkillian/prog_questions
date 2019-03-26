
// given three integers and the four operations, can they make 24?



function canMake24(integers, operations){

  // if operations.length is 4, run them and return if it is true,
  // otherwise, fill in operations of next one and return true
  if (operations.length == 3){
    if(isEqual(integers, operations, 24)){
      console.log("SUCCESS!")
      console.log("Integers are" +integers)
      console.log("operations are "+ operations)
      return true
    }
    return false
  }

  // we want to return it with all operations for all sets
  
  return canMake24(integers, [...operations, "+"]) ||
        canMake24(integers, [...operations, "-"]) ||
        canMake24(integers, [...operations, "*"]) ||
        canMake24(integers, [...operations, "/"])


}
// note this doesn't work for parenthesis going anywhere
// given integers and operations, computes the value in the order that we do it in
function isEqual(integers, operations, target){
  // ops 0,1,2
  let ans = calculate(integers[0],integers[1],operations[0])
  ans =calculate (ans,integers[2], operations[1])
  ans =calculate (ans,integers[3], operations[2])
  if (ans == target) return true

  //0 2 1
  ans = calculate(integers[0],integers[1],operations[0])
  let lastTwo =calculate (integers[2],integers[3], operations[2])
  ans =calculate (ans,lastTwo, operations[1])
  if (ans == target) return true

  //102
  ans = calculate(integers[1],integers[2],operations[1])
  ans =calculate (integers[0],ans, operations[0])
  ans =calculate (ans,integers[3], operations[2])
  if (ans == target) return true

  //120
  ans = calculate(integers[1],integers[2],operations[1])
  ans =calculate (ans,integers[3], operations[2])
  ans =calculate (integers[0],ans, operations[0])
  if (ans == target) return true


  //201
  ans = calculate(integers[2],integers[3],operations[2])
  let otherAns =calculate (integers[0],integers[1], operations[0])
  ans = calculate (ans,otherAns, operations[1])
  if (ans == target) return true
  //210
  ans = calculate(integers[2],integers[3],operations[2])
  otherAns =calculate (integers[1],ans, operations[1])
  ans = calculate (integers[0],otherAns, operations[0])
  if (ans == target) return true
  return false


}

function calculate(a,b,op){
  switch(op) {
    case "+":
      return a+b
      break
    case "-":
      return a-b
      break
    case "*":
      return a*b
      break
    case "/":
      return a/b
      break
  }

}
canMake24([4,1,8,7],[])
//canMake24([6,1,3,4],[])


