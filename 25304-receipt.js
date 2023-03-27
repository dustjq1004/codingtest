const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-25304.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let total = 0;
let sum = 0;
let count = 0;

function main() {
    total = parseInt(input[0]);
    count = parseInt(input[1]);
    if(!(validNumber(0, total))) return;
    if(!(validNumber(1, count))) return;

    for(var i = 2; i < count + 2; i++) {
        let [a, b] = input[i].split(" ").map(Number);
        if(validNumber(2, a) && validNumber(3, b)) sum = sum + a * b;
        else return;
    }
    console.log(total == sum ? "Yes" : "No");
}
main();

/*
 
$ 1 ≤ X ≤ 1\,000\,000\,000$ 
$ 1 ≤ N ≤ 100$ 
$ 1 ≤ a ≤ 1\,000\,000$ 
$ 1 ≤ b ≤ 10$ 
*/
function validNumber(index, value) {
    switch (index) {
        case 0:
            if(1 <= value && value <= 1000000000) return true;
            break;
        case 1:
            if(1 <= value && value <= 100) return true;
        case 2:
            if(1 <= value && value <= 1000000) return true;
        case 3:
            if(1 <= value && value <= 10) return true;
    }   
    return false;
}