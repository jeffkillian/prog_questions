//A magic index in an array A[e... n-1] is defined to be an index
// such that A[ i] = i. Given a sorted array of distinct integers, 
//write a method to find a magic index, if one exists, in array A.

var testIndex = [-5,-4,-3,-2,1,2,6,10,12]
var newArr =[-10, -5, 0, 13, 74]


// function findIndex(array){
//   let index = 0;
//   while (array[index]<=index){
//     if (array[index] == index) return index
//     index = Math.max(index+1,array[index])
//   }
//   return -1

//   // if we get here, array[index] is greater than index, it will never be less. dont' do anything

// }

function findIndexBinary(array, low, high){

  // base case
  if (array[low] == low) return low
  if (array[high] == high) return high
  // first check the middle, see if it is lower or higher than index
  let midIndex = Math.floor(high-low/2)
  if (array[midIndex]< midIndex){
    return findIndexBinary(array, midIndex+1, high)
  }else if (array[midIndex]>midIndex) {
    return findIndexBinary(array,low, midIndex-1)
  }else {
    // we are equal
    return midIndex
  }
    // if lower, we want to look at items to right
    // if higher, we want to look at items to left

}

var ans = findIndexBinary(testIndex,0,testIndex.length-1)
// var ans = findIndex(newArr)
console.log(ans)