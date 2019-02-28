// Implement a method to perform basic string compression using 
//the counts of repeated characters. For example, the string aabcccccaaa 
//would become a2b1c5a3. If the "compressed" string would not become smaller
// than the original string, your method should return the original string. 
//You can assume the string has only uppercase and lowercase letters (a - z).

function compressString(string) {
  let prevChar = ""
  let charCount = ""
  let returnString = ""
  for (charIdx in string){
    let char=string[charIdx]
    if (char==prevChar){
      charCount++
    }
    else{
      returnString += `${prevChar}${charCount}` // Add the old character to the string
      charCount = 1
      prevChar=char
    }

    if (charIdx==string.length-1){returnString += `${prevChar}${charCount}` // Add the old character to the string
    }
  }

  return returnString.length > string.length ? string : returnString
}


console.log(compressString("aabcccccaaa"))