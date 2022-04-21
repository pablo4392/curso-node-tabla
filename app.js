const {createFile} = require('./helpers/multiplicar');
const argv = require('./config/yarns');


console.clear()

console.log(argv);

createFile(argv.b, argv.n, argv.l)
    .then(fileName => console.log(fileName))
    .catch(err => console.log(err))