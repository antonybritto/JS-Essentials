const getPrimeNumber = (max) => {
	let result;
    for(let i = 2; i <= max; i++) {
    	if(_isPrime(i)) {
    		result.push(i);
    	}
    }
    function _isPrime(n) {
    	for(let i = 2; i < n; i++) {
    		if(n%i === 0) {
    			return false;
    		}
    	}
    	return true
    }
};

export default getPrimeNumber;