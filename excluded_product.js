function excluded_prod(A) {
	var result = [], prod = 1;
	var zero = 0, zero_ind = -1;
	
	for (var i=0; i<A.length; i++) {
		if (A[i]==0) {
			zero++;
			zero_ind = i;
		} else {
			prod*=A[i];
		}
	}

	if (zero) {
		if (zero>1) {
			for (var i=0; i<A.length; i++)
				result.push(0);
		} else {
			for (var i=0; i<A.length; i++) {
				if (i!=zero_ind)
					result.push(0);
				else
					result.push(prod);
			}
		}
	} else {
		for (var i=0; i<A.length; i++)
			result.push(prod/A[i]);
	}

	return result;
}

console.log(excluded_prod([1,2,3,4,0,5,0]));