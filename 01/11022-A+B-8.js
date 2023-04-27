const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-11021.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let answer = "";
let count = parseInt(input());
let i = 0;
while(count--) {
    const prefix = `Case #${i+1}:`;
    let [a, b] = input().split(" ").map(Number);
    answer = answer.concat(`${prefix} ${a} + ${b} = ${a + b}\n`);
    i++;
}

console.log(answer);
