// input 1,2,3,4
function rotateArray(originalArray, shift){
  let inputLength = originalArray.length
  let newArray = [...originalArray]
  // rotate array by n
  // have to add the right amount
  // add the right amount of shifts to the array
  // add the right amount of arrays
  let numToAdd  = Math.ceil(shift/originalArray.length)
  for (var i=0;i<numToAdd;i++){
    // add it on as many times as you need so it's long enough
    newArray = [...newArray, ...originalArray]
  }
  return newArray.slice(shift,shift+inputLength)


}

console.log(rotateArray([1,2,3,4],71))