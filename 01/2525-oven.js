
/*
입력
시간 : 16 00
요리시간 : 30(분)

1.시간을 구한다. 분단위
A = 시간 * 60 + 분
A / 60 = 시간
A % 60 = 분

현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 
두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다. 
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2525.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

(function main() {
})();   

function validOvenTime(hour, minute, cookTime) {
    if(!(0 <= hour && hour <= 23)) return false;
    if(!(0 <= minute && minute <= 59)) return false;
    if(!(0 <= cookTime && cookTime <= 1000)) return false;

    return true;
}