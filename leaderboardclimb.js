'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let ranks = [];
for(let i=0;i<alice.length;i++){
    scores.push(alice[i]);
    console.log(scores, 'scores');
    let sorted = scores.slice().sort(function(a, b){return b-a});
    console.log(sorted, 'after sorted desc');
    let tmpranks = sorted.map(function(v){ 
        
        return sorted.indexOf(v)+1;
    });
    console.log(tmpranks, 'ranks');
    let tmprank = sorted.indexOf(alice[i]);
    console.log(tmprank,'index in sort array')
    let rank = tmpranks[tmprank];
    console.log(rank);
    ranks.push(rank);
    scores = scores.filter(item => item !== alice[i]);
}
return ranks;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
