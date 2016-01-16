function* fibonacciGenerator() {
  let a = 0, b = 1;
  while(true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
  
const fibonacci = (len) => {
  let i = 0, fib = fibonacciGenerator(), result = new Set();
  while ( i < len ) {
	    result.add(fib.next().value);
	    i++;
  }
  return result;
}


export default fibonacci;