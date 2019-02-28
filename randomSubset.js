/*
Random Set: Write a method to randomly generate a set of mintegers
 from an array of size n. Each element must have equal probability of being chosen.
 */

const inputArray = [1,2,3,4,5,6,7]

function getRandomIndex(length){
  return Math.floor(Math.random()*8)
}


function generateRandomSet(size, inputArr){
  // duplicate array so we don't modify original
  let returnArr = []
  while(returnArr.length < size){
    let randomIndex = getRandomIndex(inputArr.length) // Will change as we splice elements out
    returnArr = returnArr.concat(inputArr.splice(randomIndex,1))
    debugger
  }
  return returnArr
  

}


let retVal = generateRandomSet(4,inputArray)
console.log(retVal)