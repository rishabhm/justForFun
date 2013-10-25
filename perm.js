/*
	UPDATE : Found an error, need to fix
*/

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

var word = "123"
var dict = {}
var result = permute(word.split("")); 
var unique = []

result.forEach (function (p) {
	if (!dict[p]) {
		dict[p] = 1;
		unique.push(p.join(""))
	}
	console.log(p)
})

unique.forEach (function (u) {
	console.log(u);
})

console.log(result.length, unique.length);
