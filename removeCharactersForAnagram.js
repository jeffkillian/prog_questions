//Given two strings,  and , that may or may not be of the same length, 
//determine the minimum number of character deletions required to make 
//a and b anagrams. Any characters can be deleted from either of the strings.


function minNumberDeletions2(a,b){
  // get all characters
  let allChars = [...a.split(''), ...b.split('')]
  // filter to those not in a and b
  let charsNotInBoth = allChars.filter(char => {
    return a.indexOf(char) == -1 || b.indexOf(char) != -1
  })

  return charsNotInBoth.length
  // return that 



}
function minNumberDeletions(a,b){
  const firstWord = a.split('')
    const secondWord = b.split('')
    let initialLettersCount = firstWord.length + secondWord.length
    
    firstWord.forEach((firstWordLetter) => {
        for (let j = 0; j < secondWord.length; j++) {
            if (firstWordLetter === secondWord[j]) {
                secondWord.splice(j, 1)
                initialLettersCount -=2
                break
            }
        }
    })
    console.log(initialLettersCount)
  }

let ans = minNumberDeletions("cde","abc")
console.log(ans)