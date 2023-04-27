const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-8393.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n").map(Number);

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let count = input();
let sum = 0;
while(count--) {
    sum += (count + 1);
}

console.log("%d\n", sum);
