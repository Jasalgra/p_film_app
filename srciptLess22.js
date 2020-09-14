let a = 5
    b = a

    b = b+5
    console.log(b);
    console.log(a);
    console.log(b);
    

const obj = {
    a:8,
    b:1
};

// const copy = obj; /* Ссылка.... */

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let copyObj = {};

    let key; 
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }

    return copyObj;
}

const num = {
    a:2,
    b:5,
    c: {
         x: 7,
         y: 4
    }
}

const newNum = copy(num);
newNum.a = 55;
console.log(newNum);
console.log(num);


const add = {
    d:3,
    e:4
}

console.log(Object.assign(num, add));

const clone = Object.assign( {}, add);

clone.d = 33;

console.log(clone);
console.log(add);

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice()

newArr[1] = "changed";

console.log(newArr);
console.log(oldArr);



const video = ['youtube', 'vimeo'],
      blogs = ['wordpress', 'blogger'],
      inet = [...video, ...blogs, 'vk', 'fb'];

console.log(video);
console.log(inet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    
}

const logNum = [2 , 5, 23]

log(...logNum)




const array = ['a', 'b'];
const newArray = [...array];

const q = {
    one:1,
    two:2
}

const newObj = {...q};
console.log(newObj);
