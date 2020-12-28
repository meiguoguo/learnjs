console.log('Hello, JavaScript!')

console.log('Hello, JavaScript!')
console.log('Hello, JavaScript!')
console.log('Hello, JavaScript!')
console.log('Hello, JavaScript!')

console.log('Hello, JavaScript!')  // 输出Hello， JavaScript

// 大啊发射点发射点发射点发射点发


/* 
 *  hanshu: getUserName
 *   paramters: string
 */


var strName = 'xiaojichao'; 

let strName = 'xiaojichao';

const isHuman = true;
console.log(typeof isHuman)
isHuman = false

let a = 10;
console.log(typeof typeof a);

let a = 0.1
let b = 0.2
let c = a + b

console.log(c.toPrecision(3))

let d;
console.log(typeof d)

let e = null
console.log(e === undefined)

const strName = "xiaojichao"

const strName2 = 'xiaojichao'

const strName3 = 'He\'s a teacher'

let a1 = "xiaojichao"
let a2 = 'huyike'
let a3 = 'adasdfasdf'
const strName4 = 
`
<h1>
  <p>${a1}</p>
  <p>${a2}</p>
  <p>${a3}</p>
</h1>
`

console.log(strName4)


const a1 = Symbol()

console.log(typeof a1)


let a1 = 2, a2 = 3, a3 = 4

let a = (1,2,3,3,5)
console.log(a)

let age = 20;

a1 = (age>=30?'你是成年人':'你是个小娃娃')
console.log(a1)


const oStudent = {
    name: 'xiaojichao',
    age: 49
}

console.log('name1' in oStudent)

const str1 = [2,3,3,5,6];
console.log(3 in str1);

const oArray = new Array()
console.log(oArray instanceof Function)


const oStudent = {
    name: 'xiaojichao',
    age: 49
}
console.log('name' in oStudent)
delete oStudent.name
console.log('name' in oStudent)


const number = 20;
if (number === 20) {
  return '这个数字是 20!';
} else {
  return '这个数字不是 20!'
}
const number = 20
if (number < 10) {
  return '这个数字小于 10';
} else if (number >= 10 && number < 20) {
  return '这个数字大于等于10，但是小于20！';
} else if (number >= 20 && number < 50) {
  return '这个数字大于等于20，但是小于50！';
} else {
  return '我放弃了！我所知道的是它不小于50！';
}

const age = 20;
switch(age) {
  case 20:
    return '你20岁！';
    break;
  case 21:
    return '你21岁';
    break;
  default:
    return '你既不是20岁，也不是21岁';
}
