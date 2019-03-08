// given two words, find the longest common substring




function lcs(one,two){
  // construct x*y, filled with zeros, one bigger than length
  let maxVal = 0
  let longestString = ""

  let array = []
  for (var y=0;y<two.length+1;y++){
    let insideArr = []
    for (var x=0;x<one.length+1;x++){
      insideArr.push(0)
    }
    array.push(insideArr)
  }

  console.log(array)

  // go thorugh, if equal, it is one more than diagonal before.
  // then iterate through and find max
  for (y=1;y<two.length+1;y++){
    for (x=1;x<one.length+1;x++){
      if (one[x-1]==two[y-1]){
        let val = array[y-1][x-1]+1
        array[y][x] = val
        if (val>maxVal) {
          maxVal = val
          longestString = one.substring(x-1-val,x-1)
        }

      }
    }
  }

  console.log(longestString)
  
}


// brute force: 0(n^4)
function lcsBrute(one,two){
  let winner = ""
  // for each character in 1
  for (var i=0;i<one.length;i++){
    let oneChar = one[i]
    for (var j=0;j<two.length;j++){
      let twoChar = two[j]
      if (twoChar != oneChar) continue
      let contender = twoChar // temporary winner just one character
      let m = i+1
      let n = j+1
      // while both words still have characters left
      while(m<one.length && n < two.length){
        if (one[m]!==two[n]) break
        contender = contender+one[m]
        n++
        m++
      }
      if (contender.length> winner.length) winner = contender
      // The characters are equal. Now let's check the ones after that

    }
  }
  console.log(winner)
  return winner

}

lcs("geeksfordin", "allweekends") // => eek