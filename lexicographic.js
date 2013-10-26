// Project Euler - Problem 24
// A permutation is an ordered arrangement of objects. For example, 3124 is one 
// possible permutation of the digits 1, 2, 3 and 4. If all of the permutations 
// are listed numerically or alphabetically, we call it lexicographic order. 
// The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of 
// the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
// 
// Solution : 2783915460

var NUM = 10;
var toFind = 1000;
var result = [];
var facts = [1,1,2,6,24, 120, 720, 5040, 40320, 362880, 3628800]

function fact(n) {
	if (n==1 || n==0)
		return 1
	return n * fact(n-1)
}

function find(n) {
	var count =0;
	for (var i =0 ; i < NUM; i++) {
		if (facts[i] != -1) {
			if (count == n) {
				facts[i] = -1;
				return i;
			} else {
				count++
			}
		}
	}
}

function answer(a, b) {
	if (b < 0)
		return
	if (a < fact(b)) {
		result.push(find(0))
		answer(a, b-1)
	} else {
		result.push(find(parseInt(a/fact(b), 10)))
		answer(a%fact(b), b-1)
	}
}

answer(toFind-1, NUM-1)
console.log(result.join(''));