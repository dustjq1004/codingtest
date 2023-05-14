const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-1475.txt";
const [roomNumber] = require("fs").readFileSync(filePath).toString().split(" ");

let set = new Array(10).fill(0, 0, 10);
let setCnt = 0;
roomNumber.split("").forEach((v, i) => {
    if(v == 6 || v == 9) {
        set[6]++;
    } else {
        set[v]++;
    }
});

set[6] = Math.ceil(set[6] / 2);

console.log(Math.max(...set));