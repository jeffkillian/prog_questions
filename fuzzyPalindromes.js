//Write a function that returns whether or not 
//two strings are fuzzy palindromes of 
//one another (i.e. ignore spaces and capitalization).  


function areFuzzyPalindromes(a,b){
  let aNoSpace = a.split(" ").join("").toLowerCase()
  let bNoSpace = b.split(" ").join("").toLowerCase()
  
  if (aNoSpace.length !=bNoSpace.length) return false
  for (var i=0;i<aNoSpace.length;i++){
    if (aNoSpace[i]!=bNoSpace[bNoSpace.length-1-i]) return false
  }
  return true
}

let one = "HeL    l O"
let two = "olle h"
console.log(areFuzzyPalindromes(one,two))