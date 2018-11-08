console.log('Starting notes.js \n');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('note-data.json');  // 为了防止之前写的被remove
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('note-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title); // filter callback return true or false;
    if (duplicateNotes.length === 0) { // 如果没有duplicate title，就新创建note
        notes.push(note);
        saveNotes(notes);
    } 
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
