function reverseNumber(n) {
	var result = 0;
	while (n>0) {
		result *= 10;
		result += n%10;
		n=parseInt(n/10);
	}
	return result
}

console.log(reverseNumber(1436))