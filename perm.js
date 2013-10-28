// Works!

function perm(arr) {
	if (arr.length == 0)
		return [];
    if (arr.length==1)
        return [arr];
    var perms = perm(arr.slice(1));
    var result = []
    for (var i=0; i <perms.length; i++) {
        for (var j=0; j<perms[i].length; j++) {
            result.push(perms[i].slice(0,j).concat(arr[0]).concat(perms[i].slice(j,perms[i].length)));        
        }
        result.push(perms[i].concat(arr[0]));
    }
    return result;  
}
var permutations = perm([2,3]);
console.log(permutations);