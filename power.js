// Calculate a^b;
// Running time O(log(n))

var dict = {}

function power(a,b) {
	if (dict[b])
		return dict[b];
    if (b==0)
        return 1;
    if (b==1) {
    	dict[b] = a;
        return a;
    }
    var result = a * power(a, parseInt(b/2)) * power(a,parseInt((b-1)/2));
    dict[b] = result;
    return result
}

power(2,100000);