// Complete the countTriplets function below.

// input 1 2 2 4

// output 0 1 3 and   0 2 3
function countTriplets(arr, r) {
  let hashes = {}
  // store elements so you can get index
  for (var i=0;i<arr.length;i++){
    let val = arr[i]
    // add this index to the array
    if (hashes[val]) hashes[val].push(i)
    else {hashes[val]=[i]}
  }

  // start with first number, print out all triplets that use it
  let returnArr = []
  let uniqueArr = arr.filter(onlyUnique)
  for (var j=0;j<uniqueArr.length;j++){
    let num = uniqueArr[j]
    let num2 = num * r
    let num3 = num * r * r
    //if the hashes for squares and 
    if (hashes[num2] && hashes[num3]){

      // we have a triplet. Print it out
      // get indices of j

      for (var a=0;a<hashes[num].length;a++){
        for (var b=0;b<hashes[num2].length;b++){
          for (var c=0;c<hashes[num3].length;c++){
            let aIndex = hashes[num][a]
            let bIndex = hashes[num2][b]
            let cIndex = hashes[num3][c]
            // increment indexes by 1
            returnArr.push([aIndex,bIndex,cIndex])
            
          }
        }

      }
    }
  }
  console.log(returnArr)

  return returnArr.length
}

function onlyUnique(value, index, self){
  return self.indexOf(value) == index
}

countTriplets([1 ,3, 9, 9, 27, 81],3)