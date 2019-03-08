
function getLongestSubSequence(s1,s2) {
  var c = new Array(s1.length+1)

  // Initialize the rows
  for (var m=0; m < s1.length+1; m++){
    c[m] = new Array(s2.length+1)
    for (var n=0; n<s2.length+1; n++){
      c[m][n] = 0;
    }
  }

  
  // For each letter in first
  for (let s1Idx = 0; s1Idx<s1.length; s1Idx++) {
    for (let s2Idx = 0; s2Idx< s2.length; s2Idx++) {
      let arrS1Index = s1Idx+1
      let arrS2Index = s2Idx+1
      if (s1[s1Idx] == s2[s2Idx]) c[arrS1Index][arrS2Index] = c[arrS1Index-1][arrS2Index-1]+1;
      else{
        c[arrS1Index][arrS2Index] = Math.max(c[arrS1Index-1][arrS2Index], c[arrS1Index][arrS2Index-1]);
      }
    }
  }
   printArray(c)
   printString(c,s1,s2)
}

//getLongestSubSequence("AGGTAB","GXTXAYB") // should be MJAU

getLongestSubSequence("HARRY","SALLY")

function printArray(array){
  for (var j=0;j<array.length;j++){
    console.log(array[j])
  } 
}

function printString(array, s1, s2) {
  // Start with last cell
  let returnVal = ""
  var x=array.length-1;
  console.log("array of 0 is")
  console.log(array[0])
  var y=array[0].length-1;
  while (x>=1 && y>=1){
    const val = array[x][y]
    const leftVal = array[x-1][y]
    const topVal = array[x][y-1]
    const upperLeftVal = array[x-1][y-1]
    // if equal
    console.log(`X:${x}, Y:${y}`)
    if (leftVal==topVal) {
      if (upperLeftVal<val){
        returnVal = s1[x-1] + returnVal
      }
      x--
      y--
    }else {
      if (leftVal >topVal) x--
      else y--
    }
  }
  console.log(`returning final result: ${returnVal}`)

}