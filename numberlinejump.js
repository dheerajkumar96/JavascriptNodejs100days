'use strict';

const fs = require('fs');

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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
if((x2>x1) && (v2>v1)){
    return 'NO';
} else {
    let posone = x1;
    let postwo = x2;
    let jumpone = 1;
    let jumptwo = 1;
    let d1 = x1+v1;
    let d2 = x2+v2;
    if((d1 === d2)&&(jumpone===jumptwo)){
        return 'YES';
    } else{
    while(d1 !== d2){
        d1 = d1 + v1;
        posone = d1;
        jumpone++;
        d2 = d2 + v2;
        postwo = d2;
        jumptwo++;
        if((d1 === d2)&&(jumpone===jumptwo)){
        return 'YES';
        break;
    }else if((postwo>posone) && (v2>v1)){
        return 'NO';
        break;
    }else if((d1 === d2)&&(jumpone!==jumptwo)){
        return 'NO';
        break;
    }else{
        continue;
    }
    }
    }
}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
