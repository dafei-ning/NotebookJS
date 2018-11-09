console.log('\n********* Starting Program *********');
console.log('Starting app.js');

// third party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// 自定义modules objects
const argv = yargs.argv;

////////////////////////////////////////////////////


var command = argv._[0];

console.log('command:', command);
console.log('Yargs:', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('\nNote created');
        console.log('------');
        console.log(`Title: ${note.title}`);
        console.log(`Body : ${note.body}`);
    } else {
        console.log('\nNote title is already taken!');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note) {
        console.log(`\nReading note: <${note.title}>`);
        console.log('------');
        console.log(`Content: ${note.body}`);
    } else {
        console.log(`Note <${argv.title}> not found`);
    }
} else if (command === 'remove') {   
    var check = notes.removeNote(argv.title);
    var message = check? `\nThe note <${argv.title}> has been deleted.` : `Note <${argv.title}> not found.`
    console.log(message);
} else {
    console.log('\nNo this command!');
}


console.log('********* Ending Program *********\n');



// var filteredArray = _.uniq(['Shuni', 1, 'Jack', 1, 2, 3]);
//console.log(filteredArray);
// console.log(_.isString(true));
// console.log(_.isString('true'));
// console.log('Result: ', notes.add(9, -2));

//var user = os.userInfo();
//console.log(user);
// fs.appendFileSync('greetings.txt', '\nHello ' + user.username + '!');
//fs.appendFileSync('greetings.txt', `\nHello ${user.username}! You are ${notes.age}.`); // es6 

