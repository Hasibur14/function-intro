/*Task-3: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.*/

function make_avg(str) {
    let total= 0;
   
    for(i=0; i<str.length; i++){
     total += str[i];
    }
    const avg = total / str.length;
    console.log("Average the Array number: ",avg);
    return avg;
}
const subStr = [10, 20, 30, 40] 
make_avg(subStr);