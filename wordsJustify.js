/*
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */


let words = ["This", "is", "an", "example", "of", "text", "justification."]
let maxWidth = 16
var fullJustify = function(words, maxWidth) {
    let lines = []
  let lineWords  =[]
  // loop through words until words you get and spaces is too much.
  for (var wordIndex = 0;wordIndex<words.length;wordIndex++){
      while (lineWords.join(" ").length<maxWidth){

          lineWords.push(words[wordIndex])
          wordIndex++
      } 
      // now it's too long
      wordIndex -=2
      lineWords.pop()
      lines.push(lineWords.slice())
      lineWords = [] // start over for next line
  }

  console.log(lines)
  // remove last word
  // now we need to add appropriate spaces
  // do so for remaining words
  // last line is left justified
  
};


fullJustify(words, maxWidth)