# Notebook

## Modules required

- `fs`: file manipulation
- `lodash`: Most common used modules
- `nodemon`: Always automatically restart for local testing
- `yargs`: to make string parsing easier, e.g --title secrets -> title : 'secret'

## Command

- `process.argv[0]` the first string of command line input
- `fs.appendFileSync()`: arg1: file to be appended, arg2: string appending
- `fs.writeFileSync()`: arg1: file to be written, arg2: object written to the file 重写会覆盖原有的东西
- `fs.readFileSync()`: arg1: file to be read. 通常把file先读下来，然后再在file的后面append新加的东西，read出来的是string

## Function

- `JSON.parse()`: arg1: string. 把string parse成json
- `JSON.stringify()`: arg1: JSON. 把json转换成string
- `notes.filter()`: filter is an array method that takes a callback.
```js
var duplicateNotes = notes.filter((note) => {
    return note.title === title;
});
```
