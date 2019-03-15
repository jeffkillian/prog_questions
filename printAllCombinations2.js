// given an array, print all combinations of size r

let array= [1,2,3,4,5]

function printAllCombinations(r){
  let data = new Array(r)

  combinationHelper(r,0,data,0)


}

function combinationHelper(r,dataIndex,data,arrayIndex){

  // if we have the right amount of elements, do this
    if (dataIndex == r){
      console.log(data)
      return
    }
    // if we've gone too far, return
    if (arrayIndex >=array.length) return

    // consider those combinations with and without this data
    // bump data
    data[dataIndex] = array[arrayIndex]
    // we added it in, so bump dataindex and array index
    combinationHelper(r,dataIndex+1,data,arrayIndex+1)

    // while we DID add it in, we don't care, because we aren't changing dataIndex
    // therefore, whatever is in arrayIndex is going to overwrite it
    combinationHelper(r,dataIndex,data,arrayIndex+1)

}


printAllCombinations(3)