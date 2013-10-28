/*
	Find the greatest sum of consecutive integers in an array
	Kadane's Algorithm
	NOTE : This solutions assumes the empty set is NOT a valid subarray
*/

function greatestConsecSum(arr) {
	var sum=0, max=arr[0];
	arr.forEach(function (n) {
		sum += n;
		if (max < sum) {
			max = sum;
		}
		if (sum < 0) {
			sum =0;
		}
	})
	return max;
}

console.log(greatestConsecSum([-3, -2, -1, 5]))