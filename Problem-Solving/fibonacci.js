function* fibonacciGenerator() {
  let a = 0, b = 1;
  while(true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
  
const fibonacci = (len) => {
  let i = 0, fib = fibonacciGenerator();
  while ( i < len ) {
	    return fib.next().value;
	    i++;
  }
}


export default fibonacci;