function permute(a) {
	var perms = [], rec = [];
	if (a.length > 2)
		rec = permute(a.slice(1));
	else {
		return [a, a.reverse()];
	}

	rec.forEach(function (word) {
		for(var i=0; i<word.length; i++) {
			perms.push(word.slice(0,i).concat([a[0]]).concat(word.slice(i, word.length)));
		}
		perms.push(word.concat([a[0]]))
	})

	return perms;

}
console.log(permute([1,2,3,4,5]))

