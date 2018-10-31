console.log('Starting nodejs');

//console.log(module);
module.exports.addNote = () => {
    console.log('addNote');
    return 'new note';
};

module.exports.add = (a, b) => {
    return a + b;
};