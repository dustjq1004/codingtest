
/*
N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2739.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

input.forEach(number => {
    if(!(1 <= number && number <= 9)) return;
    for(var i = 1; i < 10; i++) {
        console.log("%d * %d = %d", number, i, number * i);
    }
});

