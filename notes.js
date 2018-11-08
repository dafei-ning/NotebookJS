console.log('Starting node.js \n');


const fs = require('fs');

//console.log(module);
// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'new note';
// };

var addNote = (title, body) => {
    var notes = [];
    var note ={
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('note-data.json');  // 为了防止之前写的被remove
        notes = JSON.parse(notesString);
    } catch (e) {
        // 不需要写任何东西，如果没有file，下面的writeFileSync直接新建
    }

    notes.push(note);
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Reading the note: ', title);
};

var removeNote = (title) => {
    console.log('Remove done: ', title);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};
