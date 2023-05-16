const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-11723.txt";
const [firstLength, ...data] = require("fs").readFileSync(filePath).toString().split("\n");

// add remove check toggle all empty
Array.prototype.add = function(x) {
    this.push(x);
}
Array.prototype.remove = function(x) {
    let index = this.findIndex(v => v == x);
    this.splice(index, index + 1);
}
Array.prototype.check = function(x) {
    let isExist = this.findIndex(v => v == x);
    return isExist > -1 ? 1 : 0;
}
Array.prototype.toggle = function(x) {
    let isExist = this.check(x);
    if(isExist == '1') {
        this.remove(x);
    } else {
        this.add(x);
    }
}
Array.prototype.all = function() {
    for(let i = 0; i < 20; i++) {
        this[i] = i + 1;
    }
}
Array.prototype.empty = function() {
    this.splice(0, this.length);
}

let arr = new Array();

for(let i = 0; i < data.length; i++) {
    let line = data[i].split(" ");
    const operation = line[0];
    const x = line[1];
    switch (operation) {
        case 'add':
            arr.add(x);
            break;
        case 'check':
            console.log(arr.check(x));
            break;   
        case 'remove':
            arr.remove(x);
            break;   
        case 'toggle':
            arr.toggle(x);
            break;   
        case 'all':
            arr.all();
            break;   
        case 'empty':
            arr.empty();
            break;   
    }
}


//메모리 초과로 확인 어려움...