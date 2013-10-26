/*
	Given a N*M array with each cell attributed a certain value,
	return the maximum amount you can collect while travelling from [0][0] to [N-1][M-1]
	From a given position [i][j], you can only travel to [i+1][j] or [i][j+1]
*/

function max(A,B) {
    return A > B ? A : B;
}

function move(A, i, j) {
    if (i==A.length || j==A[0].length)
        return 0;
    if (i==A.length-1 && j==A[0].length-1)
        return A[i][j];
    return A[i][j] + max(move(A,i,j+1), move(A,i+1,j));
}

function solution(A) {
	if (!A)
		return 0;
	if (A.length == 0)
		return 0;
	if (A[0].length == 0)
		return 0;
    return A[0][0] + max(move(A,0,1), move(A,1,0));
}

var A = [[2, 2, 4, 2], [0, 3, 0, 1], [1, 2, 2, 1], [4, 3, 2, 2]];
console.log(solution(A))