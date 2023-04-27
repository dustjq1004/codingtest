const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-15552.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let answer = "";
let count = parseInt(input());
while(count--) {
    let [a, b] = input().split(" ").map(Number);
    answer = answer.concat(`${a + b}\n`);
}

console.log(answer);
