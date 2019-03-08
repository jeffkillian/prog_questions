//Given two strings, determine if they share a common substring. A substring may be as small as one character.


// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let s1Set = new Set(s1)
    for (var i=0;i<s2.length;i++){
      if (s1Set.has(s2[i])) return "YES"
    }
    return "NO"
}


let ans = twoStrings("hello","world")
console.log(ans)