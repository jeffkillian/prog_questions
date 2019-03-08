//A string is said to be a child of a another string if it can be formed
// by deleting 0 or more characters from the other string. 
// Given two strings of equal length, what's the longest string that can be 
//constructed such that it is a child of both?


// Complete the commonChild function below.
function commonChild(s1, s2) {

  let c = new Array(s1.length+1)
// construct matrix
 for (var j=0;j<s1.length+1;j++){
   let insideArr = new Array()
   for (var i=0;i<s1.length+1; i++){
     insideArr.push(0)
   }
   c[j]=insideArr
 }

// fill in values
for (var s1Idx=0;s1Idx<s1.length;s1Idx++){
  for (var s2Idx=0;s2Idx<s2.length;s2Idx++){
    let s1Char = s1[s1Idx]
    let s2Char = s2[s2Idx]
    if (s1Char == s2Char){
      c[s2Idx+1][s1Idx+1] = c[s2Idx][s1Idx]+1
    }else{
      c[s2Idx+1][s1Idx+1] = Math.max(c[s2Idx][s1Idx+1],c[s2Idx+1][s1Idx])
    } 
  }
}

// compute max length
return c[s1.length][s2.length]
  

}


let ans = commonChild("HARRY", "SALLY")

console.log(`Answer is: ${ans}`)
