// Task-1: Take four parameters. Multiply the four numbers and then return the result..
function fourNumber(num1, num2, num3, num4) {
    const result = num1 * num2 * num3 * num4;
    console.log("Multiply the Numbers: ", result);
    return result;
}
let numbs = [5, 10, 15, 20];
fourNumber(...numbs);












