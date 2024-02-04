// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.

function odd_even(number){
    if(number % 2 === 0){
        console.log("Even:",number);
        return 'even';
    }
    else{
        console.log("Odd:",number)
        return 'odd';
    }
}
odd_even(55);
odd_even(60);