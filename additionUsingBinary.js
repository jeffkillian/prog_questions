

function add(a,b) {

  // get the unique parts. These won't need to be carried
  var sum  = a ^ b

  let carry = (a & b) << 1 // Things that are common to both. When it's common to both, we shift left by one.

  if (sum & carry){// If there's any that are shared, we have more carrying to do
    return add(sum, carry)
  }
  return sum ^ carry


}
/* 
Subtraction?
*/
console.log(ans)