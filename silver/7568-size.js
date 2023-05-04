const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-7568.txt";
const [firstLine, ...data] = require("fs").readFileSync(filePath).toString().split("\n").map(value => value);



const rank = Array.from(new Array(parseInt(firstLine)));

for (const i in rank) {
    let count = 0;
    const [ah,aw] = data[i].split(" ").map(Number);
    for (const j in data) {
        if(i != j) {
            const [bh,bw] = data[j].split(" ").map(Number);
            if(ah < bh && aw < bw ) {
                count++;
            }
        }
    }
    rank[i] = count + 1;   
}

console.log("%s", rank.join(" "));
