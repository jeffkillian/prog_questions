// given a string, print all permutations

function printPermutations(prefix,remaining){
  let n = remaining.length
  if (n==0) {
    console.log(prefix)
  }else {
    // for our current prefix, we want to iterate over remaining and add that in as the next
    for (var i=0;i<n;i++){
      printPermutations(prefix+remaining[i],remaining.substr(0,i)+remaining.substr(i+1,n))
    }
  }

}


printPermutations("","ABC")