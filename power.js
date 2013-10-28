// Calculate a^b;

function power3(a,b) {
    if (b==0)
        return 1;
    if (b==1)
        return a;
    return a * power3(a, parseInt(b/2)) * power3(a,parseInt((b-1)/2));
}

console.log(2,10); // We don't need to calculate this...