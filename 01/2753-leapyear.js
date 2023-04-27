/**
 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
1 초	128 MB	276315	145394	122174	52.456%
문제
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.


첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

2000 -> 1

1999 -> 0

 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2753.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

input.forEach(year => {
    console.log(year /100 % 4 <1);
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        console.log(1);
    } else {
        console.log(0);
    }
});