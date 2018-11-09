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
        return note;
    } 
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    var notes = fetchNotes();
    var noteToRead = notes.filter((note) => note.title === title);
    return noteToRead[0]; // 这里return的时候是一个数组，而外面要求的是一个key-value pair，因此要注明是哪一个
};

var removeNote = (title) => {
    var notes = fetchNotes(); // fetch the notes
    var filteredNotes = notes.filter((note) => note.title !== title); // filter notes, removing the one with title of argument
    saveNotes(filteredNotes); // save new notes array
    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};
