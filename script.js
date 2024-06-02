function fibonacci(num) {
// your code here
	    if (num === 0) return 0;
    if (num === 1) return 0;
	
	let a = 0;
	let b = 1;
	let c = a + b;
	for (let i = 2; i <= num; i++) {
		a = b;
		b = c;
		c = a + b;
	} return c;
	
	
}

module.exports = fibonacci;
