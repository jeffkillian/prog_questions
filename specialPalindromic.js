let ans = countPalindromes("abcbaba")
console.log(ans);

//Solved, though not best runtime
function countPalindromes(word){
  let specialPalindromeCnt = 0;
  // first get rid of any strings iwth more than two types of characters
  if 

  for (let startIdx = 0; startIdx<word.length; startIdx++) {
    for (let endIdx = startIdx+1;endIdx<word.length+1; endIdx++){
      let testString = word.slice(startIdx,endIdx)
      if (isSpecialPalindrome(testString)) {
        console.log(testString)
        specialPalindromeCnt++
      }
    }

  }
  return specialPalindromeCnt

}

function isSpecialPalindrome(word){
  return allCharsAreSameButMiddle(word) || allCharsAreSame(word)
}

function allCharsAreSameButMiddle(word){
  if (word.length %2 == 0) return false
  const midIndex = Math.floor(word.length/2)
  // take out middle one, check all are the same
  let wordWithoutMiddle = word.slice(0,midIndex)+ word.slice(midIndex+1)
  return allCharsAreSame(wordWithoutMiddle)
}

console.log()



function allCharsAreSame(word){
  let letter = word[0]
  for (var i=0;i<word.length;i++) {
    if (word[i] != letter) return false
  }
  return true
}



