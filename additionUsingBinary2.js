function add(one,two){
  
  // things that are extra and don't need to be carried
  let extra = one ^ two

  // shift over as they need to be carried
  let carry = (one & two) << 1
  if (carry & extra) {
    return add(carry,extra)
  }
  // no two are the same, just put it together
  return carry | extra
}

console.log(add(4,5))