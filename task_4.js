function countZero(binary) {
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            count++;
        }
    }
    console.log(count);
}

const binaryString = '10101111000110';
countZero(binaryString);
