const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-11723.txt";
const [firstLength, ...data] = require("fs").readFileSync(filePath).toString().split("\n");

let arr = 0;
let result = new Array();
for(let i = 0; i < data.length; i++) {
    let line = data[i].split(" ");
    const operation = line[0];
    const x = line[1];
    switch (operation) {
        case 'add':
            arr |= (1 << x); 
            break;
        case 'check':
            let check = (arr & (1 << x)) > 0 ? 1 : 0;
            result.push(check);
            break;   
        case 'remove':
            arr &= ~(1 << x);
            break;   
        case 'toggle':
            arr ^= (1 << x);
            break;   
        case 'all':
            arr = (1 << 21) - 1;
            break;   
        case 'empty':
            arr = 0;
            break;   
    }
}

console.log(result.join("\n"));

//메모리 초과로 확인 어려움...