const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Sera la base para crear la tabla de multiplicar'
    })
    .option('n',{
        alias: 'limite',
        type: 'number',
        default: 10,
        describe: 'Define el limite al que se creara la tabla'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false, 
        describe: 'Mostrara la tabla creada en consola'
    })
    .check((argv, options) => {
        if( isNaN(argv.b)){
            throw 'La base debe ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv