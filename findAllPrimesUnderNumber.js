

// given a number find all primes  using sieve of Eratosthenes
function findAllPrimes(n){
  let primes = []
  for (var i=0;i<n;i++){
    primes.push(i)
  }


  for (var j=2;j<n;j++){
    // get all multiples of it and divide
    if (primes[j]){
      // if j is prime, we need to go through
      for (var indexVal =j*2;indexVal<n;indexVal+=j)  {
        // going up by increments of j
        primes[indexVal] = ""
      }
    }
  }
  primes = primes.filter(element =>element!=="")
  console.log(primes)

}


// given a number find all primes under that number
function findAllPrimesBad(n){
  for (var i=2;i<n;i++){
    let isPrime = true
    // loop through each number under, check if any divide it
    for (var j=2;j<i;j++){
      // if a number
      if (i%j==0){
        // we have something that evenly divides, so it's not prime
        isPrime = false
        break
      }
    }

    if (isPrime){
      console.log(`${i} is prime`)
    }

  }

}

findAllPrimes(42)