function generateArray(length) {
    let array = [length],
        minLimit = -25,
        maxLimit = 10;
    for (let i = 0; i < length; i++) {
        array[i] = minLimit + Math.floor(Math.random() * (maxLimit - minLimit + 1));
    }
    return array;
}

function binarySearch(value, array) {
    let mass = array.sort((first, second) => first - second),
        first = mass[0],
        last = mass[mass.length - 1],
        position = -1,
        check = false,
        middle;

    while (check === false && first <= last) {
        middle = Math.floor((last + first) / 2);
        if (mass[middle] == value) {
            position = middle;
            check = true;
        } else if (mass[middle] > value) {
            last = mass[middle] - 1;
        } else {
            first = mass[middle] + 1;
        }
    }
    return position;
}

function InterpolationSearch(value, array) {
    let mass = array.sort((first, second) => first - second),
        low = 0,
        high = mass.length - 1,
        zond;
    while (mass[low] < value && mass[high] > value) {
        zond = low + Math.floor(((value - mass[low]) * (high - low)) / (mass[high] - mass[low]));
        if (value < mass[zond]) {
            high = zond - 1;
        } else if (value > mass[zond]) {
            low = zond + 1;
        } else return zond;
    }
    if (mass[low] == value) return low;
    else if (mass[high] == value) return high;
    else return -1;
}

class Node {
    constructor(data) {
        this.data = data; // node value
        this.left = null; // left node child reference
        this.right = null; // right node child reference
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // корень bst
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    search(node, data) {
        if (node === null) {
            return 'Sorry, element is undefinded';
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }
}

function fibonachchi(value) {
    let f1 = 0,
        f2 = 1,
        cf = 1;
    for (let i = 1; i <= value; i++) {
        cf = f1 + f2;
        f1 = f2;
        f2 = cf;
    }
    return cf;
}

function fibonachchiSearch(value, start = 0, result = 0, array) {
    let mass = array.sort((first, second) => first - second),
    check = true,
    index = 0,
    f = 0;
    console.log(mass);
    while(check){
        f = fibonachchi(index);
        if(f > mass.length - 1){
            f = mass.length-1;
            if (mass[f] < value || mass.length == 0){return 'sorry'}
        }

        if(mass[f] == value){
            console.log('success');
            result+=f;
            return result;
        } else if (mass[f] > value){
            start = fibonachchi(index - 1);
            result+=start;
            check = false;
        } else { index++; }
    }

    if(check == false){
        mass = mass.splice(start,f-1);
        return fibonachchiSearch(value, start, result, mass);
    }
}

let array = generateArray(100);
let test = [1,2,3,4,5,6,8,19,20,22,23];
console.log(array);

// const start = Date.now();
// console.log(binarySearch(6, [4,6,5,1,2,3,11]));
// const end = Date.now();
// console.log(`time is ${end-start}'ms`);

const start = Date.now();
console.log('Number founded in place : ',InterpolationSearch(8, array))
const end = Date.now();
console.log(`time is ${end-start}'ms`)

// let bTree = new BinarySearchTree()
// array.forEach(data => bTree.insert(data))
// const start = Date.now();
// console.log(bTree.search(bTree.root, 40))
// const end = Date.now();
// console.log(`time is ${end-start}'ms`)

// const startTime = Date.now();
// let start, index,result;
// console.log(fibonachchiSearch(101, start, result, array))
// const endTime = Date.now();
// console.log(`time is ${endTime-startTime}'ms`)

