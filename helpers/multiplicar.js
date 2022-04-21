const fs = require('fs');
const colors = require('../config/colors')

const createFile = async(base, limite, listar) => {
    try {
        let output = '';
        let consola = '';

        for(let i = 1; i <= limite; i++) {
            output += `${base} x ${i} = ${base * i} \n`
            consola +=  colors.signs(`${colors.base(base)} x ${colors.mult(i)} = ${colors.answer(base * i)} \n`)
        }
                
        fs.writeFileSync(`./salida/tabla-${base}.txt`, output)

        if(listar) {
            console.log(colors.border('======================='));
            console.log(colors.title(`      TABLA DEL ${base}`));
            console.log(colors.border('======================='));
            console.log(consola)
        }
        
        return colors.succes(colors.succesTitle(`  TABLA-${base}.txt SE CREO CON EXITO  `));

    } catch (error) {
        throw colors.fail(error)
    }
}

module.exports ={
    createFile
}