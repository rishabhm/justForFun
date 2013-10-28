// Calculate a^b;
// Running time O(log(n))
// Running time with dictionary : 45ms
// Running time without dictionary : 307ms
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

var start = new Date().getMilliseconds();
for (var i=0; i<10000; i++) {
	dict = {};
	power(2,1000);
}
var end = new Date().getMilliseconds();
