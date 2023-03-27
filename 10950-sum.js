
//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-10950.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let testCaseCnt;

input.forEach((value, index) => {
    if(index == 0) testCaseCnt = value;
    else if (index <= testCaseCnt) {
        let [a, b] = value.split(" ").filter(it => 0 < it && it < 10).map(Number);
        if(a && b)
            add(a, b);
    }
});

function add(a, b) {
    console.log("%d", a + b);
}


