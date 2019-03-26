// given one string and another determine if string one is a subsequence of string 2


function isSubsequence(small, bigger){
  // for each character, get index of charact
  let stringToSearch = bigger
  for (let i =0;i<small.length;i++){
    let sChar = small[i]
    let locInBigger = stringToSearch.indexOf(sChar)
    if (locInBigger == -1) return false
    stringToSearch = stringToSearch.substring(locInBigger+1)
  }

  return true

}

console.log(isSubsequence("bat","jiasktboadaddbayt"))