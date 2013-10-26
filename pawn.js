/*
	You are given an array. The value at each index represents the
	index of the next value you must read. As you continue reading
	these values, you will ultimately find yourself falling into a
	cycle. Return the length of this cycle

	Example:
		A = [3,0,4,2,5,6,4]
		Steps : 
			0,3,2,4,5,6,4,5,6,4...
		Length of cycle = 3 (4,5,6)

	TODO
		Solve with O(1) space
*/
function startCounting(A, currPos) {
    var steps=0,
        dist=0, 
        newPos;
    for (;;) {
        steps++;
        newPos = A[currPos];
        dist += newPos - currPos;
        if (!dist) {
            return steps;
        }
        currPos = newPos;
    }
}

function solution(A) {
    var dict = {};
    var currPos=0, newPos=0, steps=0;
    for (;;) {
        newPos = A[currPos];
        if (dict[newPos]) {
            return startCounting(A, newPos);
        } else {
        	dict[newPos] = 1;
        }
        currPos = newPos;
    }
}

var A = [3,0,4,2,5,6,4]
console.log(solution(A));