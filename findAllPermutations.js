//Given a smaller string s and a bigger string b, 
//design an algorithm to find all permutations of the shorter string within the 
//longer one. Print the location of each permutation.


// Get length of smaller string
// look that many characters at a time
// take out the characters as you use them


function findAllPermutations(s, b) {
  const returnIndexes  = []
  // Get length of smaller string
  const sLength = s.length;
  for (var i=0;i<=b.length-sLength;i++) {
    let bSubstring = b.substring(i,i+sLength)
    for (var sLengthIdx=0; sLengthIdx < sLength; sLengthIdx++){
      var sChar = s[sLengthIdx]
      var location = bSubstring.indexOf(sChar) // greedily finds first instance
      // Take out the offending character
      if (location > -1) {
        bSubstring = bSubstring.slice(0,location)+ bSubstring.slice(location+1)
      }
      else{
          break// it wasn't found, this isn'ta  good substring. let's go to the next i value as this isn't a good contender 
      }
      if (bSubstring.length == 0) returnIndexes.push(i)// we've removed everything, it's a good one.
    }
 
   
  }
  console.log(returnIndexes)
  return returnIndexes

}
findAllPermutations('abbc','cbabadcbbabbcbabaabccbabc')