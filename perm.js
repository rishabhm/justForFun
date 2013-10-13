function permute(a) {
	console.log('entering')
	console.log(a)
	if (a.length == 0) {
		console.log('exiting \n')
		return []
	} else if (a.length == 1) {
		console.log(a, ' exiting \n')
		return a
	}
	var permutations = permute(a.slice(1))
	var results = []
	for (var i=0; i <= permutations.length; i++) {
		results.push(permutations.slice(0,i).concat([a[0]]).concat(permutations.slice(i)))
	}
	console.log(results)
	console.log('exiting \n')
	return results
}
console.log(permute([1,2,3]))

