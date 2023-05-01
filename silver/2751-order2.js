const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2751.txt";
const [first, ...stdin] = fs.readFileSync(filePath).toString().split("\n").map(Number);

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// 삽입정렬
const sortInsert = (first, arr) => {
    let n = first;
    for(let i = 0; i < n-1; i++) {
        let j = i;
        while(j >= 0 && arr[j] >= arr[j+1]) {
            swap(arr, j, j+1);
            j--;
        }
    }
    console.log(arr.join("\n"));
}

sortInsert(first, stdin);