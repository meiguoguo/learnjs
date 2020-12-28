const batman = `
{"name": "Batman",
"real name": "Bruce Wayne",
"height": 74, 
"weight": 210, 
"hero":true, 
"villain": false, 
"allies": ["Robin","Batgirl","Superman"]
}`

let a = JSON.parse(batman);
console.log(a.name);

const oStudent = {
    name: 'xiaojichao',
    age: undefined,
    org: ['lovo','bean'],
    company: {cName: 'lovo', pos: '一环路'},
    learn() {
        console.log('I am learning JavaScript');
    }
};

let b = JSON.stringify(oStudent);
console.log(b);


