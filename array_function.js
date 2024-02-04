
function addSumNumber(number) {
    let sum = 0;
    console.log(number);
    for (let num of number) {
        sum = sum + num;
    }
    console.log("Sum of num: ", sum);
    return sum;
}

const numbs = [10, 20, 30, 40];
addSumNumber(numbs);