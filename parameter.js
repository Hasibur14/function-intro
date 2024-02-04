function square(num) {
    // console.log(num);
    console.log("value of thr number :", num);
    const borgo = num * num;
    console.log(borgo);

}
square(4);

// -----------multiple parameters---------
function add(num1, num2) {
    console.log();
    const sum = num1 + num2;
    const multiplication = num1 * num2;
    console.log(sum);
    console.log(multiplication);

}
add(10, 20);

// ----------------------------------------------------
// ----------------------------------------------------
function z(x, y) {
    const t = x + y;
    console.log(t);
}
z(100, 300);

// ----------------------------------------------------
// ----------------------------------------------------

function moreNum(a, b, c, d, e) {
    const total = a + b + c + d + e;
    console.log("Total number: ", total);
}
moreNum(2, 6, 15, 7, 9);




function even(number){ //function call
    console.log(number); //function value print

    const squareEven =number * number;
    console.log(squareEven);

}
even(5);