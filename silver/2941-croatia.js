/*
전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다. 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.

크로아티아 알파벳	변경
    č	        c=
    ć	        c-
    dž	        dz=
    đ	        d-
    lj	        lj
    nj	        nj
    š	        s=
    ž	        z=

예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다. 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.

dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다. lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.

*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2941.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

const croatiaList = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let num = stdin.length;
const reg = /[^a-zA-Z]|[\s]/gi;

const countCroatia = (word) => {
    let count = 0;
    while(word) {
        let flag = true;
        for (const value of croatiaList) {
            if(word.includes(value)) {
                flag = false;
                count++;
                word = word.replace(value, " ");
                break;
            };
        }
        if(flag) {
            word = word.replaceAll(reg, "");
            count = count + word.length;
            word = "";
        }
    }
    return count;
}
while(num--) {
    const word = input();
    if(word) console.log(countCroatia(word));
}

/*
1. word가 없어질때까지 while 반복
    1-1. flag 선언 : word에 하나라도 포함되어있으면 false
    1-2. croatiaList에 포함되어있으면 count++ 후 삭제 
    1-4. 영어만 남기도록 삭제
    1-5. flag가 true면 count 와 word.length 더한 후 word 빈값으로 초기화
*/