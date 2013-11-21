function powerset(A) {
	if (A.length === 1) {
		console.log(A);
		return [A];
	}
	var result = powerset(A.slice(1)),
		copy = [];
	result.forEach(function (e) {
		copy.push(e);
	})
	console.log("Result : ", result);
	console.log("Copy : ", copy);
	copy.forEach(function (e) {
		e.push(A[0]);
	});
	console.log("Now copy : ", copy);
	result.push([A[0]]);
	result.concat(copy);
	console.log("Now result : ", result);
	return result;
}

console.log(powerset([1,2,3]));