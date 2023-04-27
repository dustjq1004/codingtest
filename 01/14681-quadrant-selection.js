// 예제 입력이 여러줄로 되어 있을 떼
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
})
.on('close', () => {
    const quadrantArr = ["1,1", "0,1", "0,0", "1,0"];
    input = input.map((value) => {
        if(value < 0) return 0
        else return 1
    });
    console.log(quadrantArr.indexOf(input.toString()) + 1);
    process.exit();
});