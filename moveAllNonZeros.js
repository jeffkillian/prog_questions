//Given an array of ints = [6, 4, 0, 5, 0, 0, 0, 1, 0] move.
// all non zero numbers to the left and zeros to the right
let ints = [6, 4, 0, 5, 0, 0, 0, 1, 0]

function swapArrayInPlace(arr){
  let lIndex = 0
  let rIndex = arr.length-1

  while (lIndex < rIndex) {
    while(arr[lIndex] !=0){
      lIndex++
    }
    while(arr[rIndex]==0){
      rIndex--
    }

    if (lIndex >= rIndex) break
    // swap them
    var temp = arr[lIndex]
    arr[lIndex] = arr[rIndex]
    arr[rIndex] = temp
    lIndex++
    rIndex--

  // swap two indexes
  // increment each value by one
  }
  return arr
}


 

  // stop when lINdex == rIndex


//Simple way, with unlimited space
// function swapArray(arr){
//   // lIndex = 0
//   // rIndex = array.length-1
//   // go through array element by element
//   // if 0, put into another array, pop out of this array
//   let zeroArr = []
//   for (var i=0;i<arr.length;i++){
//     val = arr[i]
//     if (val == 0) zeroArr.push(0)

//   }

//   arr = arr.filter(element => {return element!=0})
//   return [...arr,...zeroArr]
// }

const ans = swapArrayInPlace(ints)
console.log(ans)