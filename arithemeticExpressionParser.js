//The first problem I got was writing an arithmetic expression 
// parser with only parenthesis and the plus sign

// input: (1+50+(7+2-40)) output 60

let strings = ["1+ A1","2","A1+(49+3)","2+4+  3+2+A1","1+10+(10+8)","(1+50+(7+2))"]

function evaluateStrings(list){
  // for (let index in list){
  //   evaluateString(list[index])
  // }
  evaluateString(list[3])
}
function evaluateString(string) {
  //split by non-numeric characters
  let tokens = string.split(/[^A0-9]/)
  tokens = tokens.filter(element=> {return element != ""})
  tokens = tokens.map(token => {
    if (token.toUpperCase().indexOf("A") != -1){
       // if has a, get the index. then get the index
       let index = parseInt(token.replace("A",""))

       // evaluate that answer
       return evaluateString(strings[index]).toString()

    }
    return token
   
  })
  let val = tokens.reduce((token,val)=> {
    return val = parseInt(val) + parseInt(token)
  })

  console.log(val)
  return val
  // remove all that aren't just numbers

}

evaluateStrings(strings)