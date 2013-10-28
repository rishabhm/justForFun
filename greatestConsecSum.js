/*
	Find the greatest sum of consecutive integers in an array
	Kadane's Algorithm
*/

function greatestConsecSum(arr) {
	var sum=0, max=0;
	arr.forEach(function (n) {
		sum += n;
		if (sum < 0) {
			sum =0;
		}
		if (max < sum) {
			max = sum;
		}
	})
	return max;
}

console.log(greatestConsecSum([-2, -3, 4, -1, -2, 1, 5, -3, 5]))