const config = require('./config')
const colors = require('colors')

console.log(colors.green(JSON.stringify( config, null, 4 )))
console.log('')
