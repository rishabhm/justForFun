// Return sets of anagrams

function anagramSets (A) {
	var dict = {}, temp;

	A.forEach(function (word) {
		temp = word.split("").sort().join("");
		if (!dict[temp]) {
			dict[temp]=[]
		}
		dict[temp].push(word);
	});

	return dict;
}

var A = ['cat', 'act', 'dog', 'tac', 'god', 'xzyp', 'cab', 'act'],
	sets = anagramSets(A);

console.log(sets);
