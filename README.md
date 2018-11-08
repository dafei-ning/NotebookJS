#Notes 

##Modules required

- `fs`: file manipulation
- `lodash`: Most common used modules
- `nodemon`: Always automatically restart for local testing
- `yargs`: to make string parsing easier, e.g --title secrets -> title : 'secret'

##Command

- `process.argv[0]` the first string of command line input
- `fs.appendFileSync()`: arg1: file to be appended, arg2: string appending
- `fs.writeFileSync()`: arg1: file to be written, arg2: object written
