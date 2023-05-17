const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-17478.txt";
const [num] = require("fs").readFileSync(filePath).toString().split("\n").map(Number);

let str1 = `"재귀함수가 뭔가요?"`;
let str2 = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
let str2_1 = `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
let str2_2 = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
let str3 = `"재귀함수는 자기 자신을 호출하는 함수라네"`;
let str4 = `라고 답변하였지.`;
let str5 = `____`;

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");

function recursionFunction(n) {
    let t = "";
    for(let i = n; i < num; i++) {
        t += str5;
    }
    console.log("%s%s", t, str1);
    if(n > 0) {
        console.log("%s%s", t, str2);
        console.log("%s%s", t, str2_1);
        console.log("%s%s", t, str2_2);
        recursionFunction(--n);    
    } else {
        console.log("%s%s", t, str3);
    }
    console.log("%s%s", t, str4);
}

recursionFunction(num);