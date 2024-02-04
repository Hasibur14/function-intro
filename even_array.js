const evens = [];
function sumOfEven(numbers) {
   for (let number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const num = [10, 6, 5, 9, 15, 20];
sumOfEven(num);
console.log("Sum of Even Numbers: ",evens);
