// Just print substrings. practicing window


function printSubStrings(string){
  for (var size = 1;size<=string.length;size++){
    for (var startIndex= 0;startIndex+size<=string.length;startIndex++){
      console.log(string.substr(startIndex,size))
    }
  }
}

printSubStrings("abcdefg")