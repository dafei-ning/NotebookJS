console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


var filteredArray = _.uniq(['Andrew', 1, 'Jack', 1, 2, 3]);
console.log(filteredArray);
// console.log(_.isString(true));
// console.log(_.isString('true'));
// console.log('Result: ', notes.add(9, -2));

//var user = os.userInfo();
//console.log(user);
// fs.appendFileSync('greetings.txt', '\nHello ' + user.username + '!');
//fs.appendFileSync('greetings.txt', `\nHello ${user.username}! You are ${notes.age}.`); // es6 

