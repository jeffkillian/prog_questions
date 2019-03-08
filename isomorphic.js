// Two strings str1 and str2 are called isomorphic 
//if there is a one to one mapping possible for every 
//character of str1 to every character of str2. And all 
//occurrences of every character in ‘str1’ map to same character in ‘str2’
function areIsomorphic(a,b){

  if (a.length != b.length) return false
  const aToB = new Map()
  for (let charIdx in a){
    var aChar = a[charIdx]
    var bChar = b[charIdx]
    // if letter not in it, add it
    if (!aToB.has(aChar)) {
      aToB.set(aChar, bChar)
    }else {    // otherwise verify that the letter corresponding is the same as before
      if (aToB.get(aChar)!= bChar) return false
    }
  }

  return true

}


let a="aab"
let b = "xyz"
var ans = areIsomorphic(a,b)
console.log(ans)