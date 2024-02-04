function evenString(str){
    const stringSize = str.length;
    console.log(str, stringSize);
    if(stringSize % 2 === 0){
        console.log("String Size is Even")
        return true;
    }
    else{
        console.log("String Size is Odd")
        return false;
    }

}
evenString('Rajshahi');
evenString('Dhaka');