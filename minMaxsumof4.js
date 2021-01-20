'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
let a = [];
let sum = 0;
let count = 0;
for(let i=0;i<arr.length;i++){
    sum = sum + arr[i];
}
let tmpsum =0;
for(let i=0;i<arr.length;i++){
    tmpsum = sum;
    tmpsum = sum - arr[i];
    a.push(tmpsum);
}
a.sort();
console.log(a[0] + ' ' + a[a.length-1]);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
