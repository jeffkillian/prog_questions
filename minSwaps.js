// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let minSwaps = 1
  // loop through elements
  for (var i = 0; i < arr.length; i++){
      const targetValue = i+1
      if (arr[i] == targetValue) continue
      // It's not the right value
      // we want to swap it with the targetValue, must find that
      // find the value
      for (var inFrontIdx = i + 1; inFrontIdx < arr.length; inFrontIdx++){
          if (arr[inFrontIdx] == targetValue) {
              // SWAP 'EM
              let temp = arr[inFrontIdx]
              arr[inFrontIdx] = arr[i]
              arr[i] = temp
              break // break out of this for loop. We found it and swapped it
          }
      }

      // sawp it
  }
  console.log(arr)

}

var ans = minimumSwaps([4,3,7,1,2,6,5])
console.log(ans)