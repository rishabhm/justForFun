function power3(a,b) {
    if (b==0)
        return 1;
    if (b==1)
        return a;
    return a * power3(a, parseInt(b/2)) * power3(a,parseInt((b-1)/2));
}

console.log(power3(-5,5));