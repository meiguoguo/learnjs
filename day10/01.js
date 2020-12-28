// const student = {
//     'studentName': 'xiaojichao',
//     age: 49,
//     learn() {
//         console.log('hello, JavaScript!');
//     }
// };


// student["studentName"]
// student.learn();

// const oStudent = new Object();
// oStudent.studentName = 'xiao';
// oStudent.age = '50';
// oStudent.learn = function() {
//     console.log('hello');
// };

// delete oStudent.studentName;

// console.log(oStudent.studentName);  // undefined

// let studentName = 'xiaojichao', age = 49;

// const oStudent1 = {
//     studentName: studentName,
//     age: age,
//     learn() {
//         console.log('hello, learn me');
//     }
// };

// oStudent1.learn();
// oStudent1['learn']();


// console.log(oStudent1.age);

// const oStudent2 = {studentName, age};

// console.log(oStudent2.studentName);


// let a = 'catch', b = 'Phrase';
// const hulk = {
//     name: 'Hulk',
//     [a + b]: 'Hulk Smash!'
// };

// console.log(hulk); // { name: 'Hulk', catchPhrase: 'Hulk Smash!' }
  

// const name = Symbol('name');
// const superGirl = {[name]: 'superGirl'};

// console.log(superGirl[name]); // -> "superGirl"

// const realName = Symbol('real name');
// superGirl[realName] = 'kara Danvers'; // 添加新属性

// console.log(superGirl[realName]); // -> 'kara Danvers'
// console.log(superGirl.realName);  // undefined

// console.log(superGirl); // -> { [Symbol(name)]: 'superGirl', [Symbol(real name)]: 'kara Danvers' }

// const daredevil = { 
//   [name]: 'Daredevil', 
//   [realName]: 'Matt Murdoch' 
// }; 
// console.log(daredevil); // -> { [Symbol(name)]: 'Daredevil', [Symbol(real name)]: 'Matt Murdoch' }


const student = {
    studentName: 'xiaojichao',
    age: 49,
    learn() {
        console.log('hello, JavaScript!');
    }
};

console.log('studentName' in student);
console.log('learn' in student);

if (student.studentName !== undefined) {
    console.log('studentName属性存在！');
}

if (student.hasOwnProperty('learn')) {
    console.log('learn方法存在');
}

for (let p in student) {
    console.log(p);
}


for (let key of Object.keys(student)) {
    console.log(key);
}

for (let value of Object.values(student)) {
    console.log(value);
}

for (let [key,value] of Object.entries(student)) {
    console.clear();
    console.log(`key: ${key}, value: ${value}`);
} 

const jla = { 
    superman: { realName: 'Clark Kent' }, 
    batman: { realName: 'Bruce Wayne' }, 
    wonderWoman: { realName: 'Diana Prince' }, 
    flash: { realName: 'Barry Allen' }, 
    aquaman: { realName: 'Arthur Curry' }, 
  };

  console.log(jla.wonderWoman.realName); // -> Diana Prince
  

  const thor = {
    name: 'Thor' 
  }; 
  const cloneThor = thor;

  cloneThor.name = 'Clor';

  console.log( thor.name ); // -> 'Clor'

