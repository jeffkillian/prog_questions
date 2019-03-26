// find duplicate integers in an array

function findDupes(array){
  // given an array, find any dupes and let us know
  let existingValues  = {}
  for (var i=0;i<array.length;i++){
    let val = array[i]
    if (existingValues[val]){
      console.log(`${val} is duplicated`)
    }else {
      existingValues[val] = true
    }
  }


}


findDupes([1,1,2,3,4,5,6,3,7,8,1,9])