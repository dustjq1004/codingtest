const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-11866.txt";
const [number, k] = require("fs").readFileSync(filePath).toString().split(" ").map(Number);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;    
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }
    dequeue() {
        if(!this.head) {
            return null;
        }

        const removeNode = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }

        this.size--;

        return removeNode.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}




const q1 = new Queue();
const q2 = new Queue();

const delArr = [];
let count = 1;

for(let i = 1; i <= number; i++) {
    q1.enqueue(i);
}

while(!q1.isEmpty()) {
    let d = q1.dequeue();
    
    if(count % k == 0) {
        delArr.push(d);
    } else {
        q1.enqueue(d);
    }
    count++;
}

console.log("<%s>", delArr.join(", "));


