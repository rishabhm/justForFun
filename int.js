// Convert from String to Integer without using any built in functions
// Handle invalid input

function convertToInt(s) {
    var myInt = 0,
        mult = 1,
        temp;
    
    if (s[0]=='-') {
        mult = -1;
        s = s.slice(1);
    } else if (s[0]=='+') {
        mult = 1;
        s = s.slice(1);
    }
    for (var i =0 ;i<s.length ; i++)  {
        myInt *= 10;
        temp = s[i] - '0';
        if (temp>-1 && temp<10)
            myInt += temp;
        else
            return ({error : true, message : "Input not a valid number"})
    }
    
    myInt *= mult;
    
    return myInt;
}

console.log(convertToInt("12345"));