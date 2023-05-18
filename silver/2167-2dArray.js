const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2167.txt";
const stdin = require("fs").readFileSync(filePath).toString().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const [n, m] = input().split(" ").map(Number);
const arr = [];
for(let i = 0; i < n; i++) {
    let row = input().split(" ").map(Number); 
    arr.push(row);
}
let k = input();
while(k--) {
    let sum = 0;
    let [i, j, x, y] = input().split(" ").map(Number);
    for(let p = i; p<=x; p++) {
        for(let q = j; q<=y; q++) {
            sum += arr[p-1][q-1];
        }
    }
    console.log(sum);
}