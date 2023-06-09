const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let strArr = [... input[0]];
    let answerArr = [];
    strArr.forEach(i => {
        if(i == i.toUpperCase()) {
            answerArr.push(i.toLowerCase());
        } else {
            answerArr.push(i.toUpperCase());
        }
    })
    console.log(answerArr.join(''));
});