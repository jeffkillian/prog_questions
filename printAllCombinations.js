

let inputArray = [1,2,3]
// prints all combinations of a given set that are of size r
function printAllCombinations(r) {
  let data = new Array(r)
  combinationUtil(r, 0, data, 0); 
}

/* arr[]  ---> Input Array 
   n      ---> Size of input array 
   r      ---> Size of a combination to be printed 
   index  ---> Current index in data[] 
   data[] ---> Temporary array to store current combination 
   i      ---> index of current element in arr[]     */
function combinationUtil(r,dataIndex,data,arrayIndex){

  // aka if the current index in data is r, we are good to print.
  if (dataIndex == r){
    console.log(data)
    return
  }

  // I is the current index in array. don't want this too big.
  if (arrayIndex >= inputArray.length) return
  

  data[dataIndex] = inputArray[arrayIndex]
  // current is included
  combinationUtil(r,dataIndex+1,data,arrayIndex+1)

  // index doesn't change so when we go in we replace the value
  combinationUtil(r,dataIndex,data,arrayIndex+1)
}



function printAllCombinationsBinarySolution(){
  let inputArray = [1,2,3]
  //binary numbers with that many digits
  for (var i=0;i<2**(inputArray.length);i++){
    // get binary string
    let binaryString = (i >> 0).toString(2)
    binaryString = binaryString.padStart(inputArray.length,"0")
    // let bitCount = (binaryString.match(/1/g) || []).length;
    // if (bitCount !=3) continue
    // print out all combinations where 1 is true
    // for every character in binary string that is 1, get the index
    let newElements = inputArray.filter((inputArray,index)=> {
      return binaryString[index]=="1"
    })
    console.log(newElements)
  }
}

//printAllCombinations(2)
printAllCombinationsBinarySolution()