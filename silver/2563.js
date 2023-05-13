const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2563.txt";
const [confettiNum, ...data] = require("fs").readFileSync(filePath).toString().split("\n");

// 첫번째 값은 색종이 수
// 그 다음은 색종이의 x,y 값
let area = 0;
let confettiArray = [];
data.forEach(v => {
    let map = new Map();
    let [x,y] = v.split(" ");
    map.set("x", x);
    map.set("y", y);
    confettiArray.push(map);
});

for(let x = 1; x <= 100; x++) {
    for(let y = 1; y <= 100; y++) {
        for(let i = 0; i < confettiArray.length; i++) {
            let cx = parseInt(confettiArray[i].get("x"));
            let cy = parseInt(confettiArray[i].get("y"));
            if((x >= cx && x < cx + 10) &&
                (y >= cy && y < cy + 10)) {
                
                //console.log("%d %d", cx, cy);
                area++;
                break;
            }
        }
    }
}

console.log(area);