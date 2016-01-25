const sieve = (n) => {
  var i,j;
  let prime = [];
  for (i = 0; i <= n; i++) prime.push(true);

  // mark for swipe
  for (i = 2; i <= Math.sqrt(n)|0; i++) {
    if (prime[i]) {
      for (j = i*i; j <= n ;j += i) {
        prime[j] = false; // eliminate all none prime numbers and mark them as 'false'
      }
    }
  }

  // extract primes
  var primes = [];
  for (i = 2; i <= n; i++) {
    if (prime[i]) primes.push(i)
  }

  return primes;
}

export default sieve;