// reverse the bits of an integer


function reverseBits(n){
  let rev = 0
  while(n > 0){
    rev = rev <<1
    // go through n from right to left
    let isRightDigitOfN1 = n & 1
    if (isRightDigitOfN1){
      rev = rev | 1
    }

    n = n >> 1

  }
  return rev

}



console.log(reverseBits(11))

function reverseBitsString(n){
  let ans = ""
  // get the bits
  let bits = n.toString(2)
  console.log(`Input bits are ${bits}`)
  while(bits.length!=0){
    ans = ans + bits[bits.length-1]
    bits = bits.slice(0,bits.length-1)
  }

  console.log(`output bits are ${ans}`)

  return ans

  // return toSTring

}


function flipBits(n){
  let binaryN = n.toString(2)
    console.log(`reversing bits ${binaryN}`)

    let matchingInt = (2**(binaryN.length))-1-n
    console.log(matchingInt)
    console.log(`matching bits are ${matchingInt.toString(2)}`)
}

