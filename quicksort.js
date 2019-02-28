var testArr=  []
for (var j=0;j<500000;j++){
  testArr.push(Math.floor(Math.random()*1000))
}

function quickSort(array){

  if (array.length == 0) return []
  if (array.length == 1) return array // Base case, just 1
  // pick an element
  let pivotIndex = Math.floor(array.length * Math.random())
  let pivotValue = array[pivotIndex]
  let smallerArray = []
  let biggerArray = []
  for (var i=0;i<array.length;i++){
    if (i == pivotIndex) continue
    const thisVal = array[i]
    if (thisVal <=pivotValue) smallerArray.push(thisVal)
    else biggerArray.push(thisVal)
  }
  return [...quickSort(smallerArray),pivotValue,...quickSort(biggerArray)]
  // partition array into two arrays, those bigger and those smaller. If the same, just put smaller.
 // quicksort the smaller one
}
const start = Date.now()
let answer = quickSort(testArr)
const secondsElapsed = (Date.now()-start)/1000
console.log(`Test took ${secondsElapsed} seconds`)
console.log(answer)