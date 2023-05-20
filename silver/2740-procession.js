const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2740.txt";
const stdin = require("fs").readFileSync(filePath).toString().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let A = makeArray();
let B = makeArray();

multiplyMatrix(A, B).forEach(v => {
    console.log(v.join(" "));
});

function makeArray() {
    let [n,m] = input().split(" ").map(Number);
    let arr = Array.from(new Array(n));
    arr = arr.map(v => {
        let row = input().split(" ").map(Number);
        return row;
    });
    return arr;
}

function multiplyMatrix(a ,b) {
    let arr = [];

    for(let i = 0; i < a.length; i++) {
        let arr2 = [];
        for(let j =0; j < b[0].length; j++) {
            let sum = 0;
            for(let x = 0; x < b.length; x++) {
                sum += a[i][x] * b[x][j];
            }
            arr2.push(sum);
        }
        arr.push(arr2);
    }
    return arr;
};
