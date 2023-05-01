const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-1193.txt";
const stdin = require("fs").readFileSync(filePath).toString().split("\n").map(Number);
/*
    지그재그 분수 찾기
    1 <= x <= 10,000,000
    숫자 X가 주어졌을 때 X번째 분수를 찾기
*/
const MAX = 10000000;
let i, sum = 0;

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const x = input();

if(x < 1 || x > MAX) process.exit();

for(i = 0; i < MAX; i++) {
    sum += i;
    if(x <= sum) {
        break;
    }
}

if(x <= sum) {
    let num = x - (sum - i);
    if(i % 2 == 0) {
        let n = num, m = i - (num - 1);
        console.log("%d/%d", n, m);
    } else {
        let n = i - (num - 1), m = num;
        console.log("%d/%d", n, m);
    }
}


