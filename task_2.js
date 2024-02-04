//Task-2: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function number(num) {
    if (num % 2 === 1) {
        const oddResult = num * 2;
        console.log("Odd Number: ", oddResult);
        return oddResult;
    }
    else{
        const evenResult = num / 2;
        console.log("Even Number",evenResult);
        return evenResult;
    }
}
number(10); //5
number(23); //46