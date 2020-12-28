
// 字面量
let a = "xiao", b = 'xiao1', c = `adadas`  // 字符串字面量

const oArray = [];   // 数组字面量

const oObject = {};   // 对象字面量

const oReg = \abc\;   // 正则表达式字面量


// 声明函数

function hello() {
    console.log('Hello, function!');
}

console.log(hello);
hello();

// 定义一个函数表达式
// 匿名函数
const hello = function() {
    console.log('hello, javascript!');
};

// 命名函数
const hello = function sayHello() {
    console.log('hello,js6');
}
hello();

console.log(typeof hello);

// Function() 构造函数，不建议使用
const hello = new Function("console.log('hello,javascript!')");

// 箭头函数， ES6 才有的
const hello = () => {
    console.log('hello,js');
};

// 返回值
//如果没有return,或者return后面为空，函数的返回值就为undefined
let sayHello = function() {
    return;
};
console.log(sayHello());

let sayHello2 = function() {
    let a = 1;
    return a;
};

// 如果调用的时候不提供实际参数，那么形参就会被赋值为 undefined
let add = function(a,b) {
    return a+b;
};

console.log(add());  //  NaN

let a = Infinity;
let b = -Infinity;

console.log(1 + null);


const add = function(a,b) {
    return a+b;
};

console.log(add(1,2,3,4,5)); 

const add1 = function() {
    if (arguments.length == 0) {
        return 0;
    } else if (arguments.length == 1) {
        return arguments[0];
    } else if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } 
};
console.log(add1(1,8));

const add2 = function(...numbers){
    let sum = 0;
    console.log(typeof numbers)
    console.log(numbers instanceof Array)
    for (const num of numbers) {
        sum = num + sum;
    }
    return sum;
}

a = add2(1,1,2,2,2,2,2);
console.log(a);

const add3 = function() {
    let sum = 0;
    console.log(typeof arguments);
    console.log(arguments instanceof Array)
    for (const num of arguments) {
        sum = num + sum;
    }
    return sum;
};

b = add3();
console.log(b);

const myname = function(b, a = 'xiao') {
    return b + a;
}

console.log(myName('hello'));

const sayHello1 = () => {
    return 'hello, JavaScript';
}

const sayHello1 = () => 'hello,javascript';
console.log(sayHello1());

const sayHello2 = a => {
    return 'hello' + a;
}

const sayHello3 = (a,b) =>  a + b;

// 回调
const dance = function () {
    console.log('我在跳舞！');
};

const dance = () => {
    console.log('我在跳舞！');
};

const sing = function (song, callback) {
    console.log('我在唱' + song);
    if ((typeof callback) == 'function') {
        callback();
    }
};

const sing = (song, callback) => {
    console.log('我在唱' + song);
    if ((typeof callback) == 'function') {
        callback();
    }
};

sing('国歌', dance)



const sing = (song, callback) => {
    console.log('我在唱' + song)
    callback();
}

sing('生日快快乐歌', () => {console.log('我在跳舞！')})


// 数组排序Array.sort()

const a1 = [1,3,2,10,22,8];
const a2 = a1.sort()
console.log(a2)

const num = (a,b) => a-b;
const a3 = a1.sort(num);
console.log(a3)

// Array.forEach()

const oArray1 = [1,2,2,4]
for (let i = 0; i < oArray1.length; i++) {
    console.log(oArray[i])
}

const oArray2 = [1,2,2,4]
for (const i of oArray2) {
    console.log(i);
}

const oArray3 = [1,2,2,4]
oArray3.forEach((arr1) => {console.log(arr1)});


// Array.map()

const oArray4 = [1,2,2,4]

const sum = (a) => a * a ;

const oArray5 = oArray4.map(sum);

console.log(oArray5)


// reduce

const oArray1 = [1,2,3,4,5].reduce((acc,val) => acc + val);
console.log(oArray1);

const oArray1 = [1,2,3,4,5]

const oArray2 = oArray1.reduce(
    (acc,curVal) => acc + curVal
)
console.log(oArray2)

const oArray3 = [1,2,3,4,5].reduce((acc,val) => acc + val, 10);
console.log(oArray3)


const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(" ");
console.log(words);
const total = words.reduce((acc, word) => acc + word.length, 0);
console.log(total);

// filter
const a1 = [1,2,3,12,8];

const a2 = a1.filter((x)=> x%2 ===0);
console.log(a2);

console.log([1,2,3].map( x => x*x ).reduce((acc,x) => acc + x ))










