// Calculate a^b;

function power(a,b) {
    if (b==0)
        return 1;
    if (b==1)
        return a;
    return a * power(a, parseInt(b/2)) * power(a,parseInt((b-1)/2));
}

console.log(power(2,10)); // We don't need to calculate this...