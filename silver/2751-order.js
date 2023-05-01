
/*
N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.


첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.

접근방식
1. 삽입정렬
2. 선택정렬
3. 퀵정렬
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2751.txt";
const stdin = fs.readFileSync(filePath).toString().split("\n").map(Number);

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();


// 삽입정렬
const sortInsert = (arr) => {
    let n = arr.length;
    for(let i = 0; i < n-1; i++) {
        let j = i;
        while(j >= 0 && arr[j] >= arr[j+1]) {
            swap(arr, j, j+1);
            j--;
        }
    }
    show(arr);
}

// 선택정렬
const sortSelect = (arr) => {
    let n = arr.length, index, min;
    for (const i in arr) {
        min = Number.MAX_SAFE_INTEGER;
        for(let j = i; j < n; j++) {
            if(min > arr[j]) {
                min = arr[j];
                index = j;
            }
        }
        swap(arr, i, index);        
    }
    show(arr);
}

// 퀵정렬
const sortQuick = (arr, start, end) => {
    if(start >= end) return;
    let key = start, i = start + 1, j = end;
    while(i <= j) {
        while(i <= end && arr[i] <= arr[key]) i++;
        while(j > start && arr[j] >= arr[key]) j--;
        if(i > j) swap(arr, key, j);
        else swap(arr, i, j)
    }
    sortQuick(arr, start, j - 1);
    sortQuick(arr, j + 1, end);
}


(()=> {
    let n = stdin.length;
    sortQuick(stdin, 0, n - 1);

    show(stdin);
})();


(()=> {
    stdin.shift();
    stdin.sort(Number);
    console.log(stdin.join("\n"));
})();

//sortInsert(stdin);
// sortSelect(stdin);