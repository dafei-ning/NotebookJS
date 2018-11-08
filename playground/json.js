// var obj = {
//     name : 'Andrew'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);
// console.log(typeof(obj));

// var persopnString = '{"name" : "Dafei", "age" : 28}';
// var person = JSON.parse(persopnString);

// console.log(typeof(person));
// console.log(person);

const fs = require('fs');

var originalNote = {
    title : 'a Title',
    body : 'a body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
// note

console.log(typeof note);
console.log(note.title);

// let x = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const Array = [];
// for (let i in x) {
//     Array.push(x[i]);
// }
// console.log(Array);

// let x = "hi";
// i = 0;
// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString(x));


const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
        return this;
    },
    getB() {
        console.log(this.b);
    }
}

obj.getA().getB();