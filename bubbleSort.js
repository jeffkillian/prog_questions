

function bubbleSort(array){
  var swapOccurred = false
  // for index 0 through end-1
  for (var j=0;j<array.length-1;j++){
    let first=array[j]
    let second = array[j+1]
    if (first>second){
      array[j]= second
      array[j+1]= first
      swapOccurred = true
    }
  }

  if (swapOccurred) return bubbleSort(array)
  return array
  // compare those values
  // swap if wrong
  // if no swaps occurred, return array


}
let array = [5,1,6,79,10,8]
console.log(bubbleSort(array))