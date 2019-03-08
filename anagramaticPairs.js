/*
Two strings are anagrams of each other if the letters of one string can be rearranged 
to form the other string. Given a string, find the number of pairs of substrings of the 
string that are anagrams of each other.

*/


// Complete the sherlockAndAnagrams function below.

// function sherlockAndAnagrams(s) {
//   let count = 0;

//   let found = {}
//   // i is the size of the window we are looking at
//   for (let i=1;i<s.length;i++){

//     for (let j =0;j+i<=s.length;j++){
//       let substring = s.substring(j,j+i)
//       substring = [...substring].sort().join()
//       if (found[substring]) count++

//     }
//   }
// }


function sherlockAndAnagrams(s) {
  let anagramCount = 0
  let foundItems = {}

  // generate all possible substrings
  for (let startIdx=0;startIdx<s.length;startIdx++){
    for (let endIdx =startIdx+1;endIdx<s.length+1;endIdx++){
      let subString = s.slice(startIdx,endIdx)
      let sortedString = [...subString].sort().join("")
      if (foundItems[sortedString]){
        anagramCount += foundItems[sortedString]
        foundItems[sortedString]++
      } 
      else{
        foundItems[sortedString] = 1
      }
      
      // see if it already exists in dict. If so, anagramCount++
      // otherwise, add it to dict
    }
  }
  return anagramCount

 }
let ans = sherlockAndAnagrams(`kkkk`)
console.log(ans)
